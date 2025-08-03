const products = [
  {
    name: "Wireless Earbuds",
    category: "earbuds",
    price: 1499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1667178173387-7e0cb51c0b4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Gaming Laptop",
    category: "laptops",
    price: 57999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Smart LED TV",
    category: "leds",
    price: 23999,
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1456456830/photo/wide-screen-led-smart-tv-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=v6G2avl2eCMMm0QGeR3FRCvT_hufp8Z6MHySbPxix74="
  },
  {
    name: "Earbuds Pro",
    category: "earbuds",
    price: 1999,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Business Laptop",
    category: "laptops",
    price: 42999,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExhcHRvcHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Headphones",
    category: "Headphones",
    price: 2899,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVhZFBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

function displayProducts(filteredProducts) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  filteredProducts.forEach(product => {
    const item = document.createElement("li");
    item.className = "product-item";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>rating: ${product.rating}</p>
    `;
    list.appendChild(item);
  });
}

function filterAndSort() {
  const category = document.getElementById("categoryFilter").value;
  const sortOption = document.getElementById("sortOption").value;

  let filtered = category === "all" ? products : products.filter(p => p.category === category);

  if (sortOption === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

window.onload = () => {
  displayProducts(products);
};
