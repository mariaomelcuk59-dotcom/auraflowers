const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.style.border = 'none');
    item.style.border = '2px solid #5aa0ff';
  });
});