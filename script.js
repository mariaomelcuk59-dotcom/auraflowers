// Простий скрипт для підсвічування активної знижки
document.querySelectorAll('.offer').forEach(offer => {
  offer.addEventListener('mouseenter', () => {
    offer.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.4)';
  });
  offer.addEventListener('mouseleave', () => {
    offer.style.boxShadow = 'none';
  });
});
