import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog/posts');
  
  try {
    const files = await fs.readdir(postsDirectory);
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.md') && file !== 'README.md')
        .map(async file => {
          const filePath = path.join(postsDirectory, file);
          const fileContent = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContent);
          
          const date = data.date ? new Date(data.date).toISOString() : new Date().toISOString();
          
          return {
            slug: file.replace('.md', ''),
            title: data.title || 'Untitled Post',
            excerpt: data.excerpt || '',
            date: date,
            author: data.author || 'Mitchell Cohen',
            category: data.category || 'Uncategorized',
            tags: data.tags || [],
            readTime: data.readTime || '5 min read',
            image: data.image || '',
          };
        })
    );

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Blog error:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Thoughts and insights on music production, technology, and creativity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="bg-secondary px-2.5 py-1 rounded-full">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </CardDescription>
                </div>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="w-full group">
                  <Link href={`/blog/${post.slug}`}>
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}