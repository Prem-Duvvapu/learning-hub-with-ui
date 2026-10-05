const themeButton = document.querySelector('#theme-toggle');
const updateThemeLabel = () => {
  const label = document.documentElement.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  themeButton.textContent = label === 'Switch to light theme' ? 'Light theme' : 'Dark theme';
  themeButton.setAttribute('aria-label', label);
};
themeButton.hidden = false;
updateThemeLabel();
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('learning-hub-theme', theme); } catch {}
  updateThemeLabel();
});

const subjects = new Map([...document.querySelectorAll('.subject-card')].map(card => [
  card.dataset.subject,
  { href: card.href, name: card.querySelector('h3').textContent.replace(/\s+/g, ' ').trim() },
]));
const showRecent = () => {
  let lastSubject;
  try { lastSubject = localStorage.getItem('learning-hub-last-subject'); } catch {}
  const subject = subjects.get(lastSubject);
  document.querySelector('#recent').hidden = !subject;
  if (!subject) return;
  document.querySelector('#recent-name').textContent = subject.name;
  const link = document.querySelector('#recent-link');
  link.href = subject.href;
  link.dataset.subject = lastSubject;
};
document.addEventListener('click', event => {
  const link = event.target.closest('a[data-subject]');
  if (!link || !subjects.has(link.dataset.subject)) return;
  try { localStorage.setItem('learning-hub-last-subject', link.dataset.subject); } catch {}
});
window.addEventListener('pageshow', showRecent);
showRecent();
