const STORAGE_KEY = 'bunker_cart';

/* =========================
   STORAGE
========================= */

function getCart() {

  return JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ) || [];

}

function saveCart(cart) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(cart)
  );

  updateCartCount();

}

function addToCart(item) {

  const cart = getCart();

  cart.push(item);

  saveCart(cart);

}

function updateCartCount() {

  const count = getCart().length;

  document.querySelectorAll('#cartCount')
    .forEach(el => {

      el.innerText = count;

    });

}

function removeCartItem(index) {

  const cart = getCart();

  cart.splice(index, 1);

  saveCart(cart);

  location.reload();

}

function clearCart() {

  localStorage.removeItem(STORAGE_KEY);

  updateCartCount();

  location.reload();

}

updateCartCount();

/* =========================
   DATA
========================= */

const burgers = [
  {
    id: 1,
    name: 'Simple',
    desc: 'Carne smash, cheddar, ketchup y mostaza.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 8500,
      doble: 11500
    }
  },

  {
    id: 2,
    name: 'Clásica',
    desc: 'Tybo, jamón, lechuga, tomate, cebolla fresca y Salsa BÚNKER.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 11500,
      doble: 14900
    }
  },

  {
    id: 3,
    name: 'Fresca',
    desc: 'Tybo, lechuga, tomate, cebolla morada fresca, pepinillos y Salsa Fresh.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 11900,
      doble: 15900
    }
  },

  {
    id: 4,
    name: 'Oklahoma',
    desc: 'Cheddar, cebolla Oklahoma, pepinillos, mostaza y Salsa BÚNKER.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 12500,
      doble: 16500
    }
  },

  {
    id: 5,
    name: 'American Cheese',
    desc: 'Doble cheddar, queso cremoso fundido, pepinillos y cebolla crispy.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 12200,
      doble: 16700
    }
  },

  {
    id: 6,
    name: 'Crunch',
    desc: 'Cheddar ahumado, nachos, bacon bits y BBQ BÚNKER.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 12300,
      doble: 16700
    }
  },

  {
    id: 7,
    name: 'Trinchera',
    desc: 'Tybo, bacon, morrón asado, cebolla grillada y BBQ BÚNKER.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 12300,
      doble: 16900
    }
  },

  {
    id: 8,
    name: 'Crispy',
    desc: 'Cheddar, cebolla crispy, bacon crocante, pepinillos y miel suave.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 12900,
      doble: 17400
    }
  },

  {
    id: 9,
    name: 'Blue Cheese',
    desc: 'Queso azul, tybo, bacon, cebolla grillada, rúcula, miel y mostaza.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 13200,
      doble: 17600
    }
  },

  {
    id: 10,
    name: 'Black Honey',
    desc: 'Doble cheddar, bacon crocante, cebolla morada fresca, pepinillos y miel ahumada.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 13400,
      doble: 17900
    }
  },

  {
    id: 11,
    name: 'Volcano',
    desc: 'Crispy cheese fundido, cheddar ahumado, bacon, cebolla grillada y BBQ.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 13900,
      doble: 18500
    }
  },

  {
    id: 12,
    name: 'Apocalipsis',
    desc: 'Triple cheddar, bacon, huevo frito, cebolla morada y salsa BÚNKER.',
    image: 'assets/img/burger-hero.png',
    prices: {
      simple: 13900,
      doble: 18500,
      triple: 20500
    }
  }
];

const extras = [
  {
    name: 'Bacon x2',
    price: 2500
  },

  {
    name: 'Cheddar x2',
    price: 1900
  },

  {
    name: 'Tybo x2',
    price: 1700
  },

  {
    name: 'Jamón',
    price: 1500
  },

  {
    name: 'Cebolla Crispy',
    price: 1900
  },

  {
    name: 'Huevo Frito',
    price: 1500
  },

  {
    name: 'Verduras',
    price: 1300
  }
];

