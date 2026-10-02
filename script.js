const products = [
    // Brooches
    { name: "Pure 24k pink gold brooch", price: 1850, image: "IMG-20261001-WA0000.jpg" },
    { name: "Pure 24k white gold brooch", price: 2100, image: "IMG-20261001-WA0001.jpg" },
    { name: "Pure 24k rose gold brooch", price: 1950, image: "IMG-20261001-WA0002.jpg" },
    { name: "Pure 24k green gold brooch", price: 2200, image: "IMG-20261001-WA0003.jpg" },
    { name: "Pure 24k yellow gold brooch", price: 1800, image: "IMG-20261001-WA0004.jpg" },
    { name: "Pure 24k white gold brooch set with fine diamond", price: 68000, image: "IMG-20261001-WA0005.jpg" },

    // Sets with fine diamond
    { name: "Pure 24k yellow gold set with fine diamond", price: 145000, image: "IMG-20261001-WA0006.jpg" },
    { name: "Pure 24k white gold set with fine diamond", price: 290000, image: "IMG-20261001-WA0007.jpg" },
    { name: "Pure 24k rose gold set with fine diamond", price: 450000, image: "IMG-20261001-WA0008.jpg" },
    { name: "Pure 24k black gold set with fine diamond", price: 720000, image: "IMG-20261001-WA0009.jpg" },
    { name: "Pure 24k yellow gold bracelets set with fine diamond", price: 980000, image: "IMG-20261001-WA0010.jpg" },
    { name: "Pure 24k white gold earrings set with fine diamond", price: 1350000, image: "IMG-20261001-WA0417.jpg" },
    { name: "Pure 24k pink gold bracelet set with fine diamond", price: 1950000, image: "IMG-20261001-WA0914.jpg" },
    { name: "Pure 24k yellow gold earrings set with fine diamond", price: 2550000, image: "IMG-20261001-WA1363.jpg" },

    // Earrings
    { name: "Pure 24k white gold earring", price: 1650, image: "IMG-20261001-WA1377.jpg" },
    { name: "Pure 24k pink gold earrings", price: 1750, image: "IMG-20261001-WA1472.jpg" },

    // Bracelets
    { name: "Pure 24k pink gold bracelet", price: 2000, image: "IMG-20261001-WA1567.jpg" },
    { name: "Pure 24k white gold bracelet", price: 2150, image: "IMG-20261001-WA1851.jpg" },

    // Necklaces
    { name: "Pure 24k pink gold necklace", price: 2300, image: "IMG-20261001-WA2469.jpg" },
    { name: "Pure 24k black gold necklace", price: 2400, image: "IMG-20261001-WA2491.jpg" },
    { name: "Pure 24k yellow gold necklace", price: 2250, image: "IMG-20261001-WA2564.jpg" },

    // Rings
    { name: "Pure 24k white gold ring", price: 1500, image: "IMG-20261001-WA2661.jpg" },
    { name: "Pure 24k black gold ring", price: 1600, image: "IMG-20261001-WA2837.jpg" }
];

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
}

function showPage(pageName) {
    if (event) {
        event.preventDefault();
    }
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

function renderCatalog() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map((item) => {
        const isPriceHigh = item.price > 2200;
        
        let priceDisplay = '';
        let actionButton = '';
        
        if (isPriceHigh) {
            // Hide price for "Ask for Price" items
            priceDisplay = `<div class="product-price-hidden">Contact for pricing</div>`;
            actionButton = `<button class="ask-price-btn" onclick="openPriceInquiry(event, '${item.name.replace(/'/g, "\\'")}', ${item.price})">Ask for Price</button>`;
        } else {
            // Show price for regular items
            priceDisplay = `<div class="product-price">${formatCurrency(item.price)}</div>`;
            actionButton = `<button class="buy-btn" onclick="openCheckout(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', ${item.price})">Buy Now</button>`;
        }

        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">Handcrafted framework exquisitely set with fine diamonds.</p>
                ${priceDisplay}
                <div class="product-action">
                    ${actionButton}
                </div>
            </article>
        `;
    }).join('');
}

function openCheckout(event, productName, productImage, price) {
    event.preventDefault();
    
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = formatCurrency(price);
    
    // Store order data
    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        price: price,
        type: 'buy'
    };
    
    modal.classList.add('active');
}

function openPriceInquiry(event, productName, price) {
    event.preventDefault();
    
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = '';
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = 'Price on Request';
    
    // Store order data for price inquiry
    window.currentOrder = {
        productName: productName,
        price: price,
        type: 'inquiry'
    };
    
    // Change form to show it's a price inquiry
    document.getElementById('checkout-modal').dataset.inquiryMode = 'true';
    modal.classList.add('active');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    delete modal.dataset.inquiryMode;
    // Reset form
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }
}

function submitOrder(event) {
    if (event) {
        event.preventDefault();
    }
    
    const buyerName = document.getElementById('buyer-name').value.trim();
    const buyerEmail = document.getElementById('buyer-email').value.trim();
    const buyerAddress = document.getElementById('buyer-address').value.trim();
    const buyerPhone = document.getElementById('buyer-phone').value.trim();

    // Validation
    if (!buyerName || !buyerEmail || !buyerAddress || !buyerPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(buyerEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    const order = window.currentOrder;
    const productName = order.productName;
    const price = order.price;
    const isInquiry = order.type === 'inquiry';

    if (isInquiry) {
        // Price Inquiry - show confirmation on-site only
        const inquiryMessage = `
Price Inquiry Request Submitted Successfully!

Product: ${productName}
Your Name: ${buyerName}
Your Email: ${buyerEmail}
Phone: ${buyerPhone}

We will contact you shortly with detailed pricing information.
Thank you for your interest in Luxorita!
        `;
        
        alert(inquiryMessage);
        closeCheckout();
    } else {
        // Regular Purchase - show bank transfer details on-site only
        const checkoutMessage = `
Order Confirmed! 

Product: ${productName}
Amount: ${formatCurrency(price)}

BANK TRANSFER DETAILS:
Account Number: 4890 0101 0059 1001
Valid Through: 11/26
CVV: 128

Please transfer ${formatCurrency(price)} to complete your order.

Delivery will be arranged after payment verification.
Thank you for your purchase!
        `;
        
        alert(checkoutMessage);
        closeCheckout();
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeCheckout();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    // Set catalog as default page
    showPage('catalog');
});
