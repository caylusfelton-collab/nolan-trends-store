import { useState } from "react";
import "./App.css";

const products = [
  {
    image: "/images/product-01.jpg",
    name: "Nolan Men's Essential Tee",
    price: 1500,
    description: "Modern streetwear for everyday style.",
    category: "MEN",
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "/images/product-02.jpg",
    name: "Nolan Men's Urban Tee",
    price: 1750,
    description: "Clean streetwear with a bold everyday look.",
    category: "MEN",
    colors: ["Black", "Grey", "Beige"],
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    image: "/images/product-03.jpg",
    name: "Nolan Men's Classic Fit",
    price: 2000,
    description: "Fresh casual fashion made for everyday confidence.",
    category: "MEN",
    colors: ["Black", "Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "/images/product-04.jpg",
    name: "Nolan Men's Street Fit",
    price: 2250,
    description: "A modern fit designed for effortless street style.",
    category: "MEN",
    colors: ["Black", "Red", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    image: "/images/product-05.jpg",
    name: "Nolan Men's Daily Wear",
    price: 2500,
    description: "Comfortable streetwear with a contemporary finish.",
    category: "MEN",
    colors: ["Grey", "Black", "Green"],
    sizes: ["M", "L", "XL"],
  },

  {
    image: "/images/product-06.jpg",
    name: "Nolan Women's Essential",
    price: 2750,
    description: "Bold everyday fashion created for your own style.",
    category: "WOMEN",
    colors: ["Black", "White", "Brown"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "/images/product-07.jpg",
    name: "Nolan Women's Urban Look",
    price: 3000,
    description: "Relaxed streetwear made for modern wardrobes.",
    category: "WOMEN",
    colors: ["Black", "Grey", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    image: "/images/product-08.jpg",
    name: "Nolan Women's Street Style",
    price: 3250,
    description: "Premium-inspired street style for everyday wear.",
    category: "WOMEN",
    colors: ["White", "Black", "Beige"],
    sizes: ["M", "L", "XL"],
  },
  {
    image: "/images/product-09.jpg",
    name: "Nolan Women's Casual Fit",
    price: 3500,
    description: "Simple, confident and easy-to-wear street fashion.",
    category: "WOMEN",
    colors: ["Black", "Green", "White"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "/images/product-10.jpg",
    name: "Nolan Women's Statement",
    price: 3750,
    description: "A versatile look for casual days and nights out.",
    category: "WOMEN",
    colors: ["Black", "Grey", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },

  {
    image: "/images/product-11.jpg",
    name: "Nolan Kids Essential",
    price: 4000,
    description: "Modern fashion designed for young trendsetters.",
    category: "KIDS",
    colors: ["Blue", "Black", "White"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    image: "/images/product-12.jpg",
    name: "Nolan Kids Street Tee",
    price: 4250,
    description: "Streetwear designed for comfort and movement.",
    category: "KIDS",
    colors: ["Black", "Brown", "Beige"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    image: "/images/product-13.jpg",
    name: "Nolan Kids Urban Fit",
    price: 4500,
    description: "Fresh urban fashion for young personalities.",
    category: "KIDS",
    colors: ["Grey", "Black", "White"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    image: "/images/product-14.jpg",
    name: "Nolan Kids Daily Wear",
    price: 4750,
    description: "Everyday streetwear built around comfort.",
    category: "KIDS",
    colors: ["Green", "Black", "Grey"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    image: "/images/product-15.jpg",
    name: "Nolan Kids Statement",
    price: 5000,
    description: "A fun streetwear piece for young trendsetters.",
    category: "KIDS",
    colors: ["Black", "White", "Blue"],
    sizes: ["XS", "S", "M", "L"],
  },

  {
    image: "/images/product-16.jpg",
    name: "Nolan Streetwear Essential",
    price: 5250,
    description: "Comfort-first fashion with a contemporary street look.",
    category: "STREETWEAR",
    colors: ["Black", "Red", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    image: "/images/product-17.jpg",
    name: "Nolan Streetwear Premium",
    price: 5500,
    description: "Premium-looking streetwear made for everyday confidence.",
    category: "STREETWEAR",
    colors: ["Beige", "Black", "Brown"],
    sizes: ["M", "L", "XL"],
  },
  {
    image: "/images/product-18.jpg",
    name: "Nolan Streetwear Clean Fit",
    price: 5750,
    description: "A clean urban look designed for effortless styling.",
    category: "STREETWEAR",
    colors: ["White", "Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "/images/product-19.jpg",
    name: "Nolan Streetwear Bold",
    price: 6000,
    description: "Bold everyday fashion with a relaxed streetwear feel.",
    category: "STREETWEAR",
    colors: ["Blue", "Black", "Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    image: "/images/product-20.jpg",
    name: "Nolan Streetwear Modern",
    price: 6250,
    description: "Modern casualwear designed around your individual style.",
    category: "STREETWEAR",
    colors: ["Black", "White", "Brown"],
    sizes: ["M", "L", "XL"],
  },
  {
    image: "/images/product-21.jpg",
    name: "Nolan Streetwear Signature",
    price: 6500,
    description: "A standout look from the Nolan Trends collection.",
    category: "STREETWEAR",
    colors: ["Black", "Grey", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const categories = [
  {
    title: "MEN",
    description: "Streetwear & everyday fits",
    image: "/images/product-01.jpg",
  },
  {
    title: "WOMEN",
    description: "Modern looks & statement pieces",
    image: "/images/product-06.jpg",
  },
  {
    title: "KIDS",
    description: "Fresh styles for young trendsetters",
    image: "/images/product-11.jpg",
  },
  {
    title: "STREETWEAR",
    description: "Bold looks. Your own style.",
    image: "/images/product-16.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const options = {};

    products.forEach((product) => {
      options[product.image] = {
        color: product.colors[0],
        size: product.sizes[0],
      };
    });

    return options;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleOptionChange = (productImage, option, value) => {
    setSelectedOptions((current) => ({
      ...current,
      [productImage]: {
        ...current[productImage],
        [option]: value,
      },
    }));
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setProductQuantity(1);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setProductQuantity(1);
  };

  const addToCart = (product, quantity = 1) => {
    const options = selectedOptions[product.image];

    const existingItem = cart.find(
      (item) =>
        item.image === product.image &&
        item.selectedColor === options.color &&
        item.selectedSize === options.size
    );

    if (existingItem) {
      setCart((currentCart) =>
        currentCart.map((item) =>
          item.cartId === existingItem.cartId
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      );
    } else {
      const cartProduct = {
        ...product,
        selectedColor: options.color,
        selectedSize: options.size,
        quantity,
        cartId: `${product.image}-${options.color}-${options.size}-${Date.now()}`,
      };

      setCart((currentCart) => [...currentCart, cartProduct]);
    }

    setCartOpen(true);
  };

  const addProductFromModal = () => {
    if (!selectedProduct) return;

    addToCart(selectedProduct, productQuantity);
    closeProduct();
  };

  const increaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId)
    );
  };

  const cartItemCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const openWhatsApp = () => {
    const message =
      "Hello Nolan Trends! 👋\n\n" +
      "I'd like to configure an order. " +
      "Please help me choose my preferred clothing items, " +
      "sizes and colors.";

    window.open(
      `https://wa.me/254113506421?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const checkoutOnWhatsApp = () => {
    if (cart.length === 0) return;

    const order = cart
      .map(
        (product, index) =>
          `${index + 1}. ${product.name}\n` +
          `   Color: ${product.selectedColor}\n` +
          `   Size: ${product.selectedSize}\n` +
          `   Quantity: ${product.quantity}\n` +
          `   Price: KSh ${(product.price * product.quantity).toLocaleString()}`
      )
      .join("\n\n");

    const message =
      `Hello Nolan Trends! 👋\n\n` +
      `I'd like to place an order:\n\n` +
      `${order}\n\n` +
      `Total: KSh ${cartTotal.toLocaleString()}\n\n` +
      `Please let me know how I can complete the order.`;

    window.open(
      `https://wa.me/254113506421?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const filteredProducts = products
    .filter((product) => {
      const search = searchTerm.trim().toLowerCase();

      const matchesCategory =
        selectedCategory === "ALL" ||
        product.category === selectedCategory;

      const searchableText = [
        product.name,
        product.description,
        product.category,
        ...product.colors,
        ...product.sizes,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        search === "" || searchableText.includes(search);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOption === "price-low") {
        return a.price - b.price;
      }

      if (sortOption === "price-high") {
        return b.price - a.price;
      }

      if (sortOption === "newest") {
        return products.indexOf(b) - products.indexOf(a);
      }

      return 0;
    });

  return (
    <div className="app" id="home">

      {/* CONTACT BAR */}

      <div className="contact-bar">
        📞 Call / WhatsApp: +254 113 506 421
      </div>

      {/* HEADER */}

      <header className="header">

        <div className="logo">
          <img
            src="/logo.png"
            alt="Nolan Trends Cloth Branding"
          />
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">

          <button
            className="whatsapp-button"
            onClick={openWhatsApp}
          >
            💬 WhatsApp
          </button>

          <button
            className="cart-button"
            onClick={() => setCartOpen(true)}
          >
            🛒 Cart ({cartItemCount})
          </button>

        </div>

      </header>

      {/* HERO */}

      <main>

        <section className="hero">

          <div className="hero-content">

            <p className="hero-label">
              NOLAN TRENDS
            </p>

            <h2>
              WEAR YOUR
              <br />
              <strong>OWN STYLE.</strong>
            </h2>

            <p className="hero-description">
              Discover fresh styles and streetwear
              made for everyday confidence.
            </p>

            <button
              className="shop-button"
              onClick={scrollToShop}
            >
              SHOP NOW
            </button>

          </div>

        </section>

        {/* CATEGORIES */}

        <section
          className="category-section"
          id="categories"
        >

          <div className="category-heading">

            <p className="category-label">
              EXPLORE THE COLLECTION
            </p>

            <h2>
              SHOP BY CATEGORY
            </h2>

            <p>
              Find your look. Choose your style.
            </p>

          </div>

          <div className="category-grid">

            {categories.map((category) => (

              <button
                className={`category-card ${
                  selectedCategory === category.title
                    ? "active-category"
                    : ""
                }`}
                key={category.title}
                onClick={() =>
                  handleCategoryClick(category.title)
                }
              >

                <img
                  src={category.image}
                  alt={category.title}
                />

                <div className="category-overlay">

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                  <span>
                    VIEW COLLECTION →
                  </span>

                </div>

              </button>

            ))}

          </div>

          <div className="all-products-button-container">

            <button
              className="all-products-button"
              onClick={() =>
                handleCategoryClick("ALL")
              }
            >
              VIEW ALL PRODUCTS
            </button>

          </div>

        </section>

        {/* WHY US */}

        <section className="why-section">

          <div className="why-heading">

            <p className="why-label">
              THE NOLAN TRENDS DIFFERENCE
            </p>

            <h2>
              STYLE MADE FOR YOU.
            </h2>

            <p>
              More than clothing. It's about
              confidence, individuality and
              wearing your own style.
            </p>

          </div>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">✦</div>

              <h3>QUALITY STYLE</h3>

              <p>
                Carefully selected streetwear
                designed for comfort and everyday
                wear.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">◆</div>

              <h3>YOUR OWN STYLE</h3>

              <p>
                Express yourself with modern
                pieces made to fit your personality.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">★</div>

              <h3>FRESH COLLECTIONS</h3>

              <p>
                Discover new looks and fresh
                streetwear styles.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">→</div>

              <h3>EASY ORDERING</h3>

              <p>
                Choose your size and color,
                add to cart and order through
                WhatsApp.
              </p>
            </div>

          </div>

        </section>

        {/* SHOP */}

        <section
          className="categories"
          id="shop"
        >

          <div className="shop-heading">

            <p className="shop-label">
              NOLAN TRENDS COLLECTION
            </p>

            <h2 className="section-title">
              {selectedCategory === "ALL"
                ? "FEATURED STYLES"
                : `${selectedCategory} COLLECTION`}
            </h2>

            <p className="product-count">
              Showing {filteredProducts.length} products
            </p>

          </div>

          {/* SEARCH */}

          <div className="search-container">

            <div className="search-box">

              <span className="search-icon">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search Nolan Trends..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />

              {searchTerm && (

                <button
                  className="clear-search"
                  onClick={() =>
                    setSearchTerm("")
                  }
                >
                  ✕
                </button>

              )}

            </div>

          </div>

          {/* FILTERS */}

          <div className="filter-buttons">

            <button
              className={
                selectedCategory === "ALL"
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() =>
                setSelectedCategory("ALL")
              }
            >
              ALL
            </button>

            {categories.map((category) => (

              <button
                key={category.title}
                className={
                  selectedCategory === category.title
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() =>
                  setSelectedCategory(category.title)
                }
              >
                {category.title}
              </button>

            ))}

          </div>

          {/* SORT */}

          <div className="sort-container">

            <label htmlFor="sort-products">
              SORT BY
            </label>

            <select
              id="sort-products"
              value={sortOption}
              onChange={(event) =>
                setSortOption(event.target.value)
              }
            >

              <option value="featured">
                Featured
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

            </select>

          </div>

          {/* PRODUCTS */}

          {filteredProducts.length === 0 ? (

            <div className="no-products">

              <h3>
                No products found
              </h3>

              <p>
                Try another search or browse
                all our collections.
              </p>

              <button
                className="all-products-button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("ALL");
                }}
              >
                VIEW ALL PRODUCTS
              </button>

            </div>

          ) : (

            <div className="product-grid">

              {filteredProducts.map((product) => {

                const options =
                  selectedOptions[product.image];

                return (

                  <div
                    className="product-card"
                    key={product.image}
                  >

                    <div
                      className="product-image"
                      onClick={() =>
                        openProduct(product)
                      }
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>

                    <div className="product-info">

                      <div className="product-category">
                        {product.category}
                      </div>

                      <h3>
                        {product.name}
                      </h3>

                      <p>
                        {product.description}
                      </p>

                      <div className="product-option">

                        <span className="option-label">
                          Color:
                        </span>

                        <div className="option-buttons">

                          {product.colors.map((color) => (

                            <button
                              key={color}
                              type="button"
                              className={`color-option ${
                                options.color === color
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleOptionChange(
                                  product.image,
                                  "color",
                                  color
                                )
                              }
                            >
                              {color}
                            </button>

                          ))}

                        </div>

                      </div>

                      <div className="product-option">

                        <span className="option-label">
                          Size:
                        </span>

                        <div className="option-buttons">

                          {product.sizes.map((size) => (

                            <button
                              key={size}
                              type="button"
                              className={`size-option ${
                                options.size === size
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleOptionChange(
                                  product.image,
                                  "size",
                                  size
                                )
                              }
                            >
                              {size}
                            </button>

                          ))}

                        </div>

                      </div>

                      <strong>
                        KSh{" "}
                        {product.price.toLocaleString()}
                      </strong>

                      <button
                        className="category-button"
                        onClick={() =>
                          addToCart(product)
                        }
                      >
                        ADD TO CART
                      </button>

                    </div>

                  </div>

                );
              })}

            </div>

          )}

        </section>

        {/* REVIEWS */}

        <section className="reviews-section">

          <div className="reviews-heading">

            <p className="reviews-label">
              CUSTOMER LOVE
            </p>

            <h2>
              WHAT OUR CUSTOMERS SAY
            </h2>

            <p>
              Style that speaks for itself.
            </p>

          </div>

          <div className="reviews-grid">

            <div className="review-card">

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                "I loved the style and the quality.
                Everything looked even better in
                person."
              </p>

              <div className="review-author">
                <strong>Brian M.</strong>
                <span>Customer</span>
              </div>

            </div>

            <div className="review-card">

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                "The clothes are stylish,
                comfortable and easy to match."
              </p>

              <div className="review-author">
                <strong>Sharon K.</strong>
                <span>Customer</span>
              </div>

            </div>

            <div className="review-card">

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                "The ordering process was simple
                and the designs are exactly the
                kind of streetwear I like."
              </p>

              <div className="review-author">
                <strong>Kevin O.</strong>
                <span>Customer</span>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* PRODUCT MODAL */}

      {selectedProduct && (

        <div
          className="product-modal-overlay"
          onClick={closeProduct}
        >

          <div
            className="product-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="product-modal-close"
              onClick={closeProduct}
            >
              ✕
            </button>

            <div className="product-modal-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

            </div>

            <div className="product-modal-info">

              <div className="product-category">
                {selectedProduct.category}
              </div>

              <h2>
                {selectedProduct.name}
              </h2>

              <p className="product-modal-description">
                {selectedProduct.description}
              </p>

              <strong className="product-modal-price">
                KSh{" "}
                {selectedProduct.price.toLocaleString()}
              </strong>

              <div className="product-option">

                <span className="option-label">
                  Color:
                </span>

                <div className="option-buttons">

                  {selectedProduct.colors.map((color) => (

                    <button
                      key={color}
                      type="button"
                      className={`color-option ${
                        selectedOptions[
                          selectedProduct.image
                        ].color === color
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleOptionChange(
                          selectedProduct.image,
                          "color",
                          color
                        )
                      }
                    >
                      {color}
                    </button>

                  ))}

                </div>

              </div>

              <div className="product-option">

                <span className="option-label">
                  Size:
                </span>

                <div className="option-buttons">

                  {selectedProduct.sizes.map((size) => (

                    <button
                      key={size}
                      type="button"
                      className={`size-option ${
                        selectedOptions[
                          selectedProduct.image
                        ].size === size
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleOptionChange(
                          selectedProduct.image,
                          "size",
                          size
                        )
                      }
                    >
                      {size}
                    </button>

                  ))}

                </div>

              </div>

              <div className="modal-quantity">

                <span className="option-label">
                  Quantity:
                </span>

                <div className="quantity-control">

                  <button
                    onClick={() =>
                      setProductQuantity(
                        (quantity) =>
                          Math.max(1, quantity - 1)
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {productQuantity}
                  </span>

                  <button
                    onClick={() =>
                      setProductQuantity(
                        (quantity) =>
                          quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                className="modal-add-button"
                onClick={addProductFromModal}
              >
                ADD TO CART
              </button>

            </div>

          </div>

        </div>

      )}

      {/* CART */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <div
            className="cart-panel"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <h2>
                Your Cart
              </h2>

              <button
                className="close-cart"
                onClick={() =>
                  setCartOpen(false)
                }
              >
                ✕
              </button>

            </div>

            {cart.length === 0 ? (

              <p className="empty-cart">
                Your cart is empty.
              </p>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((product) => (

                    <div
                      className="cart-item"
                      key={product.cartId}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="cart-item-details">

                        <h3>
                          {product.name}
                        </h3>

                        <p>
                          Color:{" "}
                          {product.selectedColor}
                        </p>

                        <p>
                          Size:{" "}
                          {product.selectedSize}
                        </p>

                        <p>
                          KSh{" "}
                          {product.price.toLocaleString()}
                        </p>

                        <div className="quantity-control">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                product.cartId
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {product.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                product.cartId
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <button
                          className="remove-button"
                          onClick={() =>
                            removeFromCart(
                              product.cartId
                            )
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="cart-total">

                  <strong>
                    Total
                  </strong>

                  <strong>
                    KSh{" "}
                    {cartTotal.toLocaleString()}
                  </strong>

                </div>

                <button
                  className="checkout-button"
                  onClick={checkoutOnWhatsApp}
                >
                  CHECKOUT ON WHATSAPP
                </button>

              </>

            )}

          </div>

        </div>

      )}

      {/* FOOTER */}

      <footer
        className="footer"
        id="contact"
      >

        <h2>
          NOLAN TRENDS
        </h2>

        <p>
          CLOTH BRANDING
        </p>

        <p>
          📞 +254 113 506 421
        </p>

        <p>
          © 2026 Nolan Trends. All rights reserved.
        </p>

      </footer>

      {/* FLOATING WHATSAPP CONFIGURE BUTTON */}

      <button
        className="floating-whatsapp"
        onClick={openWhatsApp}
        aria-label="Configure your order on WhatsApp"
      >

        <span className="floating-whatsapp-icon">
          💬
        </span>

        <span className="floating-whatsapp-text">
          Configure Order
        </span>

      </button>

    </div>
  );
}

export default App;