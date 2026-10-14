let products = [
    {
        id: 1,
        brand: 'Milan',
        name: 'Classic Burgundy Suit',
        price: 420,
        cost: 280,
        tax: 34,
        shipping: 18,
        image: 'image/suit.avif',
        description: 'A refined burgundy suit with a sharp double-breasted cut.'
    },
    {
        id: 2,
        brand: 'Aster',
        name: 'Midnight Pinstripe Suit',
        price: 650,
        cost: 420,
        tax: 52,
        shipping: 22,
        image: 'image/suit 1.webp',
        description: 'Elegant pinstripe tailoring designed for formal and evening events.'
    },
    {
        id: 3,
        brand: 'Vesper',
        name: 'Charcoal Check Suit',
        price: 580,
        cost: 360,
        tax: 46,
        shipping: 20,
        image: 'image/suit 2.webp',
        description: 'A modern check pattern in a classic charcoal palette.'
    },
    {
        id: 4,
        brand: 'Noir',
        name: 'Espresso Double-Breasted Suit',
        price: 610,
        cost: 390,
        tax: 49,
        shipping: 21,
        image: 'image/suit 3.jpg',
        description: 'Rich espresso tones and structured shoulders for a commanding look.'
    },
    {
        id: 5,
        brand: 'Crown',
        name: 'Sandstone Premium Suit',
        price: 540,
        cost: 340,
        tax: 43,
        shipping: 19,
        image: 'image/suit 4.webp',
        description: 'Warm, polished tailoring with soft texture and premium finish.'
    },
    {
        id: 6,
        brand: 'Verona',
        name: 'Ash Grey Wool Suit',
        price: 590,
        cost: 380,
        tax: 47,
        shipping: 20,
        image: 'image/sui 6.avif',
        description: 'A sleek ash-grey suit built for confidence and clean lines.'
    },
    {
        id: 7,
        brand: 'Dorian',
        name: 'Olive Formal Suit',
        price: 560,
        cost: 350,
        tax: 45,
        shipping: 19,
        image: 'image/suit 7.avif',
        description: 'Sophisticated olive tones with a tailored modern shape.'
    },
    {
        id: 8,
        brand: 'Luxe',
        name: 'Stone Beige Executive Suit',
        price: 620,
        cost: 410,
        tax: 50,
        shipping: 22,
        image: 'image/shuit 5.webp',
        description: 'Executive elegance in a soft beige finish for premium occasions.'
    },
    {
        id: 9,
        brand: 'Milan',
        name: 'Signature Leather Oxford',
        price: 420,
        cost: 270,
        tax: 34,
        shipping: 18,
        image: 'image/shoe3.webp',
        description: 'Polished leather craftsmanship built for elevated evenings and formal occasions.',
        category: 'shoe'
    },
    {
        id: 10,
        brand: 'Aster',
        name: 'Milan Velvet Loafer',
        price: 390,
        cost: 250,
        tax: 31,
        shipping: 17,
        image: 'image/shoe 2.webp',
        description: 'Velvet texture and understated luxury for premium dressing with ease.',
        category: 'shoe'
    },
    {
        id: 11,
        brand: 'Noir',
        name: 'Noir Executive Sneaker',
        price: 360,
        cost: 220,
        tax: 29,
        shipping: 16,
        image: 'image/shoe 1 1.webp',
        description: 'Modern structure meets everyday elegance with a sharp, commanding finish.',
        category: 'shoe'
    },
    {
        id: 12,
        brand: 'Verona',
        name: 'Verona Driving Shoe',
        price: 410,
        cost: 260,
        tax: 33,
        shipping: 18,
        image: 'image/11.webp',
        description: 'Classic profile and premium leather craftsmanship for polished, relaxed style.',
        category: 'shoe'
    },
    {
        id: 13,
        brand: 'Lincoln',
        name: 'Lincoln',
        price: 150,
        cost: 95,
        tax: 12,
        shipping: 15,
        image: 'image/shoe 1.webp',
        description: "It's safe to say that this effortlessly versatile loafer is easily worth every penny.",
        category: 'shoe'
    },
    {
        id: 14,
        brand: 'Aster',
        name: 'Aster Chronograph Watch',
        price: 480,
        cost: 290,
        tax: 38,
        shipping: 18,
        image: 'image/w3.webp',
        description: 'A sharp chronograph designed for refined everyday luxury and statement moments.',
        category: 'watch'
    },
    {
        id: 15,
        brand: 'Noir',
        name: 'Noir Executive Watch',
        price: 560,
        cost: 340,
        tax: 45,
        shipping: 20,
        image: 'image/w5.jpg',
        description: 'Executive-grade finishing with a bold dial, premium case, and modern appeal.',
        category: 'watch'
    },
    {
        id: 17,
        brand: 'Verona',
        name: 'Verona Field Watch',
        price: 430,
        cost: 260,
        tax: 34,
        shipping: 17,
        image: 'image/w6.jpg',
        description: 'A versatile watch with understated luxury and everyday durability.',
        category: 'watch'
    },
    {
        id: 18,
        brand: 'Vincero',
        name: 'Vincero Executive Chronograph',
        price: 610,
        cost: 390,
        tax: 49,
        shipping: 20,
        image: 'image/w7.jpg',
        description: 'A bold luxury chronograph with a confident stainless-steel build and elevated presence.',
        category: 'watch'
    },
    {
        id: 19,
        brand: 'Milan',
        name: 'Milan Heritage Watch',
        price: 540,
        cost: 330,
        tax: 43,
        shipping: 18,
        image: 'image/watch2.webp',
        description: 'Heritage-inspired design with clean lines and refined performance for everyday wear.',
        category: 'watch'
    },
    {
        id: 20,
        brand: 'Milan',
        name: 'Milan Executive Watch',
        price: 520,
        cost: 315,
        tax: 42,
        shipping: 18,
        image: 'image/w 2.avif',
        description: 'A refined executive timepiece with a clean profile and premium finish.',
        category: 'watch'
    },
    {
        id: 21,
        brand: 'Aster',
        name: 'Aster Signature Watch',
        price: 490,
        cost: 300,
        tax: 39,
        shipping: 18,
        image: 'image/w 2.avif',
        description: 'Signature styling with classic proportions and a polished everyday luxury finish.',
        category: 'watch'
    }
];

const STORAGE_KEY = 'ian-yuhi-cart';
const CHECKOUT_KEY = 'ian-yuhi-checkout';
const ADMIN_STORAGE_KEY = 'ian-yuhi-admin-users';
const CURRENT_ADMIN_KEY = 'ian-yuhi-current-admin';
const CUSTOMER_STORAGE_KEY = 'ian-yuhi-customers';
const CURRENT_CUSTOMER_KEY = 'ian-yuhi-current-customer';
const PRODUCTS_STORAGE_KEY = 'ian-yuhi-products';
const ADMIN_PASSWORD = '06012007';
const ADMIN_SESSION_TTL_MS = 1000 * 60 * 60 * 8;
let cart = [];

function readStoredJson(key, storageType = 'localStorage') {
    try {
        const storage = storageType === 'sessionStorage' ? sessionStorage : localStorage;
        const rawValue = storage.getItem(key);
        return rawValue ? JSON.parse(rawValue) : null;
    } catch (error) {
        return null;
    }
}

