export function renderPizzaDisplay() {

    const display = document.createElement('div');
    display.classList.add('display');

    const stuff = document.createElement('div');
    stuff.classList.add('stuff');

    const pizzaTypes = [
        {
            name: 'La Rossa',
            description: 'tomato sauce, garlic, basil (no cheese)',
            price: ['$15'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/pizza-types/pizza1.jpeg',
        },

        {
            name: 'Margherita',
            description: 'tomato sauce, fresh mozzarella, basil, sea salt, California extra virgin olive oil',
            price: ['$17'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/pizza-types/pizza2.jpeg',
        },

        {
            name: 'Pepperoni',
            description: 'tomato sauce, burrata, garlic, basil',
            price: ['$19'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/pizza-types/pizza3.jpeg',
        },

        {
            name: 'Bosco',
            description: 'tomato sauce, fresh mozzarella, cremini mushrooms, fontina',
            price: ['$17'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/pizza-types/pizza4.jpeg',
        },

        {
            name: 'Burrata',
            description: 'tomato sauce, burrata, garlic, basil',
            price: ['$18'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/pizza-types/pizza5.jpeg',
        },

        {
            name: 'Jersey Margherita',
            description: 'crushed NJ tomatoes, Jersey Girl mozzarella, basil',
            price: ['$19'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/pizza-types/pizza6.jpeg',
        },
    ];

    pizzaTypes.forEach((pizzaType) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemPicContainer = document.createElement('div');
        itemPicContainer.classList.add('item-pic');

        const itemPic = document.createElement('img');
        itemPic.setAttribute('src', pizzaType.imageSrc);
        itemPic.setAttribute('alt', 'pizza');
        itemPic.setAttribute('height', '150px');

        const itemText = document.createElement('div');
        itemText.classList.add('item-text');

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.innerText = pizzaType.name;

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDescription.innerText = pizzaType.description;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.innerText = pizzaType.price;

        itemPicContainer.appendChild(itemPic);
        itemText.appendChild(itemName);
        itemText.appendChild(itemDescription);
        item.appendChild(itemPicContainer);
        item.appendChild(itemText);
        item.appendChild(itemPrice);

        stuff.appendChild(item);

    });

    display.appendChild(stuff);

    return display;
};