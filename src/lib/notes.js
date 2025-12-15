import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const notesDirectory = path.join(process.cwd(), 'notes');

export function getAllNotes() {
  if (!fs.existsSync(notesDirectory)) return [];
  const files = fs.readdirSync(notesDirectory).filter((f) => f.endsWith('.md'));
  const notes = files.map((fileName) => {
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      ...data,
    };
  });
  return notes.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getNoteBySlug(slug) {
  const fullPath = path.join(notesDirectory, `${slug}.md`);
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

export function getNoteSlugs() {
  if (!fs.existsSync(notesDirectory)) return [];
  return fs
    .readdirSync(notesDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
