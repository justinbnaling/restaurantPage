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
    
    if (event.target.textContent == "Home"){
        writeToPage(mainPage)
    }
    if (event.target.textContent == "Menu"){
        writeToPage(menu)
    }
    if (event.target.textContent == "Contact"){
        writeToPage(contact)
    }

    addEvents();
}

function addEvents(){
    const navButtons = document.querySelectorAll(".navButton");
    navButtons.forEach(button=>{
        button.addEventListener("click", loadPage)
    })
}

function initialLoad(){
    writeToPage(header)
    writeToPage(mainPage)
    addEvents();
}

initialLoad()

