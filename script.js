const quotes = [
    '前路漫漫，但每一步都算数。',
    '你现在做的每一次坚持，都会在未来发光。',
    '心有热爱，脚下就会有方向。',
    '慢一点也没关系，稳一点更重要。',
    '把今天过好，明天就会少一点慌张。'
];

const clockEl = document.getElementById('clock');
const quoteTextEl = document.getElementById('quoteText');
const layoutLabelEl = document.getElementById('layoutLabel');
const layoutButtons = document.querySelectorAll('.layout-btn');

function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleString('zh-CN', {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function typeQuote(text, speed = 62) {
    quoteTextEl.textContent = '';
    let index = 0;

    function step() {
        quoteTextEl.textContent = text.slice(0, index + 1);
        index += 1;

        if (index < text.length) {
            window.setTimeout(step, speed);
        }
    }

    step();
}

function showRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    typeQuote(quote);
}

function applyLayout(layoutName) {
    document.body.classList.remove('layout-showcase', 'layout-grid', 'layout-focus');
    document.body.classList.add(layoutName);

    layoutButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.layout === layoutName);
    });

    layoutLabelEl.textContent = {
        'layout-showcase': '展示型',
        'layout-grid': '网格型',
        'layout-focus': '沉浸型'
    }[layoutName] || '展示型';
}

layoutButtons.forEach((button) => {
    button.addEventListener('click', () => applyLayout(button.dataset.layout));
});

updateClock();
window.setInterval(updateClock, 1000);
showRandomQuote();

window.setInterval(() => {
    showRandomQuote();
}, 12000);