export function renderBurgersDisplay() {

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
    itemPicOne.setAttribute('src', '../src/hamburger-types/hamburger1.jpeg');
    itemPicOne.setAttribute('alt', 'hamburger');
    itemPicOne.setAttribute('height', '150px');
    
    const itemTextOne = document.createElement('div');
    itemTextOne.classList.add('item-text');
    
    const itemNameOne = document.createElement('div');
    itemNameOne.classList.add('item-name');
    itemNameOne.innerText = 'Chicken Burger';
    
    const itemDescriptionOne = document.createElement('div');
    itemDescriptionOne.classList.add('item-description');
    itemDescriptionOne.innerText = 'Delicious lorem ipsum tasty yummy and whatever you like.';
    
    const itemPriceOne = document.createElement('div');
    itemPriceOne.classList.add('item-price');
    itemPriceOne.innerText = '$15 / $24';
    
    //2nd item
    
    const itemTwo = document.createElement('div');
    itemTwo.classList.add('item');
    
    const itemPicTwoContainer = document.createElement('div');
    itemPicTwoContainer.classList.add('item-pic');
    
    const itemPicTwo = document.createElement('img');
    itemPicTwo.setAttribute('src', '../src/hamburger-types/hamburger2.jpeg');
    itemPicTwo.setAttribute('alt', 'hamburger');
    itemPicTwo.setAttribute('height', '150px');
    
    const itemTextTwo = document.createElement('div');
    itemTextTwo.classList.add('item-text');
    
    const itemNameTwo = document.createElement('div');
    itemNameTwo.classList.add('item-name');
    itemNameTwo.innerText = 'Double Beefburger';
    
    const itemDescriptionTwo = document.createElement('div');
    itemDescriptionTwo.classList.add('item-description');
    itemDescriptionTwo.innerText = 'Delicious lorem ipsum tasty yummy and whatever you like.';
    
    const itemPriceTwo = document.createElement('div');
    itemPriceTwo.classList.add('item-price');
    itemPriceTwo.innerText = '$17 / $26';
    
    //3rd item
    
    const itemThree = document.createElement('div');
    itemThree.classList.add('item');
    
    const itemPicThreeContainer = document.createElement('div');
    itemPicThreeContainer.classList.add('item-pic');
    
    const itemPicThree = document.createElement('img');
    itemPicThree.setAttribute('src', '../src/hamburger-types/hamburger3.jpeg');
    itemPicThree.setAttribute('alt', 'hamburger');
    itemPicThree.setAttribute('height', '150px');
    
    const itemTextThree = document.createElement('div');
    itemTextThree.classList.add('item-text');
    
    const itemNameThree = document.createElement('div');
    itemNameThree.classList.add('item-name');
    itemNameThree.innerText = 'Double Cheeseburger';
    
    const itemDescriptionThree = document.createElement('div');
    itemDescriptionThree.classList.add('item-description');
    itemDescriptionThree.innerText = 'Delicious lorem ipsum tasty yummy and whatever you like.';
    
    const itemPriceThree = document.createElement('div');
    itemPriceThree.classList.add('item-price');
    itemPriceThree.innerText = '$19 / $32';
    
    //4th item
    
    const itemFour = document.createElement('div');
    itemFour.classList.add('item');
    
    const itemPicFourContainer = document.createElement('div');
    itemPicFourContainer.classList.add('item-pic');
    
    const itemPicFour = document.createElement('img');
    itemPicFour.setAttribute('src', '../src/hamburger-types/hamburger4.jpeg');
    itemPicFour.setAttribute('alt', 'hamburger');
    itemPicFour.setAttribute('height', '150px');
    
    const itemTextFour = document.createElement('div');
    itemTextFour.classList.add('item-text');
    
    const itemNameFour = document.createElement('div');
    itemNameFour.classList.add('item-name');
    itemNameFour.innerText = 'Chicago Special Burger';
    
    const itemDescriptionFour = document.createElement('div');
    itemDescriptionFour.classList.add('item-description');
    itemDescriptionFour.innerText = 'Delicious lorem ipsum tasty yummy and whatever you like.';
    
    const itemPriceFour = document.createElement('div');
    itemPriceFour.classList.add('item-price');
    itemPriceFour.innerText = '$17 / $25';


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

    stuff.appendChild(itemOne);
    stuff.appendChild(itemTwo);
    stuff.appendChild(itemThree);
    stuff.appendChild(itemFour);


    display.appendChild(stuff);

    return display;
    }