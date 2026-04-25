import { cache } from 'react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

type LegacyFileName = 'index.html' | 'how-to-use.html' | 'technical.html' | 'future.html';

type LegacyPage = {
  title: string;
  description: string;
  mainHtml: string;
};

const routeMap: Record<string, string> = {
  index: '/',
  'how-to-use': '/how-to-use',
  technical: '/technical',
  future: '/future',
};

function normalizeInternalLinks(html: string): string {
  return html.replace(
    /href="(index|how-to-use|technical|future)\.html(#[^"]*)?"/g,
    (_full, page: string, hash?: string) => {
      const route = routeMap[page] ?? '/';
      return `href="${route}${hash ?? ''}"`;
    },
  );
}

function extractMainHtml(fullHtml: string): string {
  const match = fullHtml.match(/<main class="page-content">([\s\S]*?)<\/main>/i);

  if (!match) {
    throw new Error('Could not find <main class="page-content"> in legacy HTML file.');
  }

  return normalizeInternalLinks(match[1]);
}

function extractTag(fullHtml: string, tag: 'title' | 'meta'): string {
  if (tag === 'title') {
    const match = fullHtml.match(/<title>([\s\S]*?)<\/title>/i);
    return match?.[1].trim() ?? 'VX6';
  }

  const match = fullHtml.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/>/i);
  return match?.[1].trim() ?? 'VX6 documentation';
}

export const getLegacyPage = cache((fileName: LegacyFileName): LegacyPage => {
  const filePath = join(process.cwd(), fileName);
  const fullHtml = readFileSync(filePath, 'utf8');

  return {
    title: extractTag(fullHtml, 'title'),
    description: extractTag(fullHtml, 'meta'),
    mainHtml: extractMainHtml(fullHtml),
  };
});
