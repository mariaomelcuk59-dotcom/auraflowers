// Проста функція для додавання ефекту при кліку на картку переваг
function highlightFeature(element) {
    // Спочатку знімаємо виділення з усіх карток
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.transform = "scale(1)";
        card.style.borderColor = "#d1b1b1";
    });

    // Додаємо ефект до натиснутої картки
    element.style.transform = "scale(1.1)";
    element.style.borderColor = "#f0a5b5";
}