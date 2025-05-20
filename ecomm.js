(() => {
    // Product catalog sample data
    const products = [
      {
        id: 1,
        name: "CBC TEST",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "LIPID PROFILE TEST",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 3,
        name: "HBA1C TEST",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "CMP TEST",
        price: 19.99,
        image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        name: "TSH TEST",
        price: 49.99,
        image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "CREATININE TEST",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 7,
        name: "URIC ACID TEST",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 8,
        name: "SGPT TEST",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 9,
        name: "GGT TEST",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 10,
        name: "URINE TEST",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 11,
        name: "FEVER TEST",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 12,
        name: "PREGNANCY TEST",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 13,
        name: "DIABETES TEST",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 14,
        name: "HIV TEST",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 15,
        name: "COVID TEST",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 16,
        name: "XRAY TEST",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 17,
        name: "FLUID TEST",
        price: 19.99,
        image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 18,
        name: "DIGESTIVE DISORDER TEST",
        price: 49.99,
        image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 19,
        name: "CREATININE TEST",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 20,
        name: "ENDOSCOPY TEST",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 21,
        name: "SGGT TEST",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 22,
        name: "TB TEST",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 23,
        name: "BLOOD TEST",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 24,
        name: "FULL BODY TEST",
        price: 101.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 25,
        name: "ULTRASOUND TEST",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 26,
        name: "EYE TEST",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
      }, 
    ];
  
    const productsContainer = document.getElementById('products');
    const cartBtn = document.getElementById('cart-btn');
    const cart = document.getElementById('cart');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = cart.querySelector('.cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const productSearch = document.getElementById('product-search');
  
    let cartItems = [];

    function renderProducts(filter = '') {
      productsContainer.innerHTML = '';
      const filterLower = filter.toLowerCase();
      const filteredProducts = products.filter(p => p.name.toLowerCase().includes(filterLower));
      if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p style="color:#555; grid-column: 1 / -1; text-align:center;">No products found.</p>';
        return;
      }
      filteredProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product';
        productEl.setAttribute('tabindex', '0');
        productEl.innerHTML = `
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-btn" aria-label="Add ${product.name} to cart">Add to Cart</button>
          </div>
        `;
        
        productEl.querySelector('button.add-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          addToCart(product.id);
        });
        productsContainer.appendChild(productEl);
      });
    }
  
   
    function openCart() {
      cart.classList.add('open');
      cart.setAttribute('aria-hidden', 'false');
      cartBtn.setAttribute('aria-expanded', 'true');
      
      closeCartBtn.focus();
    }
    function closeCart() {
      cart.classList.remove('open');
      cart.setAttribute('aria-hidden', 'true');
      cartBtn.setAttribute('aria-expanded', 'false');
      // Return focus to cart button
      cartBtn.focus();
    }
  
   
    function addToCart(id) {
      const found = cartItems.find(item => item.id === id);
      if (found) {
        found.quantity++;
      } else {
        const product = products.find(p => p.id === id);
        if (product) {
          cartItems.push({...product, quantity: 1});
        }
      }
      renderCart();
      openCart();
    }
  
   
    function removeFromCart(id) {
      cartItems = cartItems.filter(item => item.id !== id);
      renderCart();
    }
  
   
    function renderCart() {
      cartItemsList.innerHTML = '';
      if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<li style="color:#555; padding:1rem 0;">Cart is empty.</li>';
        cartCount.textContent = "0";
        cartTotal.textContent = 'Total: $0.00';
        checkoutBtn.disabled = true;
        return;
      }
  
      let total = 0;
      let totalQuantity = 0;
      cartItems.forEach(item => {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;
  
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} (${item.quantity})</div>
          </div>
          <button class="cart-item-remove" aria-label="Remove ${item.name} from cart" title="Remove item">×</button>
        `;
  
        li.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));
        cartItemsList.appendChild(li);
      });
  
      cartCount.textContent = totalQuantity.toString();
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
      checkoutBtn.disabled = false;
    }
  
    
    checkoutBtn.addEventListener('click', () => {
      alert(`CLICK ON NEXT BUTTON TO CONTINUE! Total amount: ${cartTotal.textContent.replace('Total: ', '')}`);
      cartItems = [];
    });
  

    cartBtn.addEventListener('click', () => {
      if (cart.classList.contains('open')) {
        closeCart();
      } else {
        if (cartItems.length === 0) {
          alert("Your cart is empty! Please add products.");
        }
        openCart();
      }
    });
    closeCartBtn.addEventListener('click', () => closeCart());
  
    
    productSearch.addEventListener('input', (e) => {
      renderProducts(e.target.value);
    });
  
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cart.classList.contains('open')) {
        closeCart();
      }
    });
  
   
    renderProducts();
  
  })();
  