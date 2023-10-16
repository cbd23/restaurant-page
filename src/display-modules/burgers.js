export function renderBurgersDisplay() {

    const display = document.createElement('div');
    display.classList.add('display');

    const stuff = document.createElement('div');
    stuff.classList.add('stuff');

    const burgerTypes = [
        {
            name: 'Chicken Burger',
            description: 'fresh chicken and other ingredients that will make you remember it',
            price: ['$12'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/hamburger-types/hamburger1.jpeg',
        },

        {
            name: 'Double Beefburger',
            description: 'the best beef in town, sliced tomatoes, onion, cheese and fresh salad',
            price: ['$15'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/hamburger-types/hamburger2.jpeg',
        },

        {
            name: 'Double Cheeseburger',
            description: `it's a double cheese, you'll love it no matter what's inside, right?`,
            price: ['$14'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/hamburger-types/hamburger3.jpeg',
        },

        {
            name: 'Chicago Special Burger',
            description: `we would love to tell you more about this one, but then we would have to simply call it "Chicago Burger"`,
            price: ['$17'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/hamburger-types/hamburger4.jpeg',
        },
    ];

    burgerTypes.forEach((burgerType) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemPicContainer = document.createElement('div');
        itemPicContainer.classList.add('item-pic');

        const itemPic = document.createElement('img');
        itemPic.setAttribute('src', burgerType.imageSrc);
        itemPic.setAttribute('alt', 'burger');
        itemPic.setAttribute('height', '150px');

        const itemText = document.createElement('div');
        itemText.classList.add('item-text');

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.innerText = burgerType.name;

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDescription.innerText = burgerType.description;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.innerText = burgerType.price;

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