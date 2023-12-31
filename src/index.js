import './style.css';

import { renderPizzaDisplay } from '../src/display-modules/pizza';
import { renderBurgersDisplay } from '../src/display-modules/burgers';
import { renderSidesDisplay } from '../src/display-modules/sides';

const content = document.getElementById('content');


// HEADER section
const header = document.createElement('div');
header.classList.add('header');

const headerLeftside = document.createElement('div');
headerLeftside.classList.add('header-leftside');

const logo = document.createElement('div');
logo.classList.add('logo');

const logoImg = document.createElement('img');
logoImg.src = 'https://github.com/cbd23/restaurant-page/blob/main/src/logo.png?raw=true';
logoImg.setAttribute('height', '80px');

const headerRightside = document.createElement('div');
headerRightside.classList.add('header-rightside');

const about = document.createElement('div');
about.classList.add('about');
about.innerText = 'ABOUT US';

const book = document.createElement('div');
book.classList.add('book');
book.innerText = 'BOOK A TABLE';

const gallery = document.createElement('div');
gallery.classList.add('gallery');
gallery.innerText = 'GALLERY';

const contact = document.createElement('div');
contact.classList.add('contact');
contact.innerText = 'CONTACT';


// Append elements from the HEADER section

logo.appendChild(logoImg);
headerLeftside.appendChild(logo);

headerRightside.appendChild(about);
headerRightside.appendChild(book);
headerRightside.appendChild(gallery);
headerRightside.appendChild(contact);

header.appendChild(headerLeftside);
header.appendChild(headerRightside);

// Append the HEADER section to div#content
content.appendChild(header);


// TABS section
const tabs = document.createElement('div');
tabs.classList.add('tabs');

const tabPlaceholderOne = document.createElement('div');
tabPlaceholderOne.classList.add('tab-placeholder');

const tabPlaceholderTwo = document.createElement('div');
tabPlaceholderTwo.classList.add('tab-placeholder');

const tabOptionOne = document.createElement('div');
tabOptionOne.classList.add('tab-option');

const tabIconOne = document.createElement('div');
tabIconOne.classList.add('tab-icon');

const svgOne = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgOne.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgOne.setAttribute('viewBox', '0 0 48 48');
svgOne.setAttribute('class', 'injected-svg');
svgOne.setAttribute('data-src', 'https://static.elfsight.com/icons/app-restaurant-menu-pizza-1.svg');
svgOne.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
svgOne.setAttribute('fill', 'white');
svgOne.setAttribute('height', '30px');
svgOne.innerHTML = '<path d="M42.834 8.752C37.804 3.72 31.114.95 24 .95c-7.115 0-13.803 2.771-18.834 7.802a1.535 1.535 0 0 0-.289 1.769l17.75 35.678a1.535 1.535 0 0 0 2.747 0l17.75-35.678a1.535 1.535 0 0 0-.29-1.77zM24 4.019c5.928 0 11.522 2.175 15.872 6.146l-1.188 2.387C34.63 8.952 29.467 6.984 24 6.984a21.988 21.988 0 0 0-14.684 5.568l-1.188-2.387C12.478 6.194 18.072 4.019 24 4.019zm-8.97 19.795a1.536 1.536 0 0 0-.128-.032l-2.198-4.42a3.503 3.503 0 0 1 1.702-2.039 3.507 3.507 0 0 1 2.69-.259 3.505 3.505 0 0 1 2.083 1.718 3.51 3.51 0 0 1 .258 2.69 3.505 3.505 0 0 1-1.717 2.083 3.507 3.507 0 0 1-2.69.26zM24 42.07l-7.485-15.046a6.58 6.58 0 0 0 2.645-.759 6.553 6.553 0 0 0 3.212-3.896 6.556 6.556 0 0 0-.483-5.028 6.554 6.554 0 0 0-3.897-3.212 6.557 6.557 0 0 0-5.027.484 6.59 6.59 0 0 0-1.881 1.493l-.344-.691A18.953 18.953 0 0 1 24 10.054c4.988 0 9.684 1.902 13.26 5.36l-4.966 9.983a5.968 5.968 0 0 0-5.129-2.924 5.972 5.972 0 0 0-5.965 5.965 5.972 5.972 0 0 0 6.633 5.927L24 42.07zm3.165-10.735a2.9 2.9 0 0 1-2.896-2.897 2.9 2.9 0 0 1 2.896-2.896 2.9 2.9 0 0 1 2.897 2.896 2.9 2.9 0 0 1-2.897 2.897z"></path><path d="M30.511 18.762a1.53 1.53 0 0 0 2.17 0c.6-.6.6-1.57 0-2.17L30.15 14.06a1.535 1.535 0 0 0-2.17 2.17l2.532 2.532z"></path>';

const tabTextOne = document.createElement('div');
tabTextOne.classList.add('tab-text');
tabTextOne.innerText = 'PIZZA';

const tabOptionTwo = document.createElement('div');
tabOptionTwo.classList.add('tab-option');

const tabIconTwo = document.createElement('div');
tabIconTwo.classList.add('tab-icon');

