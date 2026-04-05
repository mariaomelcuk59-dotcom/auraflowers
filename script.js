// 1. Ефект виділення карток переваг (з вашого оригіналу)
function highlightFeature(element) {
    // Спочатку знімаємо виділення з усіх карток
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.transform = "scale(1)";
        card.style.borderColor = "#d1b1b1";
        card.style.boxShadow = "none";
    });

    // Додаємо ефект до натиснутої картки
    element.style.transform = "scale(1.1)";
    element.style.borderColor = "#f0a5b5";
    element.style.boxShadow = "0 10px 20px rgba(240, 165, 181, 0.2)";
}

// 2. Логіка додавання товару в кошик (імітація)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h4').innerText;
            
            // Зміна тексту кнопки для зворотного зв'язку
            const originalText = button.innerText;
            button.innerText = "Додано! ✓";
            button.style.backgroundColor = "#95d5b2"; // Зелений колір
            
            alert(`Квітку "${productName}" додано до кошика!`);
            
            // Повертаємо кнопку до початкового стану через 2 секунди
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = "#f0a5b5";
            }, 2000);
        });
    });
});

// 3. Анімація появи елементів при прокручуванні (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});

// 4. Підсвічування активного пункту меню
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll('.nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.style.fontWeight = "bold";
        link.style.borderBottom = "2px solid #f0a5b5";
    }
});