// Локализация "on this page"

(function() {
  function replaceAllOnThisPage() {
    const allSpans = document.querySelectorAll('span');

    allSpans.forEach((span) => {
      // Если текст точно “on this page” (игнорируем регистр/пробелы)
      if (span.innerText && span.innerText.trim().toLowerCase() === 'on this page') {
        console.log('   Найден <span>:', span);
        span.innerText = 'На этой странице';
        console.log('   Текст у этого <span> заменён на "На этой странице"');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded сработал, вызываем replaceAllOnThisPage()');
      replaceAllOnThisPage();
    });
  } else {
    replaceAllOnThisPage();
  }
})();