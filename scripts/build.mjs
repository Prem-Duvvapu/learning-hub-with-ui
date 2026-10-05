import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'theme.js', 'app.js']) {
  await copyFile(file, `dist/${file}`);
}
