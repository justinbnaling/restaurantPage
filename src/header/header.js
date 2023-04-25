import './header.css'
import icon from '../images/icon.png'

const header = () => {
    const element = document.createElement('div');
    element.classList.add("header")

    const logo = document.createElement('div');
    logo.classList.add("logo")

    const title = document.createElement('div');
    title.textContent = "HuskyLand";
    title.classList.add("title")

    const myIcon = new Image();
    myIcon.src = icon;
    
    const title2 = document.createElement('div');
    title2.textContent = "Restaurant";
    title2.classList.add("title")
       
    logo.appendChild(title)
    logo.appendChild(myIcon)
    logo.appendChild(title2)
    element.appendChild(logo);
    
    /*
        NavBar Code
    */
    
    const navBar = document.createElement('div');
    navBar.classList.add("navBar")

    const home = document.createElement('div');
    home.textContent = "Home";
    home.classList.add("navButton")
    const menu = document.createElement('div');
    menu.textContent = "Menu";
    menu.classList.add("navButton")
    const content = document.createElement('div');
    content.textContent = "Content"
    content.classList.add("navButton");

    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(content)
    element.appendChild(navBar)

    return element
}

export {
    header,
}