import fs from 'fs';
import path from 'path';

export const readCssFile = (cssPath) => {
  const absolutePath = path.resolve(process.cwd(), cssPath);

  const content = fs.readFileSync(absolutePath, 'utf8');

  // Extract only inside :root { ... }
  const rootMatch = content.match(/:root\s*{([\s\S]*?)}/);

  if (!rootMatch) {
    throw new Error('No :root found in CSS file');
  }

  const rootContent = rootMatch[1]; // Only what's inside :root { ... }

  const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
  const variables = [];

  let match;
  while ((match = regex.exec(rootContent)) !== null) {
    variables.push({ name: match[1], value: match[2].trim() });
  }

  return variables;
};
