const finishes = [
    "Pure 24K Yellow Gold",
    "Pure 24K White Gold",
    "Pure 24K Pink Gold",
    "Pure 24K Rose Gold",
    "Pure 24K Black Gold"
];

const itemTypes = ["Earrings", "Bracelet", "Necklace", "Brooch", "Ring"];

// Strictly structured pricing array for 25 items varying up to 9M USD, including the 2,100 and 2,200 entry values
const variedPrices = [
    2100, 2200, 68000, 145000, 290000,
    450000, 720000, 980000, 1350000, 1950000,
    2550000, 3200000, 4100000, 4900000, 5600000,
    6350000, 7100000, 7650000, 8300000, 8750000,
    380000, 890000, 1420000, 4850000, 9000000
];

const catalogData = [];
let indexCount = 0;

finishes.forEach(finish => {
    itemTypes.forEach(type => {
        const title = `${finish} ${type}`;
        const itemPrice = variedPrices[indexCount % variedPrices.length];
        catalogData.push({
            name: title,
            description: `Handcrafted framework exquisitely set with fine diamonds.`,
            price: itemPrice
        });
        indexCount++;
    });
});

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
}

function renderCatalog() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = catalogData.map(item => `
        <div class="product-card">
            <h3 class="product-title">${item.name}</h3>
            <p class="product-desc">${item.description}</p>
            <div class="product-price">${formatCurrency(item.price)}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderCatalog);
