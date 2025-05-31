// content/custom.js
console.log("До скрипта")
// content/custom.js

window.addEventListener('DOMContentLoaded', () => {
  try {
    // Указываем точно тот XPath, по которому находится span с текстом "on this page"
    const xpathExpr = '/html/body/div[1]/main/div/div[2]/div[2]/div/div[2]/div/div/div/span';

    // document.evaluate возвращает результат поиска по XPath
    const xpathResult = document.evaluate(
      xpathExpr,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    console.log("Результат поиска:")
    console.log(xpathResult)

    // Получаем сам элемент <span>
    const spanElem = xpathResult.singleNodeValue;
    console.log("элемент span:")
    console.log(spanElem)

    // Если нашли элемент и его текст соответствует "on this page" (без учёта регистра и пробелов)
    if (
      spanElem &&
      spanElem.innerText &&
      spanElem.innerText.trim().toLowerCase() === 'on this page'
    ) {
      // Меняем содержимое на "На этой странице"
      spanElem.innerText = 'На этой странице';
    }
  } catch (err) {
    // На случай, если XPath не сработал или структура DOM изменилась
    console.warn('Не удалось найти элемент по XPath для перевода "on this page":', err);
  }
});

console.log("После скрипта")