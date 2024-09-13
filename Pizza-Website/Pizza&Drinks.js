// Pizza Details
var pizzas = [
    {
        id: 1,
        name: "Bolognese Chicken",
        image: "Images/Pizza/bolognese.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "Experience the perfect traditional meat sauce on a pizza, topped with tasty chicken and veggies."
    },
    {
        id: 2,
        name: "Sumo Chicken",
        image: "Images/Pizza/sumo.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "With tomato sauce, chicken meat, pineapples, mozzarella cheese."
    },
    {
        id: 3,
        name: "US Favourite Chicken",
        image: "Images/Pizza/us favourite.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "Everyone's favourite with our chicken pepperoni and gooey double cheese filling."
    },
    {
        id: 4,
        name: "Texas BBQ Chicken",
        image: "Images/Pizza/texas_bbq.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "It's a tangy and smoky BBQ life all the way with our BBQ Chicken, BBQ Sauce, onion, and pineapple."
    },
    {
        id: 5,
        name: "Macho Meat Lover (BEEF)",
        image: "Images/Pizza/macho_meat.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "Ultimate pizza, filled to the brim with flavourful beef pepperoni, ground beef, and chunky chicken."
    },
    {
        id: 6,
        name: "New Yorker (BEEF)",
        image: "Images/Pizza/new_yoker.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "Stuffed with delectable beef pepperoni, mushroom, chicken rolls, and ground beef."
    },
    {
        id: 7,
        name: "Plain Cheese",
        image: "Images/Pizza/plain_cheese.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "Topped with our special secret sauce and gooey double cheese!"
    },
    {
        id: 8,
        name: "Italian Plain Cheese",
        image: "Images/Pizza/plain_cheese.png",
        sizes: ["Regular", "Small", "Large"],
        prices: { "Regular": "RM20", "Small": "RM15", "Large": "RM25" },
        description: "Topped with our special secret sauce and gooey double cheese!"
    }

];

// Drinks Details
var drinks = [
    {
        id: 1,
        name: "Coke",
        image: "Images/Drinks/coke.png",
        sizes: ["500ml", "250ml", "750ml"],
        prices: { "500ml": "RM20", "250ml": "RM15", "750ml": "RM25" }
    },
    {
        id: 2,
        name: "Coke Zero",
        image: "Images/Drinks/cokezero.png",
        sizes: ["500ml", "250ml", "750ml"],
        prices: { "500ml": "RM20", "250ml": "RM15", "750ml": "RM25" }
    },
    {
        id: 3,
        name: "Ice Lemon Tea",
        image: "Images/Drinks/lemontea.png",
        sizes: ["500ml", "250ml", "750ml"],
        prices: { "500ml": "RM20", "250ml": "RM15", "750ml": "RM25" }
    },
    {
        id: 4,
        name: "7 UP",
        image: "Images/Drinks/7up.png",
        sizes: ["500ml", "250ml", "750ml"],
        prices: { "500ml": "RM20", "250ml": "RM15", "750ml": "RM25" }
    },
    {
        id: 5,
        name: "Mineral Water",
        image: "Images/Drinks/mineral.png",
        sizes: ["500ml", "250ml", "750ml"],
        prices: { "500ml": "RM20", "250ml": "RM15", "750ml": "RM25" }
    },
    {
        id: 6,
        name: "Pepsi",
        image: "Images/Drinks/pepsi.png",
        sizes: ["500ml", "250ml", "750ml"],
        prices: { "500ml": "RM20", "250ml": "RM15", "750ml": "RM25" }
    }
];

// Populate the pizzas container with the pizza details
function populatePizzas() {
    var container = document.getElementById('pizzas-container');
    var html = '';

    pizzas.forEach(pizza => {
        html += `
            <div class="items">
                <div class="row">
                    <div>
                        <img src="${pizza.image}" alt="${pizza.name}" class="image">
                    </div>
                    <div class="info">
                        <div class="name">
                            <h2>${pizza.name}</h2>
                            <p class="description">${pizza.description}</p>
                        </div>
                        <div class="size">
                            <p>Select your size</p>
                            <select id="size-${pizza.id}" onchange="updatePizzaPrice('${pizza.id}')">
                                ${pizza.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>
                            <br>
                            <button id="price-button-${pizza.id}" class="price-button"><span>Add</span><span>${pizza.prices['Regular']}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function updatePizzaPrice(elementId) {
    var sizeSelect = document.getElementById("size-" + elementId);
    var priceButton = document.getElementById("price-button-" + elementId);
    // Get the selected size from the dropdown
    var selectedSize = sizeSelect.value;
    // Loop through the drinks array to find the drink with the matching id and return it
    var pizza = pizzas.find(p => p.id == elementId);
    // Get the price of the selected size
    var price = pizza.prices[selectedSize];
    // Update the price button text
    priceButton.innerHTML = `<span>Add</span><span>${price}</span>`;
}

function populateDrinks() {
    var container = document.getElementById('drinks-container');
    var html = '';

    drinks.forEach(drink => {
        html += `
            <div class="items">
                <div class="row">
                    <div>
                        <img src="${drink.image}" alt="${drink.name}" class="image">
                    </div>
                    <div class="info">
                        <div class="name">
                            <h2>${drink.name}</h2>
                        </div>
                        <div class="size">
                            <p>Select your size</p>
                            <select id="size-${drink.id}" onchange="updateDrinkPrice('${drink.id}')">
                            <--! Loop through the sizes array to create the dropdown options -->
                                ${drink.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>
                            <br>
                            <button id="price-button-${drink.id}" class="price-button"><span>Add</span><span>${drink.prices['500ml']}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function updateDrinkPrice(elementId) {
    var sizeSelect = document.getElementById("size-" + elementId);
    var priceButton = document.getElementById("price-button-" + elementId);
    var selectedSize = sizeSelect.value;
    var drink = drinks.find(d => d.id == elementId);
    var price = drink.prices[selectedSize];
    priceButton.innerHTML = `<span>Add</span><span>${price}</span>`;
}

function showPage(page) {
    document.getElementById('pizza-page').style.display = 'none';   // Hide all pages
    document.getElementById('drinks-page').style.display = 'none';  // Hide all pages
    document.getElementById(page).style.display = 'block'; // Make the selected page visible

    if (page === 'pizza-page') {
        populatePizzas();
    } else if (page === 'drinks-page') {
        populateDrinks();
    }
}

// Load the entire page
window.onload = function() {
    // Check if a hash(#) is in the URL and show the corresponding page
    if (window.location.hash === '#drinks-page') {
        showPage('drinks-page');
    }
    else{
        showPage('pizza-page'); // Default page
    }
    
}