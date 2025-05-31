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

// Обёртка в IIFE с явными точками с запятой, чтобы не было проблем с ASI.
;(function() {
  // Функция, которая пытается найти тег <script> по URL и удалить его
  function removeLogRocketScript() {
    // Ищем все <script> с src, содержащим "cdn.lr-in-prod.com/logger-1.min.js"
    const scripts = document.querySelectorAll('script[src*="cdn.lr-in-prod.com/logger-1.min.js"]');

    if (scripts.length) {
      scripts.forEach((el) => {
        console.log('[custom.js] Удаляем скрипт LogRocket:', el.src);
        el.remove();
      });
    }
  }

  // Если DOM ещё загружается, ждём DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[custom.js] DOMContentLoaded — пробуем удалить LogRocket');
      removeLogRocketScript();
    });
  } else {
    // Если DOM уже готов, сразу вызываем
    console.log('[custom.js] DOM уже готов (' + document.readyState + ') — сразу удаляем LogRocket');
    removeLogRocketScript();
  }
})();