function buildSessionSignature(admin) {
    const permissions = admin && admin.permissions ? admin.permissions : {};
    const payload = `${admin?.email || ''}|${admin?.name || ''}|${JSON.stringify(permissions)}|${ADMIN_PASSWORD}|${admin?.issuedAt || 0}`;
    let hash = 2166136261;
    for (let index = 0; index < payload.length; index += 1) {
        hash ^= payload.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
}

function hasValidAdminSession(admin) {
    if (!admin || !admin.permissions || !admin.permissions.admin) return false;
    if (!admin.email || !admin.name) return false;

    const issuedAt = Number(admin.issuedAt || 0);
    if (!issuedAt || Date.now() - issuedAt > ADMIN_SESSION_TTL_MS) {
        return false;
    }

    return admin.sessionToken === buildSessionSignature(admin);
}

function getCart() {
    try {
        cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (error) {
        cart = [];
    }
    return cart;
}

function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function getProcessedOrders() {
    try {
        return JSON.parse(localStorage.getItem('ian-yuhi-orders') || '[]');
    } catch (error) {
        return [];
    }
}

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Show an on-page toast notification (creates container if missing)
function showToast(message, duration = 3000) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._hideTimeout);
    toast._hideTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

function showConfirmation(message) {
    return new Promise(resolve => {
        const existing = document.getElementById('confirmOverlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'confirmOverlay';
        overlay.className = 'confirm-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'confirm-dialog';

        const messageP = document.createElement('p');
        messageP.textContent = message;

        const actions = document.createElement('div');
        actions.className = 'confirm-actions';

        const noBtn = document.createElement('button');
        noBtn.className = 'btn-secondary';
        noBtn.type = 'button';
        noBtn.id = 'confirmNoBtn';
        noBtn.textContent = 'No';

        const yesBtn = document.createElement('button');
        yesBtn.className = 'btn-primary';
        yesBtn.type = 'button';
        yesBtn.id = 'confirmYesBtn';
        yesBtn.textContent = 'Yes';

        actions.appendChild(noBtn);
        actions.appendChild(yesBtn);
        dialog.appendChild(messageP);
        dialog.appendChild(actions);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);

        const cleanup = () => {
            overlay.remove();
        };

        dialog.querySelector('#confirmYesBtn').addEventListener('click', () => {
            cleanup();
            resolve(true);
        });

        dialog.querySelector('#confirmNoBtn').addEventListener('click', () => {
            cleanup();
            resolve(false);
        });

        overlay.addEventListener('click', event => {
            if (event.target === overlay) {
                cleanup();
                resolve(false);
            }
        });
    });
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.querySelector('.cart-overlay');

    document.body.classList.toggle('cart-open');
    sidebar?.classList.toggle('open');
    overlay?.classList.toggle('active');
}

function normalizeProductCategory(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'shoe') return 'shoe';
    if (normalized === 'watch') return 'watch';
    return 'suit';
}

function repairProductCategory(product) {
    const numericId = Number(product?.id);
    const isKnownShoe = [9, 10, 11, 12, 13].includes(numericId);
    const isKnownWatch = [14, 18, 19].includes(numericId);
    const explicitCategory = String(product?.category || '').trim().toLowerCase();
    const isExplicitShoe = explicitCategory === 'shoe';
    const isExplicitWatch = explicitCategory === 'watch';
    if (isKnownWatch || isExplicitWatch) return 'watch';
    if (isKnownShoe || isExplicitShoe) return 'shoe';
    return 'suit';
}

function getCorrectAssetForProductId(productId) {
    const activeId = Number(productId);
    const assetMap = {
        9: 'image/shoe3.webp',
        10: 'image/shoe 2.webp',
        11: 'image/shoe 1 1.webp',
        12: 'image/11.webp',
        13: 'image/shoe 1.webp',
        14: 'image/w3.webp',
        18: 'image/w7.jpg',
        19: 'image/watch2.webp'
    };

    return assetMap[activeId] || '';
}

function repairProductRecord(product) {
    const numericId = Number(product?.id);
    const defaultProduct = products.find(item => item.id === numericId);
    const category = repairProductCategory(product);
    const correctedImage = getCorrectAssetForProductId(numericId) || (defaultProduct ? getProductImage(defaultProduct) : getProductImage(product));
    const correctedImages = correctedImage ? [correctedImage] : (defaultProduct ? getProductImages(defaultProduct) : getProductImages(product));

    return {
        ...defaultProduct,
        ...product,
        id: numericId || product?.id,
        category,
        image: correctedImage,
        images: correctedImages,
        description: product?.description || defaultProduct?.description || ''
    };
}

function getStoredProducts() {
    try {
        const stored = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY) || 'null');
        if (!Array.isArray(stored) || !stored.length) {
            const normalized = products.map(product => ({ ...product, category: repairProductCategory(product) }));
            saveProducts(normalized);
            return normalized;
        }

        const merged = stored.map(product => repairProductRecord(product));
        let changed = false;

        products.forEach(product => {
            const normalizedDefault = { ...product, category: repairProductCategory(product) };
            if (!merged.some(item => item.id === normalizedDefault.id)) {
                merged.push(normalizedDefault);
                changed = true;
            }
        });

        const repaired = merged.map(product => repairProductRecord(product));

        if (changed || JSON.stringify(merged) !== JSON.stringify(repaired)) {
            saveProducts(repaired);
            return repaired;
        }

        return repaired;
    } catch (error) {
        const normalized = products.map(product => ({ ...product, category: repairProductCategory(product) }));
        saveProducts(normalized);
        return normalized;
    }
}

function saveProducts(updatedProducts) {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(updatedProducts));
}

function getProductImages(product) {
    if (!product) return [];
    if (Array.isArray(product.images) && product.images.length) return product.images;
    if (typeof product.image === 'string' && product.image) return [product.image];
    return [];
}

function getProductImage(product) {
    const images = getProductImages(product);
    return images.length ? images[0] : '';
}

function parseProductImageData(value) {
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string' && item) : [];
    } catch (error) {
        return [];
    }
}

function renderImagePreview(images) {
    if (!images || !images.length) return '';
    return images.map(src => `<img src="${escapeHtml(src)}" alt="Product preview" />`).join('');
}

