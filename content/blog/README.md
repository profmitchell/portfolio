# Blog Content Guide

This directory contains all blog posts for the website. Each post is written in Markdown format with YAML frontmatter.

## File Structure

```
content/blog/
├── your-post-slug.md
└── another-post-slug.md
```

## Creating a New Post

1. Create a new `.md` file in this directory
2. File name becomes the URL slug (e.g., `music-production-tips.md` → `/blog/music-production-tips`)
3. Include required frontmatter

### Required Frontmatter

```yaml
---
title: "Your Post Title"
excerpt: "A brief description of your post (shown in previews)"
date: "2024-03-15"
author: "Mitchell Cohen"
category: "Technology"
readTime: "5 min read"
tags: ["music", "production", "tips"]
image: "https://images.unsplash.com/..." # Optional
---
```

### Example Post

```markdown
---
title: "Essential VST Plugins for 2024"
excerpt: "A curated list of must-have VST plugins for modern music production"
date: "2024-03-10"
author: "Mitchell Cohen"
category: "Gear"
readTime: "8 min read"
tags: ["plugins", "production", "gear"]
image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
---

# Essential VST Plugins for 2024

In this guide, we'll explore the most essential VST plugins for modern music production...

## Synthesizers

### 1. Serum
Versatile wavetable synthesizer perfect for...

## Effects

### 1. FabFilter Pro-Q 3
Industry-standard equalizer offering...

## Conclusion

These plugins form the foundation of a professional...
```

## Markdown Features

- Headers: `# H1`, `## H2`, `### H3`
- Lists: Bullet points and numbered lists
- Links: `[text](url)`
- Images: `![alt text](image-url)`
- Code blocks: \```language-name
- Inline code: \`code\`
- Blockquotes: > quote
- Tables: Standard Markdown tables
- Bold: `**text**`
- Italic: `*text*`

## Best Practices

1. **Images**
   - Use high-quality images
   - Optimize for web
   - Include alt text
   - Host on reliable CDN or Unsplash

2. **Content Structure**
   - Clear hierarchy with headers
   - Short paragraphs
   - Use lists for better readability
   - Include code examples where relevant

3. **SEO**
   - Descriptive titles
   - Relevant tags
   - Meaningful excerpts
   - Proper heading structure

4. **Categories**
   - Technology
   - Gear
   - Tutorial
   - Industry
   - Production
   - Sound Design
   - Business
   - Creative

## Publishing Workflow

1. Write post in Markdown
2. Add frontmatter
3. Place file in `content/blog/`
4. Commit changes
5. Deploy site

## Support

For questions about blog post formatting or publishing:
- Email: content@example.com
- Documentation: docs.example.com/blog-guide