const svgTwo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgTwo.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgTwo.setAttribute('viewBox', '0 0 48 48');
svgTwo.setAttribute('class', 'injected-svg');
svgTwo.setAttribute('data-src', 'https://static.elfsight.com/icons/app-restaurant-menu-hamburger.svg');
svgTwo.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
svgTwo.setAttribute('fill', 'white');
svgTwo.setAttribute('height', '30px');
svgTwo.innerHTML = '<path d="M24 7.43c8.076 0 15.637 3.858 20.225 10.32.374.527.369 1.208.04 1.72 1.637.653 2.785 2.148 2.785 3.884 0 1.022-.398 1.96-1.058 2.692.66.732 1.058 1.671 1.058 2.693 0 1.512-.871 2.841-2.177 3.59l-.19.103v2.725a5.417 5.417 0 0 1-5.19 5.409l-.217.004H8.724a5.416 5.416 0 0 1-5.403-5.195l-.004-.218v-2.725C1.907 31.706.95 30.323.95 28.739c0-1.022.398-1.96 1.058-2.693-.66-.732-1.058-1.67-1.058-2.692 0-1.736 1.148-3.231 2.784-3.883a1.539 1.539 0 0 1 .041-1.72C8.362 11.287 15.923 7.43 24 7.43zM12.318 32.97H6.396v2.186c0 1.234.96 2.246 2.169 2.328l.159.006h30.552c1.23 0 2.24-.961 2.322-2.174l.006-.16V32.97H20.609l-3.057 3.056a1.536 1.536 0 0 1-2.06.106l-.117-.106-3.057-3.056zm9.32-5.385h-10.35l5.175 5.175 5.176-5.175zm20.792 0H25.994l-2.306 2.306H42.43c.82 0 1.54-.54 1.54-1.153 0-.578-.637-1.09-1.396-1.148l-.144-.005zm-35.497 0H5.57c-.82 0-1.54.539-1.54 1.153 0 .578.637 1.089 1.396 1.147l.144.006h3.669l-2.306-2.306zM42.43 22.2H5.57c-.82 0-1.54.539-1.54 1.153 0 .578.637 1.089 1.396 1.147l.144.006h36.86c.82 0 1.54-.539 1.54-1.153 0-.578-.637-1.09-1.396-1.147l-.144-.006zM24 10.509c-6.766 0-13.112 3.081-17.162 8.285l-.25.328h34.824C37.376 13.72 30.907 10.509 24 10.509zm0 4.22c.304 0 .602.123.817.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.163 1.163 0 0 1-.817.339c-.304 0-.601-.123-.817-.339a1.163 1.163 0 0 1-.338-.816c0-.305.123-.602.338-.818.216-.214.513-.337.817-.337zm-10.178 0c.305 0 .602.123.818.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.162 1.162 0 0 1-.818.339c-.303 0-.6-.123-.816-.339a1.163 1.163 0 0 1-.34-.816c0-.305.124-.602.34-.818.215-.214.513-.337.816-.337zm20.355 0c.304 0 .602.123.818.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.163 1.163 0 0 1-.818.339 1.159 1.159 0 0 1-1.155-1.155 1.16 1.16 0 0 1 1.155-1.155zm-13.57-3.517c.305 0 .603.123.817.337.215.216.338.513.338.818a1.161 1.161 0 0 1-1.154 1.155 1.156 1.156 0 0 1-.817-1.973c.215-.214.512-.337.817-.337zm6.785 0c.304 0 .602.123.817.337.214.216.34.513.34.818a1.163 1.163 0 0 1-1.157 1.155c-.304 0-.601-.123-.816-.339a1.162 1.162 0 0 1-.34-.816c0-.305.124-.602.34-.818.215-.214.512-.337.816-.337z"></path>';

const tabTextTwo = document.createElement('div');
tabTextTwo.classList.add('tab-text');
tabTextTwo.innerText = 'BURGERS';

const tabOptionThree = document.createElement('div');
tabOptionThree.classList.add('tab-option');

const tabIconThree = document.createElement('div');
tabIconThree.classList.add('tab-icon');