const drinks = [
  {
    name: 'Coca Cola',
    price: 2900
  },

  {
    name: 'Sprite',
    price: 2900
  },

  {
    name: 'Fanta',
    price: 2900
  },

  {
    name: 'Lata de gaseosa',
    price: 2500
  },

  {
    name: 'Gaseosa 1L',
    price: 4500
  },

  {
    name: 'Agua 500ml',
    price: 1800
  },

  {
    name: 'Agua 1L',
    price: 2500
  }
];

/* =========================
   MENU
========================= */

const productGrid =
document.getElementById('productGrid');

if (productGrid) {

  productGrid.innerHTML =
  burgers.map(burger => `

    <article class="burger-card">

      <div class="burger-left">

        <h3>
          ${burger.name.toUpperCase()}
        </h3>

        <p>
          ${burger.desc}
        </p>

        <div class="price-list">

          ${
            burger.name === 'Apocalipsis'
            ? `
              <div class="price-box">

                <span>TRIPLE</span>

                <strong>
                  $${burger.prices.triple.toLocaleString('es-AR')}
                </strong>

              </div>
            `
            : `
              <div class="price-box">

                <span>SIMPLE</span>

                <strong>
                  $${burger.prices.simple.toLocaleString('es-AR')}
                </strong>

              </div>

              <div class="price-box">

                <span>DOBLE</span>

                <strong>
                  $${burger.prices.doble.toLocaleString('es-AR')}
                </strong>

              </div>

              ${
                burger.prices.triple
                ? `
                  <div class="price-box">

                    <span>TRIPLE</span>

                    <strong>
                      $${burger.prices.triple.toLocaleString('es-AR')}
                    </strong>

                  </div>
                `
                : ''
              }
            `
          }

        </div>

      </div>

      <div class="burger-right">

        <div class="burger-glow"></div>

        <img
          src="${burger.image}"
          class="burger-image"
          alt="${burger.name}"
        />

      </div>

      <button
        type="button"
        class="burger-add"
        onclick="
          ${
            burger.name === 'Apocalipsis'
            ? `
              addToCart({
                type:'burger',
                name:'Apocalipsis',
                size:'triple',
                price:${burger.prices.triple}
              });

              window.location.href='extras.html';
            `
            : `
              openBurgerModal(${burger.id})
            `
          }
        "
      >
        +
      </button>

    </article>

  `).join('');

}

/* =========================
   MODAL BURGER
========================= */

function openBurgerModal(id) {

  const burger =
  burgers.find(x => x.id === id);

  if (!burger) return;

  closeBurgerModal();

  const overlay =
  document.createElement('div');

  overlay.className =
  'burger-modal-overlay';

  overlay.innerHTML = `

    <div class="burger-modal">

      <div class="burger-modal-left">

        <div class="burger-modal-glow"></div>

        <img
          src="${burger.image}"
          class="burger-modal-image"
          alt="${burger.name}"
        />

      </div>

      <div class="burger-modal-content">

        <p class="eyebrow">
          PERSONALIZÁ TU BURGER
        </p>

        <h2>
          ${burger.name.toUpperCase()}
        </h2>

        <p class="modal-desc">
          ${burger.desc}
        </p>

        <div class="modal-sizes">

          <button
            type="button"
            class="size-btn active"
            data-size="simple"
            data-price="${burger.prices.simple}"
          >

            <small>SIMPLE</small>

            <strong>
              $${burger.prices.simple.toLocaleString('es-AR')}
            </strong>

          </button>

          <button
            type="button"
            class="size-btn"
            data-size="doble"
            data-price="${burger.prices.doble}"
          >

            <small>DOBLE</small>

            <strong>
              $${burger.prices.doble.toLocaleString('es-AR')}
            </strong>

          </button>

          ${
            burger.prices.triple
            ? `
              <button
                type="button"
                class="size-btn"
                data-size="triple"
                data-price="${burger.prices.triple}"
              >

                <small>TRIPLE</small>

                <strong>
                  $${burger.prices.triple.toLocaleString('es-AR')}
                </strong>

              </button>
            `
            : ''
          }

        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="btn-ghost"
            onclick="closeBurgerModal()"
          >
            CANCELAR
          </button>

          <button
            type="button"
            class="btn-primary"
            id="confirmBurger"
          >
            AGREGAR Y SEGUIR
          </button>

        </div>

      </div>

    </div>

  `;

  document.body.appendChild(overlay);

  let selectedSize = 'simple';
  let selectedPrice = burger.prices.simple;

  const sizeButtons =
  overlay.querySelectorAll('.size-btn');

  sizeButtons.forEach(btn => {

    btn.addEventListener('click', () => {

      sizeButtons.forEach(x =>
        x.classList.remove('active')
      );

      btn.classList.add('active');

      selectedSize =
      btn.dataset.size;

      selectedPrice =
      Number(btn.dataset.price);

    });

  });

  const confirmBtn =
  overlay.querySelector('#confirmBurger');

  confirmBtn.addEventListener('click', () => {

    addToCart({
      type: 'burger',
      name: burger.name,
      size: selectedSize,
      price: selectedPrice
    });

    closeBurgerModal();

    window.location.href =
    'extras.html';

  });

}

