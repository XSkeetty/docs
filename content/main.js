// Переопределение метода document.createElement
(function() {
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName) {
    const element = originalCreateElement.call(document, tagName);
    if (tagName.toLowerCase() === 'script') {
      Object.defineProperty(element, 'src', {
        set: function(value) {
          if (value.includes('cdn.lr-in-prod.com/logger-1.min.js')) {
            console.warn('Блокировка загрузки скрипта:', value);
          } else {
            element.setAttribute('src', value);
          }
        },
        get: function() {
          return element.getAttribute('src');
        }
      });
    }
    return element;
  };
})();
