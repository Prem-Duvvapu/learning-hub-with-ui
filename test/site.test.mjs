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
test('assets work under the GitHub Pages project subpath', async () => {
  for (const asset of ['styles.css', 'theme.js', 'app.js']) {
    assert.ok(html.includes(`"./${asset}"`));
    assert.ok((await readFile(new URL(`../${asset}`, import.meta.url))).length > 0);
  }
});