function closeBurgerModal() {

  const modal =
  document.querySelector('.burger-modal-overlay');

  if (modal) {

    modal.remove();

  }

}

/* =========================
   EXTRAS
========================= */

const extrasGrid =
document.getElementById('extrasGrid');

if (extrasGrid) {

  const extraImages = {
    'Bacon x2': 'assets/img/extras/bacon.png',
    'Cheddar x2': 'assets/img/extras/cheddar.png',
    'Tybo x2': 'assets/img/extras/tybo.png',
    'Jamón': 'assets/img/extras/jamon.png',
    'Cebolla Crispy': 'assets/img/extras/crispy.png',
    'Huevo Frito': 'assets/img/extras/huevo.png',
    'Verduras': 'assets/img/extras/verduras.png'
  };

  extrasGrid.innerHTML =
  extras.map(extra => `

    <article class="extra-card">

      <div class="extra-title">
        ${extra.name.toUpperCase()}
      </div>

      <div class="extra-desc">
        Sumalo a tu burger.
      </div>

      <img
        src="${extraImages[extra.name]}"
        class="extra-image"
        alt="${extra.name}"
      />

      <div class="extra-price">
        $${extra.price.toLocaleString('es-AR')}
      </div>

      <button
        type="button"
        class="extra-add"
        onclick="addExtraByName('${extra.name.replace(/'/g, "\\'")}', ${extra.price})"
      >
        +
      </button>

    </article>

  `).join('');

}

/* =========================
   ADD EXTRA
========================= */

function addExtra(extra) {

  addToCart({
    type: 'extra',
    name: extra.name,
    price: Number(extra.price)
  });

}

function addExtraByName(name, price) {

  addExtra({
    name: name,
    price: Number(price)
  });

}

/* =========================
   STATIC EXTRAS / PAPAS FIX
========================= */

document.addEventListener('click', function(event) {

  const button =
  event.target.closest('.extra-add');

  if (!button) return;

  if (button.hasAttribute('onclick')) return;

  const card =
  button.closest('.extra-card');

  if (!card) return;

  const priceEl =
  card.querySelector('.extra-price');

  const imageEl =
  card.querySelector('.extra-image');

  let name =
  'Extra';

  if (imageEl && imageEl.getAttribute('alt')) {

    name =
    imageEl.getAttribute('alt');

  }

  if (imageEl && imageEl.getAttribute('src')) {

    const src =
    imageEl.getAttribute('src');

    if (src.includes('bacon')) {
      name = 'Bacon x2';
    }

    else if (src.includes('cheddar')) {
      name = 'Cheddar x2';
    }

    else if (src.includes('jamon')) {
      name = 'Jamón';
    }

    else if (src.includes('crispy')) {
      name = 'Cebolla Crispy';
    }

    else if (src.includes('huevo')) {
      name = 'Huevo Frito';
    }

    else if (src.includes('verduras')) {
      name = 'Lechuga y Tomate';
    }

    else if (src.includes('papas1')) {
      name = 'Porción Recluta';
    }

    else if (src.includes('papas2')) {
      name = 'Doble Blindaje';
    }

    else if (src.includes('papas3')) {
      name = 'Artillería';
    }

  }

  let price =
  0;

  if (priceEl) {

    price =
    Number(
      priceEl.innerText
        .replace('$', '')
        .replace(/\./g, '')
        .replace(',', '')
        .trim()
    );

  }

  if (price > 0) {

    addExtra({
      name: name,
      price: price
    });

  }

});

