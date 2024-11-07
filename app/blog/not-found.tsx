import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Blog Post Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link href="/blog">Return to Blog</Link>
        </Button>
      </div>
    </div>
  );
}