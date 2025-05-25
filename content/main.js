console.log("Пользовательский скрипт загружен!");
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});
