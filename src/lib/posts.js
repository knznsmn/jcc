import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
  const posts = files.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      ...data,
    };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    slug,
    contentHtml,
    ...data,
  };
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
}
