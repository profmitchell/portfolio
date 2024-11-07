import { NextResponse } from "next/server";
import { getAllPosts, getPostsByCategory, getPostsByTag } from "@/lib/blog";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');

    let posts;
    if (category) {
      posts = await getPostsByCategory(category);
    } else if (tag) {
      posts = await getPostsByTag(tag);
    } else {
      posts = await getAllPosts();
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return NextResponse.json(
      { error: "Failed to load blog posts" },
      { status: 500 }
    );
  }
}