export function renderSidesDisplay() {

    const display = document.createElement('div');
    display.classList.add('display');

    const stuff = document.createElement('div');
    stuff.classList.add('stuff');

    const sideTypes = [
        {
            name: 'Onion Rings',
            description: 'simply delicious, nothing more to say here',
            price: ['$8'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/sides-types/onion-rings.jpg',
        },

        {
            name: 'Poutine',
            description: 'irresistible french fries and magnifique cheese curds topped with a brown gravy',
            price: ['$10'],
            imageSrc: 'https://raw.githubusercontent.com/cbd23/restaurant-page/main/src/sides-types/poutine.jpeg',
        },
    ];

    sideTypes.forEach((sideType) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemPicContainer = document.createElement('div');
        itemPicContainer.classList.add('item-pic');

        const itemPic = document.createElement('img');
        itemPic.setAttribute('src', sideType.imageSrc);
        itemPic.setAttribute('alt', 'side');
        itemPic.setAttribute('height', '150px');

        const itemText = document.createElement('div');
        itemText.classList.add('item-text');

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.innerText = sideType.name;

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDescription.innerText = sideType.description;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.innerText = sideType.price;

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