const svgThree = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgThree.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgThree.setAttribute('viewBox', '0 0 48 48');
svgThree.setAttribute('class', 'injected-svg');
svgThree.setAttribute('data-src', 'https://static.elfsight.com/icons/app-restaurant-menu-french-fries.svg');
svgThree.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
svgThree.setAttribute('fill', 'white');
svgThree.setAttribute('height', '30px');
svgThree.innerHTML = '<path d="M43.225 4.828a1.56 1.56 0 0 0-.971-.694l-3.967-.92.026-1.145A1.561 1.561 0 0 0 36.788.474L31.641.358h-.036a1.56 1.56 0 0 0-1.559 1.524l-.081 3.597-.367-.106a1.556 1.556 0 0 0-.85-.002l.08-3.512A1.56 1.56 0 0 0 27.303.264L22.156.147a1.557 1.557 0 0 0-1.595 1.526l-.29 12.814-.5-7.322a1.56 1.56 0 0 0-1.663-1.45l-2.963.203V4.492a1.56 1.56 0 0 0-1.56-1.56H8.437a1.56 1.56 0 0 0-1.56 1.56v11.02h-.779a1.56 1.56 0 0 0-1.541 1.802L9.003 45.71a1.56 1.56 0 0 0 1.541 1.319H37.22a1.56 1.56 0 0 0 1.542-1.319l4.446-28.397a1.561 1.561 0 0 0-1.542-1.802h-.448l2.204-9.506a1.559 1.559 0 0 0-.196-1.178zm-8.488 2.026-1.671-.482.064-2.86 2.028.046-.42 3.296zm-4.422 1.973 3.468.999-2.175 9.382a13.706 13.706 0 0 1-4.135 1.876l2.842-12.257zm-7.081 12.718.411-18.242 2.028.046-.292 12.943-1.218 5.253h-.93zm-6.47-12.61.759 11.082a13.747 13.747 0 0 1-2.126-1.356l-.656-9.588 2.023-.138zm-4.74 6.577H9.998v-9.46h2.028v.421a1.56 1.56 0 0 0-.504 1.257l.504 7.782zm23.86 28.398H11.88L7.922 18.633h2.966a16.882 16.882 0 0 0 12.994 6.037 16.88 16.88 0 0 0 12.993-6.037h2.967L35.885 43.91zm.046-28.398 2.124-9.148 1.975.457-2.015 8.691H35.93z"></path>';

const tabTextThree = document.createElement('div');
tabTextThree.classList.add('tab-text');
tabTextThree.innerText = 'SNACKS & SIDES';

const tabOptionFour = document.createElement('div');
tabOptionFour.classList.add('tab-option');

const tabIconFour = document.createElement('div');
tabIconFour.classList.add('tab-icon');

const svgFour = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgFour.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgFour.setAttribute('viewBox', '0 0 48 48');
svgFour.setAttribute('class', 'injected-svg');
svgFour.setAttribute('data-src', 'https://static.elfsight.com/icons/app-restaurant-menu-water.svg');
svgFour.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
svgFour.setAttribute('fill', 'white');
svgFour.setAttribute('height', '30px');
svgFour.innerHTML = '<path d="M39.963 9.552a1.624 1.624 0 0 0-1.233-.566H22.068l-.466-6.528A1.623 1.623 0 0 0 19.982.95H9.27a1.623 1.623 0 0 0 0 3.247h9.201l.342 4.789h-6.865a1.623 1.623 0 0 0-1.605 1.87L15.7 45.672a1.623 1.623 0 0 0 1.604 1.376h16.07c.801 0 1.483-.584 1.604-1.376l5.357-34.818a1.624 1.624 0 0 0-.372-1.303zm-3.124 2.68-1.973 12.823h-11.65L22.3 12.232h14.539zm-17.794 0 .916 12.823h-4.148L13.84 12.232h5.205zm12.937 31.571H18.697l-2.385-15.501h3.881l.849 11.883a1.623 1.623 0 1 0 3.238-.23l-.832-11.653h10.919l-2.385 15.501z"></path>';

const tabTextFour = document.createElement('div');
tabTextFour.classList.add('tab-text');
tabTextFour.innerText = 'DRINKS';

// Appending elements from the TABS section

tabIconOne.appendChild(svgOne);
tabOptionOne.appendChild(tabIconOne);
tabOptionOne.appendChild(tabTextOne);

tabIconTwo.appendChild(svgTwo);
tabOptionTwo.appendChild(tabIconTwo);
tabOptionTwo.appendChild(tabTextTwo);

tabIconThree.appendChild(svgThree);
tabOptionThree.appendChild(tabIconThree);
tabOptionThree.appendChild(tabTextThree);

tabIconFour.appendChild(svgFour);
tabOptionFour.appendChild(tabIconFour);
tabOptionFour.appendChild(tabTextFour);

tabs.appendChild(tabPlaceholderOne);
tabs.appendChild(tabOptionOne);
tabs.appendChild(tabOptionTwo);
tabs.appendChild(tabOptionThree);
tabs.appendChild(tabOptionFour);
tabs.appendChild(tabPlaceholderTwo);

// Appending the TABS section to content#div

content.appendChild(tabs);


// DISPLAY section

let pizzaTab = renderPizzaDisplay();
let burgersTab = renderBurgersDisplay();
let sidesTab = renderSidesDisplay();

// is the one that's currently appended
let activeTab;

// is the first thing we remove on click
let formerTab;

formerTab = pizzaTab;

content.appendChild(pizzaTab);

tabOptionOne.addEventListener('pointerdown', () => {
    content.removeChild(formerTab);

    activeTab = pizzaTab;
    content.appendChild(activeTab);

    formerTab = pizzaTab;
});

tabOptionTwo.addEventListener('pointerdown', () => {
    content.removeChild(formerTab);

    activeTab = burgersTab;
    content.appendChild(activeTab);

    formerTab = burgersTab;
});

tabOptionThree.addEventListener('pointerdown', () => {
    content.removeChild(formerTab);

    activeTab = sidesTab;
    content.appendChild(activeTab);

    formerTab = sidesTab;
});