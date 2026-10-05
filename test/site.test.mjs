import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
test('all subjects have native same-tab links in the catalog and suggested path', () => {
  for (const host of ['dsa-with-ui', 'lld-with-ui', 'hld-with-ui', 'cs-fundamentals-with-ui']) {
    assert.equal(html.split(`https://${host}.vercel.app/`).length - 1, 2);
  }
  assert.doesNotMatch(html, /target\s*=/);
  assert.match(html, /href="#main"/);
});
test('assets use relative paths for production and preview deployments', async () => {
  for (const asset of ['styles.css', 'theme.js', 'app.js']) {
    assert.ok(html.includes(`"./${asset}"`));
    assert.ok((await readFile(new URL(`../${asset}`, import.meta.url))).length > 0);
  }
});
test('Vercel deploys the same static build verified in CI', async () => {
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.framework, null);
});