function getCurrentProductCollection() {
    const page = window.location.pathname.split('/').pop()?.toLowerCase() || '';
    const selectedCollection = new URLSearchParams(window.location.search).get('collection')?.toLowerCase();

    if (selectedCollection === 'shoe' || page === 'shoe.html') return 'shoe';
    if (selectedCollection === 'watch' || page === 'watch.html') return 'watch';
    return 'suit';
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    products = getStoredProducts();
    const currentCollection = getCurrentProductCollection();
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const brand = document.getElementById('brandFilter')?.value || 'all';
    const collectionLabel = currentCollection === 'shoe' ? 'Shoes' : currentCollection === 'watch' ? 'Watches' : 'Suits';
    const searchInput = document.getElementById('searchInput');
    const subtitle = document.getElementById('shopCollectionTitle');

    if (searchInput) {
        searchInput.placeholder = currentCollection === 'shoe' ? 'Search shoes...' : currentCollection === 'watch' ? 'Search watches...' : 'Search suits...';
    }

    if (subtitle) {
        subtitle.textContent = collectionLabel;
    }

    let filtered = products.filter(product => {
        const productCollection = normalizeProductCategory(product.category);
        const matchesCollection = productCollection === currentCollection;
        const matchesSearch = product.name.toLowerCase().includes(search) || product.brand.toLowerCase().includes(search);
        const matchesBrand = brand === 'all' || product.brand === brand;
        return matchesCollection && matchesSearch && matchesBrand;
    });

    grid.innerHTML = filtered.map(product => {
        const imageSrc = getProductImage(product);
        return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">
                <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(product.name)}" />
            </div>
            <div class="product-info">
                <p class="product-brand">${escapeHtml(product.brand.toUpperCase())}</p>
                <h3>${escapeHtml(product.name)}</h3>
                <p class="product-price">$${product.price}</p>
                <p>${escapeHtml(product.description)}</p>
            </div>
        </div>
    `;
    }).join('');

    if (!filtered.length) {
        grid.innerHTML = `
            <div class="empty-cart" style="grid-column: 1 / -1;">
                No ${collectionLabel.toLowerCase()} match your search right now.
            </div>
        `;
    }
}

function getProductSizeOptions(product) {
    const category = normalizeProductCategory(product?.category);
    if (category === 'shoe') return ['5', '6', '7', '8', '9', '10', '11', '12'];
    if (category === 'suit') return ['XS', 'S', 'M', 'L', 'XL'];
    return [];
}

function normalizeSelectedSize(product, selectedSize) {
    const validSizes = getProductSizeOptions(product);
    if (!validSizes.length) return '';
    const fallback = String(selectedSize || '').trim();
    return validSizes.includes(fallback) ? fallback : validSizes[0];
}

function addToCart(productId, selectedSize = '') {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    const resolvedSize = normalizeSelectedSize(product, selectedSize);

    cart = getCart();
    const existing = cart.find(item => item.id === productId && (item.size || '') === resolvedSize);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1, ...(resolvedSize ? { size: resolvedSize } : {}) });

    saveCart();
    renderCart();
    showToast(resolvedSize ? `SIZE ${resolvedSize} ADDED THANK YOU` : 'ITEM ADDED THANK YOU');
}

function viewProduct(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;
    const productForCheckout = { ...product, quantity: 1 };
    localStorage.setItem(CHECKOUT_KEY, JSON.stringify([productForCheckout]));
    localStorage.setItem('ian-yuhi-current-product', JSON.stringify(product));
    window.location.href = `product.html?product=${product.id}`;
}

function buyNow(productId, selectedSize = '') {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    const resolvedSize = normalizeSelectedSize(product, selectedSize);
    const productForCheckout = { ...product, quantity: 1, ...(resolvedSize ? { size: resolvedSize } : {}) };
    localStorage.setItem(CHECKOUT_KEY, JSON.stringify([productForCheckout]));
    window.location.href = 'checkout.html';
}

function renderCart() {
    cart = getCart();

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (!cartItems || !cartTotal || !cartCount || !checkoutBtn) return;

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        cartTotal.textContent = '$0.00';
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Cart Empty';
        return;
    }

    checkoutBtn.disabled = false;
    checkoutBtn.textContent = 'Proceed to Checkout';

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    cartItems.innerHTML = cart.map(item => {
        const imageSrc = getProductImage(item);
        const sizeText = item.size ? `<p class="cart-item-size">Size: ${escapeHtml(item.size)}</p>` : '';
        return `
        <div class="cart-item">
            <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.name)}" />
            <div class="cart-item-info">
                <h4>${escapeHtml(item.name)}</h4>
                <p class="cart-item-price">$${item.price} × ${item.quantity}</p>
                ${sizeText}
                <div class="cart-quantity-controls">
                    <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, -1, '${(item.size || '').replace(/'/g, "\\'")}')">−</button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, 1, '${(item.size || '').replace(/'/g, "\\'")}')">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${(item.size || '').replace(/'/g, "\\'")}')">Remove</button>
        </div>
    `;
    }).join('');
}

function updateQuantity(productId, change, size = '') {
    cart = getCart();
    const item = cart.find(item => item.id === productId && (item.size || '') === size);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => !(cartItem.id === productId && (cartItem.size || '') === size));
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId, size = '') {
    cart = getCart().filter(item => !(item.id === productId && (item.size || '') === size));
    saveCart();
    renderCart();
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty.');
        return;
    }
    localStorage.setItem(CHECKOUT_KEY, JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

function renderProductView() {
    const container = document.getElementById('productView');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const productIdFromUrl = Number(params.get('product'));
    let product = null;

    if (productIdFromUrl) {
        product = products.find(item => item.id === productIdFromUrl) || null;
    }

    if (!product) {
        try {
            product = JSON.parse(localStorage.getItem('ian-yuhi-current-product') || 'null');
        } catch (error) {
            product = null;
        }
    }

    if (product) {
        localStorage.setItem('ian-yuhi-current-product', JSON.stringify(product));
    }

    if (!product) {
        container.innerHTML = '<p class="empty-cart">Product not found.</p>';
        return;
    }

    const imageList = getProductImages(product);
    const mainImage = imageList.length ? imageList[0] : '';
    const thumbnails = imageList.length > 1 ? imageList.map((src, index) => `
                <button type="button" class="gallery-thumb${index === 0 ? ' active' : ''}" onclick="document.getElementById('productMainImage').src='${src}'; document.querySelectorAll('.gallery-thumb').forEach(btn => btn.classList.remove('active')); this.classList.add('active');">
                    <img src="${src}" alt="Thumbnail ${index + 1}" />
                </button>
            `).join('') : '';

    const milanNote = product.brand === 'Milan'
        ? '<div class="product-story"><h3>Milan</h3><p class="details">Classic tailoring with a confident burgundy statement.</p></div>'
        : '';

    const asterNote = product.brand === 'Aster'
        ? '<p class="details">Can refer to a few different brands, custom tailoring, or traditional styles. Aster Tailor Tuxedos & Dinner Suits: Custom-made formal wear featuring hand-stitched details, fine silk satin facings, canvas linings, and a 4-to-6-week turnaround time.</p>'
        : '';

    const vesperNote = product.brand === 'Vesper'
        ? '<p class="details">Vesper is a refined reference to classic evening tailoring, understated luxury, and modern dress codes built around sharp silhouettes and rich textures.</p>'
        : '';

    const noirNote = product.brand === 'Noir'
        ? '<p class="details">Noir evokes a darker, elevated aesthetic with deep tones, dramatic structure, and formalwear designed to command attention without excess.</p>'
        : '';

    const crownNote = product.brand === 'Crown'
        ? '<p class="details">Crown denotes prestige, heritage tailoring, and elevated craftsmanship, often associated with formal luxury and statement-making silhouettes.</p>'
        : '';

    const veronaNote = product.brand === 'Verona'
        ? '<p class="details">Verona reflects classic Italian-inspired tailoring, light luxury, and an elegant balance between structure, softness, and understated style.</p>'
        : '';

    const dorianNote = product.brand === 'Dorian'
        ? '<p class="details">Dorian is often linked to refined, modern menswear that blends polished structure with a creative, fashion-forward edge.</p>'
        : '';

    const luxeNote = product.brand === 'Luxe'
        ? '<p class="details">Luxe refers to premium tailoring, elevated finishes, and exceptional construction that brings a statement of sophistication to the wardrobe.</p>'
        : '';

    const sizeOptions = getProductSizeOptions(product);
    const sizeSelector = sizeOptions.length ? `
        <div class="product-size-picker">
            <span class="size-label">${normalizeProductCategory(product.category) === 'shoe' ? 'Choose shoe size' : 'Choose suit size'}</span>
            <div class="size-options">
                ${sizeOptions.map((size, index) => `
                    <button type="button" class="size-option${index === 0 ? ' selected' : ''}" data-size="${size}" aria-pressed="${index === 0 ? 'true' : 'false'}" onclick="document.querySelectorAll('.size-option').forEach(btn => { btn.classList.toggle('selected', btn === this); btn.setAttribute('aria-pressed', btn === this ? 'true' : 'false'); });">
                        ${size}
                    </button>
                `).join('')}
            </div>
        </div>
    ` : '';

    container.innerHTML = `
        <div class="product-gallery">
            <img id="productMainImage" src="${escapeHtml(mainImage)}" alt="${escapeHtml(product.name)}" />
            ${thumbnails ? `<div class="product-gallery-thumbs">${thumbnails}</div>` : ''}
            ${imageList.length > 1 ? `<p class="gallery-count">${imageList.length} images available</p>` : ''}
        </div>
        <div>
            <p class="product-brand">${escapeHtml(product.brand.toUpperCase())}</p>
            <h1>${escapeHtml(product.name)}</h1>
            <p class="price">$${product.price}</p>
            <p class="details">${escapeHtml(product.description)}</p>
            ${milanNote}
            ${asterNote}
            ${vesperNote}
            ${noirNote}
            ${crownNote}
            ${veronaNote}
            ${dorianNote}
            ${luxeNote}
            ${sizeSelector}
            <div class="meta">
                <span>Premium Collection</span>
                <span>Free Shipping</span>
                <span>Authenticity Guaranteed</span>
            </div>
            <div class="product-actions product-view-actions">
                <button class="btn-primary" onclick="addToCart(${product.id}, document.querySelector('.size-option.selected')?.dataset.size || '')">Add to Cart</button>
                <button class="btn-secondary" onclick="buyNow(${product.id}, document.querySelector('.size-option.selected')?.dataset.size || '')">Buy Now</button>
            </div>
        </div>
    `;
}

function initializeCheckout() {
    const checkoutSummary = document.getElementById('checkoutSummary');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutMessage = document.getElementById('checkoutMessage');
    const quantityInput = document.getElementById('quantityInput');
    const paymentMethod = document.getElementById('paymentMethod');
    const cardDetails = document.getElementById('cardDetails');

    if (!checkoutSummary || !checkoutForm || !checkoutMessage || !quantityInput) return;

    let items = [];
    try {
        items = JSON.parse(localStorage.getItem(CHECKOUT_KEY) || '[]');
    } catch (error) {
        items = [];
    }

    if (!items.length) {
        items = getCart();
    }

    if (!items.length) {
        checkoutSummary.innerHTML = '<p class="empty-cart">No items selected yet.</p>';
        return;
    }

    const currentCustomer = getCurrentCustomer();
    if (currentCustomer) {
        const customerName = checkoutForm.querySelector('input[name="name"]');
        const customerEmail = checkoutForm.querySelector('input[name="email"]');
        const customerPhone = checkoutForm.querySelector('input[name="phone"]');

        if (customerName) customerName.value = currentCustomer.name || '';
        if (customerEmail) customerEmail.value = currentCustomer.email || '';
        if (customerPhone) customerPhone.value = currentCustomer.phone || '';
    }

    const baseTotal = items.reduce((sum, item) => sum + (item.price + (item.tax || 0) + (item.shipping || 0)) * item.quantity, 0);
    const initialQty = items.reduce((s, i) => s + (i.quantity || 0), 0) || 1;

    // set input initial value
    quantityInput.value = initialQty;

    const renderCheckoutSummary = (qty) => {
        const factor = (qty && initialQty) ? (qty / initialQty) : 1;
        checkoutSummary.innerHTML = items.map(item => {
            const itemTotal = (((item.price || 0) + (item.tax || 0) + (item.shipping || 0)) * item.quantity) * factor;
            return `
            <div class="checkout-item">
                <span>${escapeHtml(item.name)} x ${Math.max(1, Math.round(item.quantity * factor))}</span>
                <strong>$${itemTotal.toFixed(2)}</strong>
            </div>
            <div class="checkout-item details-row">
                <span>Price:</span><span>$${((item.price || 0) * item.quantity * factor).toFixed(2)}</span>
            </div>
            <div class="checkout-item details-row">
                <span>Tax:</span><span>$${(((item.tax || 0) * item.quantity) * factor).toFixed(2)}</span>
            </div>
            <div class="checkout-item details-row">
                <span>Shipping:</span><span>$${(((item.shipping || 0) * item.quantity) * factor).toFixed(2)}</span>
            </div>
        `;
        }).join('') + `<div class="checkout-item"><span>Total</span><strong>$${(baseTotal * factor).toFixed(2)}</strong></div>`;
    };

    renderCheckoutSummary(Number(quantityInput.value));

    quantityInput.addEventListener('input', () => {
        const val = Number(quantityInput.value) || 1;
        if (val < 1) quantityInput.value = 1;
        renderCheckoutSummary(Number(quantityInput.value));
    });

    const toggleCardDetails = () => {
        if (cardDetails) {
            cardDetails.classList.toggle('hidden', paymentMethod?.value !== 'card');
        }
    };

    paymentMethod?.addEventListener('change', toggleCardDetails);
    toggleCardDetails();

    const stripePublicKey = 'pk_test_replace_with_your_public_key';
    const stripe = Stripe(stripePublicKey);
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount('#cardElement');

    cardElement.on('change', (event) => {
        const cardErrors = document.getElementById('cardErrors');
        if (cardErrors) {
            cardErrors.textContent = event.error ? event.error.message : '';
        }
    });

    checkoutForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = checkoutForm.querySelector('input[name="name"]')?.value?.trim() || '';
        const email = checkoutForm.querySelector('input[name="email"]')?.value?.trim() || '';
        const phone = checkoutForm.querySelector('input[name="phone"]')?.value?.trim() || '';
        const address = checkoutForm.querySelector('textarea[name="address"]')?.value?.trim() || '';
        const method = paymentMethod?.value || 'Credit Card';
        const qtyVal = Number(quantityInput.value) || 1;

        // compute total using baseTotal and quantity factor
        const initialQtyInner = initialQty || 1;
        const factor = (qtyVal && initialQtyInner) ? (qtyVal / initialQtyInner) : 1;
        const totalAmount = +(baseTotal * factor).toFixed(2);

        const order = {
            id: Date.now(),
            name,
            email,
            phone,
            address,
            items: items,
            quantity: qtyVal,
            total: totalAmount,
            paymentMethod: method,
            status: 'Processing',
            paymentConfirmed: false,
            paymentStatus: 'Pending admin confirmation',
            createdAt: new Date().toISOString()
        };

        if (method !== 'card') {
            try {
                localStorage.setItem('ian-yuhi-pending-order', JSON.stringify(order));
            } catch (e) {}
            cart = [];
            saveCart();
            window.location.href = 'payment-processing.html';
            return;
        }

        const response = await fetch('http://localhost:3000/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: Math.round(totalAmount * 100),
                currency: 'usd',
                metadata: {
                    name,
                    email,
                    orderId: order.id,
                }
            })
        });

        const result = await response.json();
        if (!response.ok || !result.clientSecret) {
            checkoutMessage.textContent = result.error || 'Unable to create payment session. Please try again later.';
            return;
        }

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(result.clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name,
                    email
                }
            }
        });

        if (stripeError) {
            checkoutMessage.textContent = stripeError.message || 'Payment failed. Please try another payment method.';
            return;
        }

        if (paymentIntent && paymentIntent.status === 'succeeded') {
            order.paymentConfirmed = false;
            order.paymentStatus = 'Pending Admin Payment Review';
            order.status = 'Pending Payment';
            order.paidAt = new Date().toISOString();
            order.transactionId = paymentIntent.id;
            order.paymentIntentId = paymentIntent.id;

            try {
                localStorage.setItem('ian-yuhi-pending-order', JSON.stringify(order));
            } catch (e) {}

            cart = [];
            saveCart();
            window.location.href = 'payment-processing.html';
            return;
        }

        checkoutMessage.textContent = 'Payment was not completed. Please try again.';
    });
}

function initShop() {
    renderProducts();

    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');

    [searchInput, brandFilter].forEach(element => {
        if (element) element.addEventListener('input', renderProducts);
        if (element) element.addEventListener('change', renderProducts);
    });
}

function getAdminUsers() {
    try {
        return JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY) || '[]');
    } catch (error) {
        return [];
    }
}

function saveAdminUsers(users) {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(users));
}

function hideAdminLinksIfNoAdmin() {
    const adminLinks = document.querySelectorAll('a[href^="admin"]');
    const setupNavItem = document.getElementById('adminSetupNavItem');
    const currentAdmin = getCurrentAdmin();
    const hasAdmin = hasAdminUser();
    const shouldShowAdmin = currentAdmin && currentAdmin.permissions.admin;

    adminLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'admin.html') {
            link.style.display = '';
            return;
        }
        link.style.display = shouldShowAdmin ? '' : 'none';
    });

    if (setupNavItem) {
        setupNavItem.style.display = hasAdmin ? 'none' : '';
    }
}

function promptAdminLoginFromLogo() {
    const currentAdmin = getCurrentAdmin();
    if (currentAdmin && currentAdmin.permissions.admin) {
        window.location.href = 'admin-dashboard.html';
        return;
    }

    if (!hasAdminUser()) {
        showToast('No admin is configured yet. Redirecting to setup.');
        window.location.href = 'admin-setup.html';
        return;
    }

    const email = prompt('Admin email:');
    if (!email) return;

    const password = prompt('Admin PIN:');
    if (!password) return;

    if (password !== ADMIN_PASSWORD) {
        alert('Invalid admin PIN.');
        return;
    }

    const users = getAdminUsers();
    const admin = users.find(user => user.email.toLowerCase() === email.trim().toLowerCase() && user.permissions.admin);
    if (!admin) {
        alert('No admin account found with that email.');
        return;
    }

    setCurrentAdmin(admin);
    showToast(`Logged in as ${admin.name}. Redirecting to dashboard.`);
    window.location.href = 'admin-dashboard.html';
}

function updateAdminSetupVisibility() {
    const setupNavItem = document.getElementById('adminSetupNavItem');
    if (!setupNavItem) return;
    setupNavItem.style.display = hasAdminUser() ? 'none' : '';
}

function getCurrentAdmin() {
    const sessionAdmin = readStoredJson(CURRENT_ADMIN_KEY, 'sessionStorage');
    const storedAdmin = readStoredJson(CURRENT_ADMIN_KEY, 'localStorage');
    const candidate = sessionAdmin || storedAdmin;

    if (!candidate) return null;
    if (!hasValidAdminSession(candidate)) {
        clearCurrentAdmin();
        return null;
    }

    return candidate;
}

const INTEGRATIONS_APPROVED_ADMIN_KEY = 'ian-yuhi-approved-integrations-admins';

function getIntegrationAccessAdmins() {
    try {
        const saved = JSON.parse(localStorage.getItem(INTEGRATIONS_APPROVED_ADMIN_KEY) || 'null');
        if (Array.isArray(saved) && saved.length > 0) {
            return saved.map(email => String(email || '').trim().toLowerCase()).filter(Boolean);
        }
    } catch (error) {
        // fall through to the default initial list
    }

    const users = getAdminUsers().filter(user => user && user.permissions && user.permissions.admin);
    const fixedAdmins = users.slice(0, 2).map(user => String(user.email || '').trim().toLowerCase()).filter(Boolean);
    localStorage.setItem(INTEGRATIONS_APPROVED_ADMIN_KEY, JSON.stringify(fixedAdmins));
    return fixedAdmins;
}

function canAccessIntegrations() {
    const currentAdmin = getCurrentAdmin();
    if (!currentAdmin || !currentAdmin.permissions?.admin) return false;
    const email = String(currentAdmin.email || '').trim().toLowerCase();
    return getIntegrationAccessAdmins().includes(email);
}

function requireAdminAccess() {
    const currentAdmin = getCurrentAdmin();
    if (!currentAdmin || !currentAdmin.permissions?.admin) {
        clearCurrentAdmin();
        window.location.href = 'admin.html';
        return false;
    }
    return true;
}

function setCurrentAdmin(admin) {
    const sessionAdmin = {
        ...admin,
        permissions: { ...(admin.permissions || {}) },
        issuedAt: Date.now(),
        sessionToken: buildSessionSignature({ ...admin, issuedAt: Date.now() })
    };

    sessionStorage.setItem(CURRENT_ADMIN_KEY, JSON.stringify(sessionAdmin));
    localStorage.setItem(CURRENT_ADMIN_KEY, JSON.stringify(sessionAdmin));
}

function clearCurrentAdmin() {
    sessionStorage.removeItem(CURRENT_ADMIN_KEY);
    localStorage.removeItem(CURRENT_ADMIN_KEY);
}

function getCustomerAccounts() {
    try {
        return JSON.parse(localStorage.getItem(CUSTOMER_STORAGE_KEY) || '[]');
    } catch (error) {
        return [];
    }
}

function saveCustomerAccounts(customers) {
    localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customers));
}

function getCurrentCustomer() {
    const storedCustomer = readStoredJson(CURRENT_CUSTOMER_KEY, 'sessionStorage') || readStoredJson(CURRENT_CUSTOMER_KEY, 'localStorage');
    return storedCustomer || null;
}

function setCurrentCustomer(customer) {
    const safeCustomer = { ...customer };
    delete safeCustomer.password;
    delete safeCustomer.passwordHash;
    sessionStorage.setItem(CURRENT_CUSTOMER_KEY, JSON.stringify(safeCustomer));
    localStorage.setItem(CURRENT_CUSTOMER_KEY, JSON.stringify(safeCustomer));
}

function clearCurrentCustomer() {
    sessionStorage.removeItem(CURRENT_CUSTOMER_KEY);
    localStorage.removeItem(CURRENT_CUSTOMER_KEY);
}

async function postJson(url, payload) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    });

    let data = {};
    try {
        data = await response.json();
    } catch (error) {
        data = {};
    }

    return { ok: response.ok, status: response.status, data };
}

function renderCustomerAccounts() {
    const list = document.getElementById('customerUserList');
    if (!list) return;

    const customers = getCustomerAccounts();
    const totalCustomers = customers.length;
    const countEl = document.getElementById('customerCount');
    if (countEl) countEl.textContent = totalCustomers;

    if (!customers.length) {
        list.innerHTML = '<p class="empty-cart">No customer accounts have been created yet.</p>';
        return;
    }

    list.innerHTML = `
        <div class="permissions-row" style="font-weight:700; color: var(--gold);">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Joined</span>
        </div>
        ${customers.map(customer => `
            <div class="permissions-row">
                <span>${escapeHtml(customer.name || 'N/A')}</span>
                <span>${escapeHtml(customer.email || 'N/A')}</span>
                <span>${escapeHtml(customer.phone || 'N/A')}</span>
                <span>${escapeHtml(customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A')}</span>
            </div>
        `).join('')}
    `;
}

function updateAccountNavLink() {
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;

    const existingAccountLink = Array.from(navLinks.querySelectorAll('a')).find(link => link.getAttribute('href') === 'account.html');
    if (!existingAccountLink) {
        const accountItem = document.createElement('li');
        const accountLink = document.createElement('a');
        accountLink.href = 'account.html';
        accountLink.textContent = 'Account';
        accountItem.appendChild(accountLink);
        navLinks.appendChild(accountItem);
    }
}

function renderAdminUsers() {
    const list = document.getElementById('adminUserList');
    if (!list) return;

    const users = getAdminUsers();
    if (!users.length) {
        list.innerHTML = '<p class="empty-cart">No administrator users added yet.</p>';
        return;
    }

    const rows = users.map((user, index) => `
        <div class="permissions-row">
            <span>${escapeHtml(user.name)}</span>
            <span>${escapeHtml(user.email)}</span>
            <span>${user.permissions.shop ? 'Yes' : 'No'}</span>
            <span>${user.permissions.checkout ? 'Yes' : 'No'}</span>
            <span class="permissions-actions">
                <button class="btn-edit" onclick="editAdminUser(${index})">Edit</button>
                <button class="btn-delete" onclick="removeAdminUser(${index})">Delete</button>
            </span>
        </div>
    `).join('');

    list.innerHTML = `
        <div class="permissions-row" style="font-weight:700; color: var(--gold);">
            <span>Name</span>
            <span>Email</span>
            <span>Shop</span>
            <span>Checkout</span>
            <span>Actions</span>
        </div>
        ${rows}
    `;
}

function addOrUpdateAdminUser(user) {
    const users = getAdminUsers();
    const emailKey = (user.originalEmail || user.email || '').toLowerCase();
    const existingIndex = users.findIndex(item => item.email.toLowerCase() === emailKey);
    const userToSave = { ...user };
    delete userToSave.originalEmail;

    if (existingIndex >= 0) {
        users[existingIndex] = userToSave;
    } else {
        users.push(userToSave);
    }
    saveAdminUsers(users);
    renderAdminUsers();
}

function removeAdminUser(index) {
    const users = getAdminUsers();
    users.splice(index, 1);
    saveAdminUsers(users);
    renderAdminUsers();
}

function getAdminProducts() {
    return getStoredProducts();
}

function addOrUpdateProduct(product) {
    const stored = getStoredProducts();
    const existingIndex = stored.findIndex(item => item.id === product.id);
    if (existingIndex >= 0) {
        stored[existingIndex] = product;
    } else {
        stored.push(product);
    }
    saveProducts(stored);
    renderProducts();
    renderAdminProducts();
}

async function removeProduct(productId) {
    const shouldDelete = await showConfirmation('You want to delete this item. Are you sure?');
    if (!shouldDelete) {
        return;
    }

    const stored = getStoredProducts().filter(item => item.id !== productId);
    saveProducts(stored);
    renderProducts();
    renderAdminProducts();
}

function renderAdminProducts() {
    const list = document.getElementById('adminProductList');
    const catalog = document.getElementById('adminCatalogProducts');
    const items = getAdminProducts();

    if (list) {
        if (!items.length) {
            list.innerHTML = '<p class="empty-cart">No products added yet.</p>';
            return;
        }

        const rows = items.map((product, index) => {
            const profit = (product.price || 0) - (product.cost || 0) - (product.tax || 0) - (product.shipping || 0);
            const profitLabel = profit >= 0 ? `$${profit.toFixed(2)}` : `-$${Math.abs(profit).toFixed(2)}`;
            const categoryName = normalizeProductCategory(product.category);
            const categoryLabel = categoryName === 'shoe' ? 'Shoes' : categoryName === 'watch' ? 'Watches' : 'Suits';
            return `
            <div class="permissions-row">
                <span>${product.name}</span>
                <span>${categoryLabel}</span>
                <span>$${product.price.toFixed(2)}</span>
                <span>$${product.cost.toFixed(2)}</span>
                <span>$${product.tax.toFixed(2)}</span>
                <span>$${product.shipping.toFixed(2)}</span>
                <span>${profitLabel}</span>
                <span class="permissions-actions">
                    <button class="btn-edit" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn-delete" onclick="removeProduct(${product.id})">Delete</button>
                </span>
            </div>
        `;
        }).join('');

        list.innerHTML = `
            <div class="permissions-row" style="font-weight:700; color: var(--gold);">
                <span>Product</span>
                <span>Collection</span>
                <span>Price</span>
                <span>Cost</span>
                <span>Tax</span>
                <span>Shipping</span>
                <span>Profit</span>
                <span>Actions</span>
            </div>
            ${rows}
        `;
    }

    if (catalog) {
        if (!items.length) {
            catalog.innerHTML = '<p class="empty-cart">No products available.</p>';
            return;
        }

        catalog.innerHTML = items.map(product => {
            const imageSrc = getProductImage(product);
            return `
            <div class="product-card admin-catalog-card">
                <div class="product-image">
                    <img src="${imageSrc}" alt="${product.name}" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-brand">${product.brand.toUpperCase()}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                </div>
            </div>
        `;
        }).join('');
    }
}

function getStoredIntegrations() {
    try {
        const integrations = JSON.parse(localStorage.getItem('ian-yuhi-integrations') || '[]');
        return Array.isArray(integrations) ? integrations : [];
    } catch (error) {
        return [];
    }
}

function saveStoredIntegrations(integrations) {
    localStorage.setItem('ian-yuhi-integrations', JSON.stringify(integrations));
}

function renderAdminDashboard() {
    const dashboard = document.getElementById('adminDashboardContent');
    if (!dashboard) return;

    const currentAdmin = getCurrentAdmin();
    const name = currentAdmin ? currentAdmin.name : 'Administrator';
    const orders = getProcessedOrders();
    const pendingPayments = orders.filter(order => !order.paymentConfirmed).length;
    const confirmedPayments = orders.filter(order => order.paymentConfirmed).length;
    const pendingAmount = orders.filter(order => !order.paymentConfirmed).reduce((sum, order) => sum + (Number(order.total) || 0), 0);
    const pendingBadge = pendingPayments > 0 ? `<span class="dashboard-badge">${pendingPayments} pending</span>` : '';
    const pendingTileClass = pendingPayments > 0 ? ' dashboard-control-pending' : '';

    const customers = getCustomerAccounts();
    const customerCount = customers.length;
    const canAccessIntegrationsPage = canAccessIntegrations();
    const integrationsLink = canAccessIntegrationsPage ? `
            <a class="dashboard-control" href="admin-integrations.html">
                <div class="control-copy">
                    <span class="control-label">App Integrations</span>
                    <p>Connect your website with payment software, bank tools, and external business apps.</p>
                </div>
                <span class="control-action">Connect</span>
            </a>
    ` : '';

    dashboard.innerHTML = `
        <div class="admin-dashboard-welcome">
            <h2>Welcome, ${name}</h2>
            <p>Use the payment processor panel below to review pending approvals before shipping orders.</p>
        </div>
        <div class="payment-summary-grid dashboard-summary-grid">
            <div class="payment-summary-card">
                <p>Pending Payments</p>
                <h2>${pendingPayments}</h2>
            </div>
            <div class="payment-summary-card">
                <p>Confirmed Payments</p>
                <h2>${confirmedPayments}</h2>
            </div>
            <div class="payment-summary-card">
                <p>Pending Amount</p>
                <h2>$${pendingAmount.toFixed(2)}</h2>
            </div>
        </div>
        <div class="admin-dashboard-grid dashboard-controls">
            <a class="dashboard-control" href="admin-products.html">
                <div class="control-copy">
                    <span class="control-label">Product Management</span>
                    <p>Add, edit, or delete product listings with pricing and images.</p>
                </div>
                <span class="control-action">Manage</span>
            </a>
            <a class="dashboard-control${pendingTileClass}" href="admin-payment-processor.html">
                <div class="control-copy">
                    <span class="control-label">Payment Processor</span>
                    ${pendingBadge}
                    <p>Review paid orders, customer details, and approve or deny each payment.</p>
                </div>
                <span class="control-action">Process</span>
            </a>
            <a class="dashboard-control${pendingTileClass}" href="admin-pending-payments.html">
                <div class="control-copy">
                    <span class="control-label">Pending Payments</span>
                    ${pendingBadge}
                    <p>See unpaid or incomplete orders that have not reached the approval processor yet.</p>
                </div>
                <span class="control-action">Review</span>
            </a>
            ${integrationsLink}
            <a class="dashboard-control" href="admin-processed-orders.html">
                <div class="control-copy">
                    <span class="control-label">Order History</span>
                    <p>View completed orders, confirmation numbers, and tracking details.</p>
                </div>
                <span class="control-action">View</span>
            </a>
            <a class="dashboard-control" href="admin-users.html">
                <div class="control-copy">
                    <span class="control-label">Current Access List</span>
                    <p>Review users and manage their permission levels.</p>
                </div>
                <span class="control-action">View</span>
            </a>
            <a class="dashboard-control" href="admin-customers.html">
                <div class="control-copy">
                    <span class="control-label">Customer Accounts</span>
                    <p>See all customer accounts, total signups, and profile details.</p>
                </div>
                <span class="control-action">${customerCount}</span>
            </a>
            <a class="dashboard-control" href="admin-catalog.html">
                <div class="control-copy">
                    <span class="control-label">Product Catalog</span>
                    <p>View the full product catalog and confirm live previews.</p>
                </div>
                <span class="control-action">View</span>
            </a>
            <a class="dashboard-control" href="admin-create.html">
                <div class="control-copy">
                    <span class="control-label">Create Admin Account</span>
                    <p>Create a new admin user and assign access permissions.</p>
                </div>
                <span class="control-action">Manage</span>
            </a>
        </div>
    `;
}

function resetProductForm() {
    const adminProductForm = document.getElementById('adminProductForm');
    const productIdInput = document.getElementById('productId');
    const productCategoryInput = document.getElementById('productCategory');
    const productImagePreview = document.getElementById('productImagePreview');
    const productImageDataInput = document.getElementById('productImageData');
    const productImageFileInput = document.getElementById('productImageFile');

    adminProductForm?.reset();
    if (productCategoryInput) productCategoryInput.value = 'suit';
    if (productIdInput) productIdInput.value = '';
    if (productImagePreview) productImagePreview.innerHTML = '';
    if (productImageDataInput) productImageDataInput.value = '';
    if (productImageFileInput) productImageFileInput.value = '';
}

function editProduct(productId) {
    const product = getAdminProducts().find(item => item.id === productId);
    if (!product) return;

    const nameInput = document.getElementById('productName');
    const brandInput = document.getElementById('productBrand');
    const categoryInput = document.getElementById('productCategory');
    const priceInput = document.getElementById('productPrice');
    const costInput = document.getElementById('productCost');
    const taxInput = document.getElementById('productTax');
    const shippingInput = document.getElementById('productShipping');
    const imageDataInput = document.getElementById('productImageData');
    const imageFileInput = document.getElementById('productImageFile');
    const imagePreview = document.getElementById('productImagePreview');
    const descInput = document.getElementById('productDescription');
    const productIdInput = document.getElementById('productId');

    if (!nameInput || !brandInput || !priceInput || !costInput || !taxInput || !shippingInput || !imageDataInput || !descInput || !productIdInput || !categoryInput) return;

    productIdInput.value = product.id;
    nameInput.value = product.name;
    brandInput.value = product.brand;
    categoryInput.value = normalizeProductCategory(product.category);
    priceInput.value = product.price;
    costInput.value = product.cost;
    taxInput.value = product.tax;
    shippingInput.value = product.shipping;

    const imageList = getProductImages(product);
    imageDataInput.value = JSON.stringify(imageList);
    descInput.value = product.description;

    if (imagePreview) {
        imagePreview.innerHTML = renderImagePreview(imageList);
    }

    if (imageFileInput) {
        imageFileInput.value = '';
    }

    if (nameInput) {
        nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameInput.focus();
    }
}

function editAdminUser(index) {
    const users = getAdminUsers();
    const user = users[index];
    if (!user) return;

    const nameInput = document.getElementById('adminName');
    const emailInput = document.getElementById('adminEmail');
    const permShop = document.getElementById('permShop');
    const permCheckout = document.getElementById('permCheckout');
    const permView = document.getElementById('permView');
    const permAdmin = document.getElementById('permAdmin');

    if (!nameInput || !emailInput || !permShop || !permCheckout || !permView || !permAdmin) return;

    // Ensure the controls section is visible so the form can be edited
    const controlsSection = document.getElementById('adminControlsSection');
    const loginSection = document.getElementById('adminLoginSection');
    if (controlsSection) controlsSection.classList.remove('hidden');
    if (loginSection) loginSection.classList.add('hidden');

    // Make sure the tab bar and state reflect edit mode
    const tabBar = document.getElementById('adminTabBar');
    if (tabBar) tabBar.classList.add('hidden');

    const originalEmailInput = document.getElementById('adminOriginalEmail');
    const submitButton = document.querySelector('#adminForm button[type="submit"]');

    nameInput.value = user.name;
    emailInput.value = user.email;
    if (originalEmailInput) originalEmailInput.value = user.email;
    permShop.checked = user.permissions.shop;
    permCheckout.checked = user.permissions.checkout;
    permView.checked = user.permissions.view;
    permAdmin.checked = user.permissions.admin;
    if (submitButton) submitButton.textContent = 'Save Changes';
    nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    nameInput.focus();
}

function hasAdminUser() {
    const users = getAdminUsers();
    return users.some(user => user.permissions.admin);
}

function showAdminTab(tab) {
    const createSection = document.getElementById('adminCreateSection');
    const loginSection = document.getElementById('adminLoginSection');
    const createTab = document.getElementById('showCreateAdminBtn');
    const loginTab = document.getElementById('showAdminLoginBtn');

    if (tab === 'create') {
        createSection?.classList.remove('hidden');
        loginSection?.classList.add('hidden');
        createTab?.classList.add('active');
        loginTab?.classList.remove('active');
    } else {
        createSection?.classList.add('hidden');
        loginSection?.classList.remove('hidden');
        createTab?.classList.remove('active');
        loginTab?.classList.add('active');
    }
}

function setAdminLoginState() {
    const currentAdmin = getCurrentAdmin();
    const createSection = document.getElementById('adminCreateSection');
    const loginSection = document.getElementById('adminLoginSection');
    const controlsSection = document.getElementById('adminControlsSection');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    const welcomeText = document.getElementById('adminWelcome');
    const hasAdmin = hasAdminUser();
    const tabBar = document.getElementById('adminTabBar');

    if (!hasAdmin) {
        tabBar?.classList.remove('hidden');
        createSection?.classList.remove('hidden');
        loginSection?.classList.add('hidden');
        controlsSection?.classList.add('hidden');
        logoutBtn?.classList.add('hidden');
        if (welcomeText) {
            welcomeText.textContent = 'No admin exists yet. Create the first administrator below.';
        }
        showAdminTab('create');
        return;
    }

    if (currentAdmin && currentAdmin.permissions.admin) {
        tabBar?.classList.add('hidden');
        createSection?.classList.add('hidden');
        loginSection?.classList.add('hidden');
        controlsSection?.classList.remove('hidden');
        logoutBtn?.classList.remove('hidden');
        if (welcomeText) {
            welcomeText.textContent = `Logged in as ${currentAdmin.name}`;
        }
    } else {
        tabBar?.classList.remove('hidden');
        controlsSection?.classList.add('hidden');
        logoutBtn?.classList.add('hidden');
        if (welcomeText) {
            welcomeText.textContent = 'Administrator login is required to manage users.';
        }
        showAdminTab('login');
    }
}

function initializeAdminTabButtons() {
    const showCreateBtn = document.getElementById('showCreateAdminBtn');
    const showLoginBtn = document.getElementById('showAdminLoginBtn');

    showCreateBtn?.addEventListener('click', () => showAdminTab('create'));
    showLoginBtn?.addEventListener('click', () => showAdminTab('login'));
}

document.addEventListener('DOMContentLoaded', () => {
    updateAccountNavLink();
    initShop();
    renderCart();
    renderProductView();
    renderAdminUsers();
    renderAdminProducts();

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);

    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
        adminForm.addEventListener('submit', e => {
            e.preventDefault();
            const nameInput = document.getElementById('adminName');
            const emailInput = document.getElementById('adminEmail');
            const originalEmailInput = document.getElementById('adminOriginalEmail');
            const permShop = document.getElementById('permShop');
            const permCheckout = document.getElementById('permCheckout');
            const permView = document.getElementById('permView');
            const permAdmin = document.getElementById('permAdmin');
            const submitButton = adminForm.querySelector('button[type="submit"]');

            if (!nameInput || !emailInput || !permShop || !permCheckout || !permView || !permAdmin) return;

            addOrUpdateAdminUser({
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                originalEmail: originalEmailInput?.value || '',
                permissions: {
                    shop: permShop.checked,
                    checkout: permCheckout.checked,
                    view: permView.checked,
                    admin: permAdmin.checked,
                }
            });

            showToast('Administrator user saved successfully.');
            adminForm.reset();
            if (originalEmailInput) originalEmailInput.value = '';
            if (submitButton) submitButton.textContent = 'Add or Update User';
            setAdminLoginState();
            hideAdminLinksIfNoAdmin();
            updateAdminSetupVisibility();

            const loginSection = document.getElementById('adminLoginSection');
            if (!hasAdminUser() && loginSection) {
                loginSection.classList.remove('hidden');
            }
        });
    }

    const adminFormCancelBtn = document.getElementById('adminFormCancelBtn');
    const adminProductForm = document.getElementById('adminProductForm');
    const productImageFileInput = document.getElementById('productImageFile');
    const productImageDataInput = document.getElementById('productImageData');
    const productImagePreview = document.getElementById('productImagePreview');

    if (adminFormCancelBtn && adminForm) {
        adminFormCancelBtn.addEventListener('click', () => {
            const originalEmailInput = document.getElementById('adminOriginalEmail');
            const submitButton = adminForm.querySelector('button[type="submit"]');
            adminForm.reset();
            if (originalEmailInput) originalEmailInput.value = '';
            if (submitButton) submitButton.textContent = 'Add or Update User';
        });
    }

    if (productImageFileInput && productImageDataInput && productImagePreview) {
        productImageFileInput.addEventListener('change', async event => {
            const files = Array.from(event.target.files || []);
            if (!files.length) {
                productImagePreview.innerHTML = '';
                productImageDataInput.value = '';
                return;
            }

            const imagePromises = files.map(file => new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
                reader.readAsDataURL(file);
            }));

            const imageData = (await Promise.all(imagePromises)).filter(src => typeof src === 'string' && src);
            productImageDataInput.value = JSON.stringify(imageData);
            productImagePreview.innerHTML = renderImagePreview(imageData);
        });
    }

    if (adminProductForm) {
        adminProductForm.addEventListener('submit', e => {
            e.preventDefault();
            const productIdInput = document.getElementById('productId');
            const nameInput = document.getElementById('productName');
            const brandInput = document.getElementById('productBrand');
            const categoryInput = document.getElementById('productCategory');
            const priceInput = document.getElementById('productPrice');
            const costInput = document.getElementById('productCost');
            const taxInput = document.getElementById('productTax');
            const shippingInput = document.getElementById('productShipping');
            const imageDataInput = document.getElementById('productImageData');
            const descInput = document.getElementById('productDescription');

            if (!nameInput || !brandInput || !priceInput || !costInput || !taxInput || !shippingInput || !imageDataInput || !descInput || !productIdInput || !categoryInput) return;

            const imageValue = imageDataInput.value.trim();
            if (!imageValue) {
                showToast('Please add one or more product images.');
                return;
            }

            const imageList = parseProductImageData(imageValue);
            if (!imageList.length) {
                showToast('Please add one or more valid product images.');
                return;
            }

            const categoryValue = normalizeProductCategory(categoryInput.value);
            const idValue = productIdInput.value ? Number(productIdInput.value) : Date.now();
            addOrUpdateProduct({
                id: idValue,
                name: nameInput.value.trim(),
                brand: brandInput.value.trim(),
                category: categoryValue,
                price: Number(priceInput.value),
                cost: Number(costInput.value),
                tax: Number(taxInput.value),
                shipping: Number(shippingInput.value),
                images: imageList,
                description: descInput.value.trim()
            });

            showToast('Product saved successfully.');
            resetProductForm();
        });

        const cancelEditBtn = document.getElementById('productCancelBtn');
        if (cancelEditBtn) {
            cancelEditBtn.addEventListener('click', resetProductForm);
        }
    }

    const adminCreateForm = document.getElementById('adminCreateForm');
    if (adminCreateForm) {
        adminCreateForm.addEventListener('submit', async e => {
            e.preventDefault();
            const nameInput = document.getElementById('adminCreateName');
            const emailInput = document.getElementById('adminCreateEmail');
            const pinInput = document.getElementById('adminCreatePin');
            const createMessage = document.getElementById('adminCreateMessage');
            if (!nameInput || !emailInput || !pinInput || !createMessage) return;

            const result = await postJson('/api/auth/admin/create', {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: pinInput.value.trim(),
                pin: pinInput.value.trim()
            });

            if (!result.ok) {
                createMessage.textContent = result.data?.error || 'Unable to create admin account.';
                return;
            }

            const newAdmin = result.data.admin || {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                permissions: { shop: true, checkout: true, view: true, admin: true }
            };

            addOrUpdateAdminUser(newAdmin);
            setCurrentAdmin(newAdmin);
            hideAdminLinksIfNoAdmin();
            updateAdminSetupVisibility();
            createMessage.textContent = 'Admin account created successfully.';
            showToast(`Admin ${newAdmin.name} created. Redirecting to dashboard.`);
            adminCreateForm.reset();
            window.location.href = 'admin-dashboard.html';
        });
    }

    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', async e => {
            e.preventDefault();
            const emailInput = document.getElementById('adminLoginEmail');
            const pinInput = document.getElementById('adminLoginPin');
            const loginMessage = document.getElementById('adminLoginMessage');
            if (!emailInput || !pinInput || !loginMessage) return;

            const result = await postJson('/api/auth/admin/login', {
                email: emailInput.value.trim(),
                password: pinInput.value.trim(),
                pin: pinInput.value.trim()
            });

            if (!result.ok) {
                loginMessage.textContent = result.data?.error || 'Invalid PIN. Please try again.';
                return;
            }

            const admin = result.data.admin || {
                name: result.data?.name || emailInput.value.trim(),
                email: emailInput.value.trim(),
                permissions: { shop: true, checkout: true, view: true, admin: true }
            };

            setCurrentAdmin(admin);
            hideAdminLinksIfNoAdmin();
            loginMessage.textContent = 'Admin login successful.';
            showToast(`Logged in as ${admin.name}. Redirecting to dashboard.`);
            adminLoginForm.reset();
            window.location.href = 'admin-dashboard.html';
        });
    }

    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            clearCurrentAdmin();
            setAdminLoginState();
            hideAdminLinksIfNoAdmin();
            showToast('Logged out from admin.');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            showToast('Thanks for reaching out! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    if (!window.location.pathname.includes('admin.html')) {
        hideAdminLinksIfNoAdmin();
    }

    const logoLink = document.querySelector('.nav-logo a');
    if (logoLink) {
        logoLink.addEventListener('click', event => {
            if (window.location.pathname.includes('admin.html')) return;
            event.preventDefault();
            promptAdminLoginFromLogo();
        });
    }

    if (window.location.pathname.includes('admin.html')) {
        const users = getAdminUsers();
        if (!users.some(user => user.permissions.admin)) {
            window.location.href = 'admin-setup.html';
            return;
        }

        const currentAdmin = getCurrentAdmin();
        if (currentAdmin && currentAdmin.permissions.admin) {
            window.location.href = 'admin-dashboard.html';
            return;
        }

        setAdminLoginState();
    }

    if (window.location.pathname.includes('admin-dashboard.html')) {
        if (!requireAdminAccess()) return;
        renderAdminDashboard();
    }

    if (window.location.pathname.includes('admin-create.html')) {
        if (!requireAdminAccess()) return;
    }

    if (window.location.pathname.includes('admin-products.html')) {
        if (!requireAdminAccess()) return;
        renderAdminProducts();
    }

    if (window.location.pathname.includes('admin-catalog.html')) {
        if (!requireAdminAccess()) return;
        renderAdminProducts();
    }

    if (window.location.pathname.includes('admin-users.html')) {
        if (!requireAdminAccess()) return;
        renderAdminUsers();
    }

    if (window.location.pathname.includes('admin-customers.html')) {
        if (!requireAdminAccess()) return;
        renderCustomerAccounts();
    }

    if (window.location.pathname.includes('account.html')) {
        const accountStatus = document.getElementById('customerAccountStatus');
        const accountWelcome = document.getElementById('customerAccountWelcome');
        const customerLogoutBtn = document.getElementById('customerLogoutBtn');
        const currentCustomer = getCurrentCustomer();

        if (currentCustomer) {
            if (accountStatus) accountStatus.textContent = `Signed in as ${currentCustomer.name}`;
            if (accountWelcome) accountWelcome.textContent = `Welcome back, ${currentCustomer.name}!`;
            if (customerLogoutBtn) customerLogoutBtn.classList.remove('hidden');
        } else {
            if (accountStatus) accountStatus.textContent = 'Create an account or sign in to continue shopping.';
            if (accountWelcome) accountWelcome.textContent = 'Your account';
            if (customerLogoutBtn) customerLogoutBtn.classList.add('hidden');
        }

        const customerSignupForm = document.getElementById('customerSignupForm');
        if (customerSignupForm) {
            customerSignupForm.addEventListener('submit', async event => {
                event.preventDefault();
                const name = document.getElementById('customerSignupName')?.value?.trim() || '';
                const email = document.getElementById('customerSignupEmail')?.value?.trim() || '';
                const phone = document.getElementById('customerSignupPhone')?.value?.trim() || '';
                const password = document.getElementById('customerSignupPassword')?.value || '';
                const confirmPassword = document.getElementById('customerSignupConfirmPassword')?.value || '';
                const message = document.getElementById('customerSignupMessage');

                const result = await postJson('/api/auth/customer/signup', {
                    name,
                    email,
                    phone,
                    password,
                    confirmPassword
                });

                if (!result.ok) {
                    if (message) message.textContent = result.data?.error || 'Unable to create account.';
                    return;
                }

                const customer = result.data.customer || { name, email, phone };
                setCurrentCustomer(customer);
                customerSignupForm.reset();
                showToast('Account created successfully.');
                if (message) message.textContent = 'Account created successfully.';
                window.location.href = 'shop.html';
            });
        }

        const customerLoginForm = document.getElementById('customerLoginForm');
        if (customerLoginForm) {
            customerLoginForm.addEventListener('submit', async event => {
                event.preventDefault();
                const email = document.getElementById('customerLoginEmail')?.value?.trim() || '';
                const password = document.getElementById('customerLoginPassword')?.value || '';
                const message = document.getElementById('customerLoginMessage');

                const result = await postJson('/api/auth/customer/login', { email, password });
                if (!result.ok) {
                    if (message) message.textContent = result.data?.error || 'Invalid email or password.';
                    return;
                }

                const customer = result.data.customer || { email };
                setCurrentCustomer(customer);
                customerLoginForm.reset();
                showToast(`Welcome back, ${customer.name || customer.email}.`);
                if (message) message.textContent = 'Login successful.';
                window.location.href = 'shop.html';
            });
        }

        if (customerLogoutBtn) {
            customerLogoutBtn.addEventListener('click', async () => {
                await fetch('/api/auth/customer/logout', { method: 'POST', credentials: 'include' });
                clearCurrentCustomer();
                showToast('You have been logged out.');
                window.location.reload();
            });
        }
    }

    if (window.location.pathname.includes('admin-setup.html')) {
        if (hasAdminUser()) {
            window.location.href = 'admin.html';
            return;
        }

        updateAdminSetupVisibility();
        const goLoginButton = document.getElementById('adminSetupGoLogin');
        if (goLoginButton) {
            goLoginButton.classList.remove('hidden');
        }
        const setupForm = document.getElementById('adminSetupForm');
        const setupMessage = document.getElementById('adminSetupMessage');
        if (setupForm) {
            setupForm.addEventListener('submit', async e => {
                e.preventDefault();
                const nameInput = document.getElementById('setupAdminName');
                const emailInput = document.getElementById('setupAdminEmail');
                const passwordInput = document.getElementById('setupAdminPassword');

                if (!nameInput || !emailInput || !passwordInput || !setupMessage) return;

                const result = await postJson('/api/auth/admin/create', {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    password: passwordInput.value.trim(),
                    pin: passwordInput.value.trim()
                });

                if (!result.ok) {
                    setupMessage.textContent = result.data?.error || 'Invalid PIN. Admin account cannot be created.';
                    return;
                }

                const newAdmin = result.data.admin || {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    permissions: { shop: true, checkout: true, view: true, admin: true }
                };

                addOrUpdateAdminUser(newAdmin);
                setCurrentAdmin(newAdmin);
                showToast('First administrator account created. Redirecting to dashboard.');
                setupMessage.textContent = 'Admin created successfully.';
                if (goLoginButton) {
                    goLoginButton.classList.remove('hidden');
                }
                setupForm.reset();
                updateAdminSetupVisibility();
                hideAdminLinksIfNoAdmin();
                window.location.href = 'admin-dashboard.html';
            });
        }
    }

    if (window.location.pathname.includes('checkout.html')) {
        initializeCheckout();
    }
});
