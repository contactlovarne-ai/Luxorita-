const products = [
    // Brooches
    { name: "Pure 24k pink gold brooch", price: 0, image: "IMG-20261001-WA0000.jpg" },
    { name: "Pure 24k white gold brooch", price: 0, image: "IMG-20261001-WA0001.jpg" },
    { name: "Pure 24k rose gold brooch", price: 0, image: "IMG-20261001-WA0002.jpg" },
    { name: "Pure 24k green gold brooch", price: 0, image: "IMG-20261001-WA0003.jpg" },
    { name: "Pure 24k yellow gold brooch", price: 0, image: "IMG-20261001-WA0004.jpg" },
    
    // Sets with fine diamond
    { name: "Pure 24k yellow gold set with fine diamond", price: 0, image: "IMG-20261001-WA0006.jpg" },
    { name: "Pure 24k white gold set with fine diamond", price: 0, image: "IMG-20261001-WA0007.jpg" },
    { name: "Pure 24k rose gold set with fine diamond", price: 0, image: "IMG-20261001-WA0008.jpg" },
    { name: "Pure 24k white gold brooch set with fine diamond", price: 0, image: "IMG-20261001-WA0005.jpg" },
    { name: "Pure 24k black gold set with fine diamond", price: 0, image: "IMG-20261001-WA0009.jpg" },
    
    // Earrings & Bracelets
    { name: "Pure 24k white gold earring", price: 0, image: "IMG-20261001-WA1377.jpg" },
    { name: "Pure 24k yellow gold bracelets set with fine diamond", price: 0, image: "IMG-20261001-WA0010.jpg" },
    { name: "Pure 24k white gold earrings set with fine diamond", price: 0, image: "IMG-20261001-WA0417.jpg" },
    { name: "Pure 24k pink gold bracelet set with fine diamond", price: 0, image: "IMG-20261001-WA0914.jpg" },
    { name: "Pure 24k pink gold bracelet", price: 0, image: "IMG-20261001-WA1567.jpg" },
    
    // Bracelets & Necklaces
    { name: "Pure 24k white gold bracelet", price: 0, image: "IMG-20261001-WA1851.jpg" },
    { name: "Pure 24k pink gold necklace", price: 0, image: "IMG-20261001-WA2469.jpg" },
    { name: "Pure 24k black gold necklace", price: 0, image: "IMG-20261001-WA2491.jpg" },
    
    // Rings & Final Items
    { name: "Pure 24k white gold ring", price: 0, image: "IMG-20261001-WA2661.jpg" },
    { name: "Pure 24k yellow gold earrings set with fine diamond", price: 0, image: "IMG-20261001-WA1363.jpg" },
    { name: "Pure 24k yellow gold necklace", price: 0, image: "IMG-20261001-WA2564.jpg" },
    { name: "Pure 24k black gold ring", price: 0, image: "IMG-20261001-WA2837.jpg" }
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
        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">Handcrafted framework exquisitely set with fine diamonds.</p>
                <div class="product-price-contact">Contact for price</div>
                <div class="product-action">
                    <button class="contact-price-btn" onclick="openContactForm(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}')">Contact for Price</button>
                </div>
            </article>
        `;
    }).join('');
}

function openContactForm(event, productName, productImage) {
    event.preventDefault();
    
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = 'Contact for Price';
    
    // Store order data
    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        type: 'inquiry'
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

    // Price Inquiry - show confirmation message on-site only
    const inquiryMessage = `
✓ INQUIRY SUBMITTED SUCCESSFULLY

Product: ${productName}

Your Details:
Name: ${buyerName}
Email: ${buyerEmail}
Phone: ${buyerPhone}
Address: ${buyerAddress}

The Luxorita team will review your inquiry and contact you shortly with detailed pricing and availability information.

Thank you for your interest in Luxorita's Haute Joaillerie collection.
    `;
    
    alert(inquiryMessage);
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