/* =========================
   DRINKS
========================= */

const drinksGrid =
document.getElementById('drinksGrid');

if (drinksGrid) {

  drinksGrid.innerHTML =
  drinks.map(drink => `

    <article class="drink-card">

      <h3>
        ${drink.name}
      </h3>

      <strong>
        $${drink.price.toLocaleString('es-AR')}
      </strong>

      <button
        type="button"
        class="drink-add"
        onclick="addDrinkByName('${drink.name.replace(/'/g, "\\'")}', ${drink.price})"
      >
        +
      </button>

    </article>

  `).join('');

}

/* =========================
   ADD DRINK
========================= */

function addDrink(drink) {

  addToCart({
    type: 'drink',
    name: drink.name,
    price: Number(drink.price)
  });

}

function addDrinkByName(name, price) {

  addDrink({
    name: name,
    price: Number(price)
  });

}

/* =========================
   STATIC DRINKS FIX
========================= */

document.addEventListener('click', function(event) {

  const button =
  event.target.closest('.drink-add');

  if (!button) return;

  if (button.hasAttribute('onclick')) return;

  const card =
  button.closest('.drink-card');

  if (!card) return;

  const titleEl =
  card.querySelector('h3');

  const priceEl =
  card.querySelector('.drink-price, strong');

  let name =
  titleEl ? titleEl.innerText.trim() : 'Bebida';

  let price =
  0;

  if (priceEl) {

    price =
    Number(
      priceEl.innerText
        .replace('$', '')
        .replace(/\./g, '')
        .replace(',', '')
        .trim()
    );

  }

  if (price > 0) {

    addDrink({
      name: name,
      price: price
    });

  }

});

/* =========================
   RESUMEN
========================= */

const orderList =
document.getElementById('orderList');

if (orderList) {

  const cart =
  getCart();

  let total =
  0;

  if (cart.length <= 0) {

    orderList.innerHTML = `

      <div class="empty-cart">
        Tu pedido está vacío
      </div>

    `;

  } else {

    orderList.innerHTML =
    cart.map((item, index) => {

      total +=
      Number(item.price);

      return `

        <div class="summary-item">

          <div>

            <h4>
              ${item.name}
            </h4>

            ${
              item.size
              ? `<small>${item.size.toUpperCase()}</small>`
              : ''
            }

          </div>

          <div class="summary-price">

            <strong>
              $${Number(item.price).toLocaleString('es-AR')}
            </strong>

            <button
              type="button"
              onclick="removeCartItem(${index})"
            >
              ×
            </button>

          </div>

        </div>

      `;

    }).join('');

  }

  const totalEl =
  document.getElementById('orderTotal');

  if (totalEl) {

    totalEl.innerText =
    `$${total.toLocaleString('es-AR')}`;

  }

}

/* =========================
   BUTTONS
========================= */

const clearBtn =
document.getElementById('clearOrder');

if (clearBtn) {

  clearBtn.addEventListener(
    'click',
    clearCart
  );

}

/* =========================
   FIX MODAL
========================= */

window.addEventListener('pageshow', () => {

  const modal =
  document.querySelector('.burger-modal-overlay');

  if (modal) {

    modal.remove();

  }

});

/* =========================
   GLOBAL EXPORTS
========================= */

window.getCart =
getCart;

window.saveCart =
saveCart;

window.addToCart =
addToCart;

window.updateCartCount =
updateCartCount;

window.removeCartItem =
removeCartItem;

window.clearCart =
clearCart;

window.openBurgerModal =
openBurgerModal;

window.closeBurgerModal =
closeBurgerModal;

window.addExtra =
addExtra;

window.addExtraByName =
addExtraByName;

window.addDrink =
addDrink;

window.addDrinkByName =
addDrinkByName;
