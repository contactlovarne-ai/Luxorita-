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
        
        let actionButton = '';
        if (isPriceHigh) {
            actionButton = `<button class="ask-price-btn" onclick="askForPrice(event, '${item.name.replace(/'/g, "\\'")}', ${item.price})">Ask for Price</button>`;
        } else {
            actionButton = `<button class="buy-btn" onclick="openCheckout(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', ${item.price})">Buy Now</button>`;
        }

        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">Handcrafted framework exquisitely set with fine diamonds.</p>
                <div class="product-price">${formatCurrency(item.price)}</div>
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
        price: price
    };
    
    modal.classList.add('active');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    // Reset form
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }
}

function askForPrice(event, productName, price) {
    event.preventDefault();
    const email = 'contactluxorita@gmail.com';
    const subject = `Price Inquiry: ${productName}`;
    const body = `Hello Luxorita,\n\nI am interested in inquiring about the price of the following item:\n\nProduct: ${productName}\nListed Amount: ${formatCurrency(price)}\n\nPlease provide me with more details.\n\nThank you`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

    // Prepare order details
    const orderDetails = `ORDER CONFIRMATION\n===================\n\nProduct: ${productName}\nPrice: ${formatCurrency(price)}\n\nBUYER INFORMATION:\nName: ${buyerName}\nEmail: ${buyerEmail}\nPhone: ${buyerPhone}\nAddress: ${buyerAddress}\n\nPAYMENT DETAILS:\nAccount Number: 4890 0101 0059 1001\nValid Through: 11/26\nCVV: 128\n\nPlease transfer ${formatCurrency(price)} to the bank account above.\nOnce payment is received and verified, your order will be shipped.\n\nThank you for your purchase!`;

    // Send email to buyer
    const buyerSubject = `Order Confirmation - ${productName}`;
    
    // Create mailto link for buyer confirmation
    const buyerMailto = `mailto:${buyerEmail}?subject=${encodeURIComponent(buyerSubject)}&body=${encodeURIComponent(orderDetails)}`;

    // Send to Luxorita
    const luxoritaEmail = 'contactluxorita@gmail.com';
    const luxoritaSubject = `New Order: ${productName}`;
    const luxoritaBody = `NEW ORDER RECEIVED\n\n${orderDetails}\n\nOrder Time: ${new Date().toLocaleString()}`;
    const luxoritaMailto = `mailto:${luxoritaEmail}?subject=${encodeURIComponent(luxoritaSubject)}&body=${encodeURIComponent(luxoritaBody)}`;

    // Open buyer confirmation email
    window.open(buyerMailto, '_blank');
    
    // Open Luxorita notification email
    setTimeout(() => {
        window.open(luxoritaMailto, '_blank');
    }, 500);

    alert(`Order confirmed! Payment details have been sent to your email.\n\nAmount: ${formatCurrency(price)}\nAccount: 4890 0101 0059 1001\n\nPlease complete the bank transfer to finalize your order.`);
    closeCheckout();
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
