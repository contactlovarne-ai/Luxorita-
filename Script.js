const products = [
    {
        id: "LX-0001",
        name: "LUXORITA LX-0001 — Structural Ring — Vivid Red Ruby",
        specs: "Center Stone: Vivid Red Ruby — Natural Unheated — Certified — Cushion Cut — Bezel Set. Frame: 24K Engineered Gold — CNC Machined From Solid Bar — Bauhaus Geometric Beams.",
        price: 2100,
        image: "images/lx-0001.jpg",
        url: "luxorita.store/products/lx-0001"
    },
    {
        id: "LX-0002",
        name: "LUXORITA LX-0002 — Structural Ring — Vivid Green Emerald",
        specs: "Center Stone: Vivid Green Emerald — Natural Untreated — Certified — Octagon Cut — Bezel Set. Frame: 24K Engineered Gold — CNC Precision Machined — Lattice Truss.",
        price: 2200,
        image: "images/lx-0002.jpg",
        url: "luxorita.store/products/lx-0002"
    },
    {
        id: "LX-0003",
        name: "LUXORITA LX-0003 — Structural Ring — Royal Blue Sapphire",
        specs: "Center Stone: Royal Blue Sapphire — Natural Unheated — Certified — Oval Cut — Bezel Set. Frame: 24K Engineered Gold — CNC Machined — Architectural Truss.",
        price: 709750,
        image: "images/lx-0003.jpg",
        url: "luxorita.store/products/lx-0003"
    },
    {
        id: "LX-0004",
        name: "LUXORITA LX-0004 — Structural Ring — Hot Pink Spinel",
        specs: "Center Stone: Hot Pink Spinel — Natural — Certified — Cushion Cut — Bezel Set. Frame: 24K Engineered Gold — CNC Machined — Lattice Truss.",
        price: 768200,
        image: "images/lx-0004.jpg",
        url: "luxorita.store/products/lx-0004"
    },
    {
        id: "LX-0005",
        name: "LUXORITA LX-0005 — FLAGSHIP Royal Blue Sapphire",
        specs: "Center Stone: Royal Blue Sapphire — Vivid Royal Blue — Natural Unheated — Certified — Flagship Size — Cushion Cut — Bezel Set. Frame: 24K Engineered Gold — Thicker Load Beams.",
        price: 960250,
        image: "images/lx-0005.jpg",
        url: "luxorita.store/products/lx-0005"
    },
    {
        id: "LX-0006",
        name: "LUXORITA LX-0006 — FLAGSHIP Vivid Green Emerald",
        specs: "Center Stone: Vivid Green Emerald — Natural Untreated — Certified — Flagship Size — Octagon Cut — Bezel Set. Frame: 24K Engineered Gold — Lattice Truss Frame.",
        price: 1068800,
        image: "images/lx-0006.jpg",
        url: "luxorita.store/products/lx-0006"
    },
    {
        id: "LX-0007",
        name: "LUXORITA LX-0007 — FLAGSHIP Padparadscha Sapphire",
        specs: "Center Stone: Padparadscha Sapphire — Vivid Orange-Pink — Natural Unheated — Certified — Emerald Cut. Frame: 24K Engineered Gold — Space Dome Truss Frame.",
        price: 826650,
        image: "images/lx-0007.jpg",
        url: "luxorita.store/products/lx-0007"
    },
    {
        id: "LX-0008",
        name: "LUXORITA LX-0008 — ULTRA FLAGSHIP Pigeon Blood Ruby",
        specs: "Center Stone: Pigeon Blood Ruby — Vivid Red — Natural Unheated — Certified — Cushion Cut. Frame: 24K Engineered Gold — Double Truss Frame — Hand Riveted Joints.",
        price: 868400,
        image: "images/lx-0008.jpg",
        url: "luxorita.store/products/lx-0008"
    },
    {
        id: "LX-0009",
        name: "LUXORITA LX-0009 — ULTRA FLAGSHIP Cornflower Blue Sapphire",
        specs: "Center Stone: Cornflower Blue Sapphire — Natural Unheated — Certified — Holy Grail Tier. Frame: 24K Engineered Gold — Bauhaus Grid Truss — Ball-Joint Space Lattice.",
        price: 1127250,
        image: "images/lx-0009.jpg",
        url: "luxorita.store/products/lx-0009"
    },
    {
        id: "LX-0010",
        name: "LUXORITA LX-0010 — ULTRA FLAGSHIP Pigeon Blood Ruby Lattice",
        specs: "Center Stone: Pigeon Blood Ruby — Vivid Red — Natural Heat-Only — Certified — Milestone 10. Frame: 24K Engineered Gold — Square Frame + X-Brace Lattice Truss Variant.",
        price: 918500,
        image: "images/lx-0010.jpg",
        url: "luxorita.store/products/lx-0010"
    }
];

