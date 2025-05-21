"use client";

import { useState } from "react";
import PromptInput from "../components/PromptInput";
import GeneratedImage from "../components/GeneratedImage";
import image11 from "../images/11.png";
import Link from "next/link";

export default function Demo() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsGenerating(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setGeneratedImage(image11.src);
    } catch (error) {
      console.error("Failed to generate image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Try MagicMoments
        </h1>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[322px]">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />

          {generatedImage && <GeneratedImage imageUrl={generatedImage} />}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Want to create more? Check out our{" "}
            <Link
              href="/pricing"
              prefetch={true}
              className="text-purple-600 hover:underline"
            >
              pricing plans
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
