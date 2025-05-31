// content/custom.js
console.log("До скрипта")
window.addEventListener('DOMContentLoaded', () => {
  // Ищем блок "On this page"
  // В разных темах Mintlify это может быть либо h2, либо h3 с классом toc-title
  const tocHeader = document.querySelector('#table-of-contents .toc-title');
  if (!tocHeader) return;
  
  console.log("Внутри скрипта")

  // Если текст точно совпадает, заменяем его
  if (tocHeader.innerText.trim() === 'On this page') {
    tocHeader.innerText = 'На этой странице';
  }
});
console.log("После скрипта")