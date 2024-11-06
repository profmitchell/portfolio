import { NextResponse } from "next/server";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getPostBySlug(params.slug);
    const relatedPosts = await getRelatedPosts(post);
    
    return NextResponse.json({
      ...post,
      relatedPosts
    });
  } catch (error) {
    console.error("Error loading blog post:", error);
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }
}