//Selectors
const tabNavigations = Array.from(document.querySelectorAll('.tab-navigation'));
const tabContents = Array.from(document.querySelectorAll('.tab-content'));
//Functions

const clearActive = () => {
    tabNavigations.forEach(tabNavigation => {
        tabNavigation.classList.remove('active');
    });
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    });
}

//Events
tabNavigations.forEach(tabNavigation => {
    tabNavigation.onclick = function() {
        clearActive();
        const targetId = tabNavigation.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        tabNavigation.classList.add('active');
        targetContent.classList.add('active');
    }
})

//Selectors Dropdowns
const firstDrop = document.querySelector('.menu-item-drop');
const secondDrop = document.querySelector('.menu-item-drop2');
const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownIcon2 = document.querySelector('.dropdown-icon2');

const dropdownDiv = document.querySelector('.dropdown-div');
const dropdownDiv2 = document.querySelector('.dropdown-div2');


firstDrop.onclick = function(e) {
    e.preventDefault();
    dropdownDiv.classList.toggle('active');
    dropdownIcon.classList.toggle('rotate');
}

secondDrop.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownDiv2.classList.toggle('active');
    dropdownIcon2.classList.toggle('rotate');


})

// Hamburger Events

const hamburgerItem = document.querySelector('.hamburger-item');
const hamburgerList = document.querySelector('.hamburger-list');
const hamburgerDropdown = document.querySelector('.hamburger-dropdown');

const hamburgerItem2 = document.querySelector('.hamburger-item2');
const hamburgerList2 = document.querySelector('.hamburger-list2');
const hamburgerDropdown2 = document.querySelector('.hamburger-dropdown2');





hamburgerItem.addEventListener('click', function(e) {
    e.preventDefault();
    hamburgerList.classList.toggle('active');
    hamburgerDropdown.classList.toggle('rotate');
})

hamburgerItem2.addEventListener('click', function(e) {
    e.preventDefault();
    hamburgerList2.classList.toggle('active');
    hamburgerDropdown2.classList.toggle('rotate');

})

//Sidebar Menu events


const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    hamburgerMenu.classList.toggle('active');
})