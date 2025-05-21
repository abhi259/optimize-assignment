import { blogPosts } from "../page";

export async function generateStaticParams() {
  const slugs = blogPosts.map((post) => ({
    slug: post.link.split("/").pop(),
  }));
  return slugs;
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">{slug}</h1>
      </div>
    </div>
  );
}
