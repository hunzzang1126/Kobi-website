// Force scroll to top — runs before React hydration
if (typeof window !== 'undefined') {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}
