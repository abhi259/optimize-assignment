"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "pexels";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
        if (!apiKey) {
          throw new Error("Pexels API key is not configured");
        }

        const client = createClient(apiKey);
        const response = await client.photos.search({
          query: "ai generated art",
          per_page: 80,
        });

        if ("error" in response) {
          throw new Error(`Pexels API error: ${response.error}`);
        }

        const formattedPhotos = response.photos.map((photo) => ({
          id: photo.id,
          title: photo.alt || "Untitled",
          description: photo.alt || "No description available",
          image: photo.src.large2x,
          tags: photo.alt
            ? photo.alt.split(",").map((tag) => tag.trim())
            : ["AI Art"],
          photographer: photo.photographer,
          photographerUrl: photo.photographer_url,
        }));

        setPhotos(formattedPhotos);
      } catch (err) {
        console.error("Failed to fetch photos:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load images. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center" role="status" aria-live="polite">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"
            aria-label="Loading gallery"
          />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading gallery...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.image}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={photo.title}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  priority={photos.indexOf(photo) < 6}
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
