// Declare Global Variables
let navBar = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
let navbarColor = document.querySelector(".navbar__menu");


//End of Global Variables

//create a function to add a dynamic navbar and add smooth scrolling to each section of the page.

function dynamicNavBar() {
    sections.forEach((section) => {
        let sectionID = section.id;
        let listItem = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.href = "#" + sectionID;
        anchor.textContent = `${sectionID}`;
        anchor.classList.add("menu__link");
        listItem.appendChild(anchor);
        navBar.appendChild(listItem);
        listItem.addEventListener("click", (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}
dynamicNavBar();

//End of Function

// Add event listener to add active class while scrolling through the section and removing active class while scrolling out of the section. Used a method called  getBoundingClientRect() to get the top position of the section. Based on the actual position of the section in comparision to the viewport,we either add or remove the active class.

window.addEventListener("scroll", (e) => {
    sections.forEach((section) => {
        const sectionDimension = section.getBoundingClientRect().top;
        if (sectionDimension >= 0 && sectionDimension <= 100) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
});

// function to add a responsive navbar toggle button to the navbar when the screen is less than 610px. When the screen is less than 610px, the navbar will be hidden and the toggle button will be displayed.
function humburgerMenu() {
    navBar.classList.toggle("menu");
}

// Add a simple color change to the navbar when scrolling down the page. This is done by using the onscroll event listener and the window.scrollY property. If the window.scrollY is greater than 200px, the navbar will change to a light color.this is an optional feature.

window.onscroll = () => {
    if (window.scrollY > 200) {
        navbarColor.classList.add("nav-active");
    } else {
        navbarColor.classList.remove("nav-active");
    }
};
// Add a function to highlight the navbar link when the user scrolls to the section.
function activeStateNav() {
    let scroll = window.pageYOffset;
    sections.forEach(section => {

        let sectionID = section.getAttribute("id");
        if (scroll > section.offsetTop - 50 && scroll <= section.offsetTop - 50 + section.offsetHeight) {
            navbarColor.querySelector(`a[href*=${sectionID}]`).classList.add("active");
        } else {
            navbarColor.querySelector(`a[href*=${sectionID}]`).classList.remove("active");
        };
    });
};

window.addEventListener('scroll', activeStateNav);