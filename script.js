const finishes = [
    "Pure 24K Yellow Gold",
    "Pure 24K White Gold",
    "Pure 24K Pink Gold",
    "Pure 24K Rose Gold",
    "Pure 24K Black Gold"
];

const itemTypes = ["Earrings", "Bracelet", "Necklace", "Brooch", "Ring"];

const imagePool = [
    "IMG-20261001-WA0000.jpg",
    "IMG-20261001-WA0001.jpg",
    "IMG-20261001-WA0002.jpg",
    "IMG-20261001-WA0003.jpg",
    "IMG-20261001-WA0004.jpg",
    "IMG-20261001-WA0005.jpg",
    "IMG-20261001-WA0006.jpg",
    "IMG-20261001-WA0007.jpg",
    "IMG-20261001-WA0008.jpg",
    "IMG-20261001-WA0009.jpg",
    "IMG-20261001-WA0010.jpg",
    "IMG-20261001-WA0417.jpg",
    "IMG-20261001-WA0914.jpg",
    "IMG-20261001-WA1363.jpg",
    "IMG-20261001-WA1377.jpg",
    "IMG-20261001-WA1472.jpg",
    "IMG-20261001-WA1567.jpg",
    "IMG-20261001-WA1851.jpg",
    "IMG-20261001-WA2469.jpg",
    "IMG-20261001-WA2491.jpg",
    "IMG-20261001-WA2564.jpg",
    "IMG-20261001-WA2661.jpg",
    "IMG-20261001-WA2837.jpg",
    "IMG-20261001-WA3294.jpg",
    "IMG-20261001-WA3310.jpg"
];

const variedPrices = [
    2100, 2200, 68000, 145000, 290000,
    450000, 720000, 980000, 1350000, 1950000,
    2550000, 3200000, 4100000, 4900000, 5600000,
    6350000, 7100000, 7650000, 8300000, 8750000,
    380000, 890000, 1420000, 4850000, 9000000
];

const catalogData = [];
const imageByProductName = {};
let indexCount = 0;

finishes.forEach((finish) => {
    itemTypes.forEach((type) => {
        const title = `${finish} ${type}`;
        const itemPrice = variedPrices[indexCount % variedPrices.length];
        const imageName = imagePool[indexCount % imagePool.length];

        imageByProductName[title] = imageName;

        catalogData.push({
            name: title,
            description: "Handcrafted framework exquisitely set with fine diamonds.",
            price: itemPrice,
            image: imageName
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
    if (!grid) return;

    grid.innerHTML = catalogData.map((item) => {
        const matchedImage = imageByProductName[item.name] || item.image;

        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${matchedImage}" alt="${item.name}" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">${item.description}</p>
                <div class="product-price">${formatCurrency(item.price)}</div>
            </article>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', renderCatalog);
