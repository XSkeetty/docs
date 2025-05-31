console.log("До скрипта")

(function() {
  console.log('custom.js: скрипт загружен');

  function replaceAllOnThisPage() {
    console.log('→ replaceAllOnThisPage() запущена');
    // Ищем все span на странице
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

  // Проверяем состояние документа
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded сработал, вызываем replaceAllOnThisPage()');
      replaceAllOnThisPage();
    });
  } else {
    console.log('document.readyState != "loading" (', document.readyState, '), вызываем сразу replaceAllOnThisPage()');
    replaceAllOnThisPage();
  }
})();


console.log("После скрипта")