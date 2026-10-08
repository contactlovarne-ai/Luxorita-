const products = [
    [
    { name: "Pure 24K Pink Gold Brooch", price: "Contact for Price", description: "An heirloom-inspired silhouette meticulously forged and pavé-set with brilliant natural unheated diamonds.", image: "IMG-20261001-WA0000.jpg" },
    { name: "Pure 24K White Gold Brooch", price: "Contact for Price", description: "Architectural brilliance meets timeless elegance, adorned with raw, ethically sourced unheated stones.", image: "IMG-20261001-WA0001.jpg" },
    { name: "Pure 24K Pink Gold Brooch", price: "Contact for Price", description: "A delicate floral-inspired creation shaped by master artisans, sparkling with pure unheated diamond facets.", image: "IMG-20261001-WA0002.jpg" },
    { name: "Pure 24K Black Gold Bracelet", price: "Contact for Price", description: "Bold, modern dark metal contrast designed to amplify the intense, fire-like brilliance of untreated gems.", image: "IMG-20261001-WA0003.jpg" },
    { name: "Pure 24K Yellow Gold Ring", price: "$2,200 USD", description: "Classic high-lustre gold contouring wrapping organically around a shimmering cluster of raw diamond crystals.", image: "IMG-20261001-WA0004.jpg" },
    { name: "Pure 24K Yellow Gold Brooch", price: "Contact for Price", description: "A statement statement piece featuring rich gold undertones blanketed in a constellation of organic diamonds.", image: "IMG-20261001-WA0005.jpg" },
    { name: "Pure 24K White Gold Brooch", price: "Contact for Price", description: "Gleaming icy platinum tones housing a seamless mosaic of hand-selected, earth-born unheated stones.", image: "IMG-20261001-WA0006.jpg" },
    { name: "Pure 24K Rose Gold Brooch", price: "Contact for Price", description: "Romantic blush hues sculpted into an intricate statement jewel, glowing with natural diamond fire.", image: "IMG-20261001-WA0007.jpg" },
    { name: "Pure 24K Pink Gold Brooch", price: "Contact for Price", description: "A fluid design reflecting modern haute joaillerie trends, embedded with unheated, conflict-free brilliance.", image: "IMG-20261001-WA0008.jpg" },
    { name: "Pure 24K Black Gold Brooch", price: "Contact for Price", description: "Edgy yet sophisticated black-finished framework elevating the striking purity of untouched white diamonds.", image: "IMG-20261001-WA0009.jpg" },
    { name: "White Gold Earrings", price: "Contact for Price", description: "Cascading drops of brilliant white precious metal framing drop-cut natural unheated diamond clusters.", image: "IMG-20261001-WA0010.jpg" },
    { name: "Yellow Gold Bracelets (Diamonds)", price: "Contact for Price", description: "An opulent wrap-around wristpiece gleaming with warm yellow tones and continuous raw-gem sparkle.", image: "IMG-20261001-WA0417.jpg" },
    { name: "White Gold Earrings (Diamonds)", price: "Contact for Price", description: "Dangling contemporary geometry designed to catch the light from every angle with untouched diamonds.", image: "IMG-20261001-WA0914.jpg" },
    { name: "White Gold Bracelet (Diamonds)", price: "Contact for Price", description: "A sleek, flexible band of cool white gold encrusted with a heavy pave of pure unheated diamonds.", image: "IMG-20261001-WA1363.jpg" },
    { name: "Pure 24K Rose Gold Bracelet", price: "Contact for Price", description: "Warm, romantic links individually cast and polished to perfection, cradling sparkling natural gems.", image: "IMG-20261001-WA1377.jpg" },
    { name: "Pink Gold Bracelet (Diamonds)", price: "Contact for Price", description: "A delicate yet durable statement chain glistening with rich pink gold and high-grade raw diamonds.", image: "IMG-20261001-WA1472.jpg" },
    { name: "White Gold (Bracelet)", price: "Contact for Price", description: "Minimalist luxury defined by clean lines, pristine white metal, and a dazzling core of unheated stones.", image: "IMG-20261001-WA1567.jpg" },
    { name: "Pink Gold (Necklace)", price: "Contact for Price", description: "A breathtaking collar piece resting gracefully on the skin, anchored by a cascade of unheated diamonds.", image: "IMG-20261001-WA1851.jpg" },
    { name: "Pure 24K Black Gold Necklace", price: "Contact for Price", description: "Dramatic dark-hued links creating a striking canvas for the dazzling brilliance of raw diamond settings.", image: "IMG-20261001-WA2469.jpg" },
    { name: "Pure 24K Black Gold Bracelet", price: "Contact for Price", description: "An imposing, modern silhouette combining blackened precious metal with pristine, natural diamond fire.", image: "IMG-20261001-WA2491.jpg" },
    { name: "Pure 24K Yellow Gold Ring", price: "Contact for Price", description: "A bold heritage band featuring traditional goldsmithing techniques and vibrant, earth-mined diamonds.", image: "IMG-20261001-WA2564.jpg" },
    { name: "Pure 24K Yellow Gold Necklace", price: "Contact for Price", description: "An opulent statement chain that drapes fluidly, featuring a stunning centerpiece of raw unheated crystals.", image: "IMG-20261001-WA2661.jpg" },
    { name: "Pure 24K Rose Gold Ring", price: "Contact for Price", description: "An intimate, beautifully sculpted band finished with a flush setting of untreated, sparkling diamonds.", image: "IMG-20261001-WA2837.jpg" },
    { name: "Pure 24K Pink Gold Brooch", price: "Contact for Price", description: "Intricate metalwork shaped into an artistic masterpiece, brought to life with unheated diamond brilliance.", image: "IMG-20261001-WA3294.jpg" },
    { name: "Pure 24K White Gold Brooch", price: "Contact for Price", description: "Crisp, icy finishes framing an exquisite mosaic of pure, natural, and untouched diamond accents.", image: "IMG-20261001-WA3310.jpg" },
    { name: "Pure 24K Rose Gold Brooch", price: "Contact for Price", description: "Delicate and feminine, this sculpted rose-gold jewel gleams with the organic fire of unheated gems.", image: "IMG-20261001-WA4372.jpg" },
    { name: "Pure 24K Black Gold Bracelet", price: "Contact for Price", description: "A fierce, avant-garde cuff structure highlighting the pristine white fire of raw unheated diamonds.", image: "IMG-20261001-WA5326.jpg" },
    { name: "Pure 24K Rose Gold Ring", price: "$2,100 USD", description: "A graceful, curving silhouette that highlights the unmatched radiance of high-clarity unheated stones.", image: "IMG-20261001-WA5407.jpg" }
]
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
        const hasPrice = item.price !== "Contact for Price";
        const buttonHTML = hasPrice 
            ? `<button class="checkout-btn" onclick="openCheckout(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', '${item.price}')">Proceed to Checkout</button>`
            : `<button class="contact-price-btn" onclick="openContactForm(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}')">Contact for Price</button>`;
        
        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <div class="product-price-contact">${item.price}</div>
                <div class="product-action">
                    ${buttonHTML}
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

    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        productPrice: 'Contact for Price',
        type: 'inquiry'
    };

    modal.classList.add('active');
}

function openCheckout(event, productName, productImage, productPrice) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = productPrice;

    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        productPrice: productPrice,
        type: 'checkout'
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
    const orderType = window.currentOrder ? window.currentOrder.type : 'inquiry';

    const messageTitle = orderType === 'checkout' ? 'PAYMENT SUBMITTED SUCCESSFULLY' : 'INQUIRY SUBMITTED SUCCESSFULLY';

    const inquiryMessage = `
✓ ${messageTitle}

Product: ${productName}
Price: ${productPrice}

Customer details:
Name: ${buyerName}
Email: ${buyerEmail}
Phone: ${buyerPhone}
Address: ${buyerAddress}

${orderType === 'checkout' ? 'Your payment is being processed. Please remain on this website while the transaction is completed.' : 'Your request is being reviewed in the Luxorita inquiry flow. Please wait for the confirmation message from the team.'}

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
