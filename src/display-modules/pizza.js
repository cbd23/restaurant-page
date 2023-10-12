export function renderPizzaDisplay() {

const display = document.createElement('div');
display.classList.add('display');

const stuff = document.createElement('div');
stuff.classList.add('stuff');

//1st item

const itemOne = document.createElement('div');
itemOne.classList.add('item');

const itemPicOneContainer = document.createElement('div');
itemPicOneContainer.classList.add('item-pic');

const itemPicOne = document.createElement('img');
itemPicOne.setAttribute('src', '../src/pizza-types/pizza1.jpeg');
itemPicOne.setAttribute('alt', 'pizza');
itemPicOne.setAttribute('height', '150px');

const itemTextOne = document.createElement('div');
itemTextOne.classList.add('item-text');

const itemNameOne = document.createElement('div');
itemNameOne.classList.add('item-name');
itemNameOne.innerText = 'La Rossa';

const itemDescriptionOne = document.createElement('div');
itemDescriptionOne.classList.add('item-description');
itemDescriptionOne.innerText = 'tomato sauce, garlic, basil (no cheese)';

const itemPriceOne = document.createElement('div');
itemPriceOne.classList.add('item-price');
itemPriceOne.innerText = '$15 / $24';

//2nd item

const itemTwo = document.createElement('div');
itemTwo.classList.add('item');

const itemPicTwoContainer = document.createElement('div');
itemPicTwoContainer.classList.add('item-pic');

const itemPicTwo = document.createElement('img');
itemPicTwo.setAttribute('src', '../src/pizza-types/pizza2.jpeg');
itemPicTwo.setAttribute('alt', 'pizza');
itemPicTwo.setAttribute('height', '150px');

const itemTextTwo = document.createElement('div');
itemTextTwo.classList.add('item-text');

const itemNameTwo = document.createElement('div');
itemNameTwo.classList.add('item-name');
itemNameTwo.innerText = 'Margherita';

const itemDescriptionTwo = document.createElement('div');
itemDescriptionTwo.classList.add('item-description');
itemDescriptionTwo.innerText = 'tomato sauce, fresh mozzarella, basil, sea salt, California extra virgin olive oil';

const itemPriceTwo = document.createElement('div');
itemPriceTwo.classList.add('item-price');
itemPriceTwo.innerText = '$17 / $26';

//3rd item

const itemThree = document.createElement('div');
itemThree.classList.add('item');

const itemPicThreeContainer = document.createElement('div');
itemPicThreeContainer.classList.add('item-pic');

const itemPicThree = document.createElement('img');
itemPicThree.setAttribute('src', '../src/pizza-types/pizza3.jpeg');
itemPicThree.setAttribute('alt', 'pizza');
itemPicThree.setAttribute('height', '150px');

const itemTextThree = document.createElement('div');
itemTextThree.classList.add('item-text');

const itemNameThree = document.createElement('div');
itemNameThree.classList.add('item-name');
itemNameThree.innerText = 'Pepperoni';

const itemDescriptionThree = document.createElement('div');
itemDescriptionThree.classList.add('item-description');
itemDescriptionThree.innerText = 'tomato sauce, burrata, garlic, basil';

const itemPriceThree = document.createElement('div');
itemPriceThree.classList.add('item-price');
itemPriceThree.innerText = '$19 / $32';

//4th item

const itemFour = document.createElement('div');
itemFour.classList.add('item');

const itemPicFourContainer = document.createElement('div');
itemPicFourContainer.classList.add('item-pic');

const itemPicFour = document.createElement('img');
itemPicFour.setAttribute('src', '../src/pizza-types/pizza4.jpeg');
itemPicFour.setAttribute('alt', 'pizza');
itemPicFour.setAttribute('height', '150px');

const itemTextFour = document.createElement('div');
itemTextFour.classList.add('item-text');

const itemNameFour = document.createElement('div');
itemNameFour.classList.add('item-name');
itemNameFour.innerText = 'Bosco';

const itemDescriptionFour = document.createElement('div');
itemDescriptionFour.classList.add('item-description');
itemDescriptionFour.innerText = 'tomato sauce, fresh mozzarella, cremini mushrooms, fontina';

const itemPriceFour = document.createElement('div');
itemPriceFour.classList.add('item-price');
itemPriceFour.innerText = '$17 / $25';

//5th item

const itemFive = document.createElement('div');
itemFive.classList.add('item');

const itemPicFiveContainer = document.createElement('div');
itemPicFiveContainer.classList.add('item-pic');

const itemPicFive = document.createElement('img');
itemPicFive.setAttribute('src', '../src/pizza-types/pizza5.jpeg');
itemPicFive.setAttribute('alt', 'pizza');
itemPicFive.setAttribute('height', '150px');

const itemTextFive = document.createElement('div');
itemTextFive.classList.add('item-text');

const itemNameFive = document.createElement('div');
itemNameFive.classList.add('item-name');
itemNameFive.innerText = 'Burrata';

const itemDescriptionFive = document.createElement('div');
itemDescriptionFive.classList.add('item-description');
itemDescriptionFive.innerText = 'tomato sauce, burrata, garlic, basil';

const itemPriceFive = document.createElement('div');
itemPriceFive.classList.add('item-price');
itemPriceFive.innerText = '$18 / $28';

//6th item

const itemSix = document.createElement('div');
itemSix.classList.add('item');

const itemPicSixContainer = document.createElement('div');
itemPicSixContainer.classList.add('item-pic');

const itemPicSix = document.createElement('img');
itemPicSix.setAttribute('src', '../src/pizza-types/pizza6.jpeg');
itemPicSix.setAttribute('alt', 'pizza');
itemPicSix.setAttribute('height', '150px');

const itemTextSix = document.createElement('div');
itemTextSix.classList.add('item-text');

const itemNameSix = document.createElement('div');
itemNameSix.classList.add('item-name');
itemNameSix.innerText = 'Jersey Margherita';

const itemDescriptionSix = document.createElement('div');
itemDescriptionSix.classList.add('item-description');
itemDescriptionSix.innerText = 'crushed NJ tomatoes, Jersey Girl mozzarella, basil';

const itemPriceSix = document.createElement('div');
itemPriceSix.classList.add('item-price');
itemPriceSix.innerText = '$19 / $30';

// Appending elements from the DISPLAY section

itemPicOneContainer.appendChild(itemPicOne);

itemTextOne.appendChild(itemNameOne);
itemTextOne.appendChild(itemDescriptionOne);

itemOne.appendChild(itemPicOneContainer);
itemOne.appendChild(itemTextOne);
itemOne.appendChild(itemPriceOne);


itemPicTwoContainer.appendChild(itemPicTwo);

itemTextTwo.appendChild(itemNameTwo);
itemTextTwo.appendChild(itemDescriptionTwo);

itemTwo.appendChild(itemPicTwoContainer);
itemTwo.appendChild(itemTextTwo);
itemTwo.appendChild(itemPriceTwo);


itemPicThreeContainer.appendChild(itemPicThree);

itemTextThree.appendChild(itemNameThree);
itemTextThree.appendChild(itemDescriptionThree);

itemThree.appendChild(itemPicThreeContainer);
itemThree.appendChild(itemTextThree);
itemThree.appendChild(itemPriceThree);


itemPicFourContainer.appendChild(itemPicFour);

itemTextFour.appendChild(itemNameFour);
itemTextFour.appendChild(itemDescriptionFour);

itemFour.appendChild(itemPicFourContainer);
itemFour.appendChild(itemTextFour);
itemFour.appendChild(itemPriceFour);


itemPicFiveContainer.appendChild(itemPicFive);

itemTextFive.appendChild(itemNameFive);
itemTextFive.appendChild(itemDescriptionFive);

itemFive.appendChild(itemPicFiveContainer);
itemFive.appendChild(itemTextFive);
itemFive.appendChild(itemPriceFive);


itemPicSixContainer.appendChild(itemPicSix);

itemTextSix.appendChild(itemNameSix);
itemTextSix.appendChild(itemDescriptionSix);

itemSix.appendChild(itemPicSixContainer);
itemSix.appendChild(itemTextSix);
itemSix.appendChild(itemPriceSix);


stuff.appendChild(itemOne);
stuff.appendChild(itemTwo);
stuff.appendChild(itemThree);
stuff.appendChild(itemFour);
stuff.appendChild(itemFive);
stuff.appendChild(itemSix);

display.appendChild(stuff);

return display;
}