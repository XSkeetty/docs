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

;(function() {
  console.log('[custom.js] Перехватчик создания <script> запущен');

  // Сохраняем оригинальную функцию
  const origCreateElement = Document.prototype.createElement;

  // Патчим document.createElement, чтобы фильтровать скрипты
  Document.prototype.createElement = function(tagName, options) {
    const el = origCreateElement.call(this, tagName, options);

    // Если создают <script>, то патчим его src
    if (tagName.toLowerCase() === 'script') {
      // Патчим setter на .src
      Object.defineProperty(el, 'src', {
        set(value) {
          // Если src содержит LogRocket URL — не вставляем
          if (typeof value === 'string' && value.includes('cdn.lr-in-prod.com/logger-1.min.js')) {
            console.log('[custom.js] Блокируем установку src для LogRocket:', value);
            return;
          }
          // Во всех остальных случаях — даём оригинальный setter
          HTMLScriptElement.prototype.__lookupSetter__('src').call(this, value);
        },
        get() {
          return HTMLScriptElement.prototype.__lookupGetter__('src').call(this);
        },
        configurable: true,
        enumerable: true
      });
    }

    return el;
  };

  // После «патча» можно также попробовать удалить уже добавленные скрипты:
  if (document.readyState !== 'loading') {
    const already = document.querySelectorAll('script[src*="cdn.lr-in-prod.com/logger-1.min.js"]');
    already.forEach((e) => {
      console.log('[custom.js] Удаляем уже существующий LogRocket:', e.src);
      e.remove();
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      const alreadyDOM = document.querySelectorAll('script[src*="cdn.lr-in-prod.com/logger-1.min.js"]');
      alreadyDOM.forEach((e) => {
        console.log('[custom.js] После DOMContentLoaded — удаляем LogRocket:', e.src);
        e.remove();
      });
    });
  }
})();