const productGrid = document.getElementById('productGrid');
const checkoutModal = document.getElementById('checkoutModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.id}" class="product-image">
            <div class="product-info">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-specs">${product.specs}</p>
                <div class="product-price">$${product.price.toLocaleString()} USD</div>
                <button class="btn-card" onclick="handleProductAction('${product.id}')">
                    ${product.price >= 2050 && product.price <= 2200 ? 'Direct Bank Checkout' : 'Enquire For Price'}
                </button>
            </div>
        </div>
    `).join('');
}

function handleProductAction(id) {
    const product = products.find(p => p.id === id);
    
    if (product.price >= 2050 && product.price <= 2200) {
        modalBody.innerHTML = `
            <h3 class="modal-title">Direct Bank Checkout</h3>
            <p class="modal-text">You are acquiring <strong>${product.name}</strong> for <strong>$${product.price.toLocaleString()} USD</strong>.</p>
            <div class="bank-details-box">
                <p><strong>NCBA Loop Account Details:</strong></p>
                <p><strong>Bank:</strong> NCBA Loop</p>
                <p><strong>Account Number:</strong> 4890010100591001</p>
                <p><strong>Valid Thru:</strong> 11/26 &nbsp;|&nbsp; <strong>CVV:</strong> 128</p>
                <p><strong>Reference:</strong> LUX-${product.id}-${Math.floor(Math.random()*10000)}</p>
            </div>
            <p class="modal-text" style="font-size:0.8rem; margin-top:10px;">Please complete the transfer using the account details provided and send your confirmation receipt to concierge@luxorita.com.</p>
            <button class="btn-primary" style="width:100%; margin-top:10px;" onclick="alert('Payment instruction noted. Our concierge will verify funds receipt shortly.'); closeModalWindow();">I Have Initiated Transfer</button>
        `;
    } else {
        modalBody.innerHTML = `
            <h3 class="modal-title">Private Concierge Enquiry</h3>
            <p class="modal-text"><strong>${product.name}</strong> is valued at $${product.price.toLocaleString()} USD. Due to the exclusivity of unheated natural gemstones and structural engineering, acquisition is handled privately.</p>
            <form onsubmit="handleEnquirySubmit(event, '${product.id}')">
                <div class="form-group">
                    <label>Full Name / Collector ID</label>
                    <input type="text" required placeholder="Patron Name">
                </div>
                <div class="form-group">
                    <label>Secure Email / Communication Channel</label>
                    <input type="text" required placeholder="contact@domain.com">
                </div>
                <div class="form-group">
                    <label>Private Salon Request / Specifications</label>
                    <textarea rows="3" placeholder="Inquire about certificate details, prototype availability, or secure private delivery..."></textarea>
                </div>
                <button type="submit" class="btn-primary" style="width:100%;">Submit Confidential Enquiry</button>
            </form>
        `;
    }
    
    checkoutModal.style.display = 'flex';
}

function handleEnquirySubmit(event, productId) {
    event.preventDefault();
    alert(`Thank you. Your confidential acquisition enquiry for ${productId} has been transmitted securely to the Luxorita Senior Concierge team.`);
    closeModalWindow();
}

function closeModalWindow() {
    checkoutModal.style.display = 'none';
}

closeModal.onclick = closeModalWindow;
window.onclick = function(event) {
    if (event.target == checkoutModal) {
        closeModalWindow();
    }
}

renderProducts();
