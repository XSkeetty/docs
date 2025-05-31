// Локализация "on this page"

(function() {
  function replaceAllOnThisPage() {
    const allSpans = document.querySelectorAll('span');

    allSpans.forEach((span) => {
      // Если текст точно “on this page” (игнорируем регистр/пробелы)
      if (span.innerText && span.innerText.trim().toLowerCase() === 'on this page') {
        span.innerText = 'На этой странице';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      replaceAllOnThisPage();
    });
  } else {
    replaceAllOnThisPage();
  }
})();