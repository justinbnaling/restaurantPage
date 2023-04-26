import {header} from './header/header';
import {mainPage} from './mainPage';
import {contact} from './contact/contact';
import {menu} from './menu/menu';

const content = document.querySelector("#content");

function writeToPage(component) {
    content.appendChild(component())
}

function loadPage(event){
    content.innerHTML = ""
    writeToPage(header)

    console.log("loadPage")
    console.log(event.target.textContent)
    
    if (event.target.textContent == "Home"){
        writeToPage(mainPage)
    }
    if (event.target.textContent == "Menu"){
        writeToPage(menu)
    }
    if (event.target.textContent == "Contact"){
        writeToPage(contact)
    }

    const homeButton = document.querySelector(".navButton.home")
    homeButton.addEventListener("click", loadPage)

    const menuButton = document.querySelector(".navButton.menu")
    menuButton.addEventListener("click", loadPage)

    const contactButton = document.querySelector(".navButton.contact")
    contactButton.addEventListener("click", loadPage)
}



writeToPage(header)
writeToPage(mainPage)

const homeButton = document.querySelector(".navButton.home")
homeButton.addEventListener("click", loadPage)

const contactButton = document.querySelector(".navButton.contact")
contactButton.addEventListener("click", loadPage)



