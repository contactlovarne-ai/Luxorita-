const products = [
    { name: "Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0000.jpg" },
    { name: "Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0001.jpg" },
    { name: "Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0002.jpg" },
    { name: "Pure 24K Black Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0003.jpg" },
    { name: "Pure 24K Yellow Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "$2,200 USD", image: "IMG-20261001-WA0004.jpg" },
    { name: "Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0005.jpg" },
    { name: "Pure 24K Rose Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0006.jpg" },
    { name: "Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0007.jpg" },
    { name: "Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0008.jpg" },
    { name: "Pure 24K Black Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0009.jpg" },
    { name: "White Gold Earrings, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0010.jpg" },
    { name: "Yellow Gold Bracelets (Diamonds), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0417.jpg" },
    { name: "White Gold Earrings (Diamonds), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA0914.jpg" },
    { name: "White Gold Bracelet (Diamonds), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA1363.jpg" },
    { name: "Pink Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA1377.jpg" },
    { name: "Pink Gold Bracelet (Diamonds), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA1472.jpg" },
    { name: "White Gold (Bracelet), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA1567.jpg" },
    { name: "Pink Gold (Necklace), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA1851.jpg" },
    { name: "Pure 24K Black Gold Necklace, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA2469.jpg" },
    { name: "Black Gold (Bracelet), Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA2491.jpg" },
    { name: "Pure 24K Yellow Gold Ring Set with Diamonds, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA2564.jpg" },
    { name: "Pure 24K Yellow Gold Necklace, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA2661.jpg" },
    { name: "Pure 24K Black Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA2837.jpg" },
    { name: "Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA3294.jpg" },
    { name: "Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA3310.jpg" },
    { name: "Pure 24K Rose Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA4372.jpg" },
    { name: "Pure 24K Black Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds", price: "Contact for Price", image: "IMG-20261001-WA5326.jpg" },
    { name: "Pure 24K Yellow Gold Earring, Handcrafted framework exquisitely set with natural unheated diamonds", price: "$2,100 USD", image: "IMG-20261001-WA5407.jpg" }
];

function showPage(pageName) {
    if (event) {
        event.preventDefault();
    }
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
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
                <div class="product-price-contact">${item.price}</div>
                <div class="product-action">
                    <button class="contact-price-btn" onclick="openContactForm(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', '${item.price}')">Contact for Price</button>
                </div>
            </article>
        `;
    }).join('');
}

function openContactForm(event, productName, productImage, productPrice) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = productPrice;

    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        productPrice: productPrice,
        type: 'inquiry'
    };

    modal.classList.add('active');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
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

    if (!buyerName || !buyerEmail || !buyerAddress || !buyerPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(buyerEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    const productName = window.currentOrder ? window.currentOrder.productName : 'this item';
    const productPrice = window.currentOrder ? window.currentOrder.productPrice : 'Contact for Price';

    const inquiryMessage = `
✓ INQUIRY SUBMITTED SUCCESSFULLY

Product: ${productName}
Price: ${productPrice}

Customer details:
Name: ${buyerName}
Email: ${buyerEmail}
Phone: ${buyerPhone}
Address: ${buyerAddress}

Your request is being reviewed in the Luxorita inquiry flow. Please remain on this website while the enquiry is processed.

Thank you for your interest in our collection.
    `;

    alert(inquiryMessage);
    closeCheckout();
}

window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeCheckout();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    showPage('catalog');
});
