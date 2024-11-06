import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost } from './types/blog';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/blog/posts');

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(POSTS_DIRECTORY);
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.md') && file !== 'README.md')
        .map(async file => {
          const slug = file.replace('.md', '');
          return getPostBySlug(slug);
        })
    );

    // Sort posts by date in descending order
    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    if (!data.title || !data.date) {
      throw new Error(`Invalid frontmatter in post: ${slug}`);
    }

    const post: BlogPost = {
      slug,
      title: data.title,
      excerpt: data.excerpt || '',
      content: marked(content),
      date: data.date,
      author: data.author || 'Mitchell Cohen',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      readTime: data.readTime || '5 min read',
      image: data.image,
    };

    return post;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Post not found: ${slug}`);
    }
    throw error;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => 
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export async function getRecentPosts(count: number = 5): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, count);
}

export async function getRelatedPosts(currentPost: BlogPost, count: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  
  return allPosts
    .filter(post => 
      post.slug !== currentPost.slug && (
        post.category === currentPost.category ||
        post.tags?.some(tag => currentPost.tags?.includes(tag))
      )
    )
    .slice(0, count);
}