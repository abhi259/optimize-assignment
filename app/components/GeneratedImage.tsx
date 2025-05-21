import Image from "next/image";

interface GeneratedImageProps {
  imageUrl: string;
}

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
  return (
    <div className="mt-8">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt="Generated artwork"
          className="object-contain"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          
        />
      </div>
    </div>
  );
}
