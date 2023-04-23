const header = () => {
    const element = document.createElement('div');
    element.classList.add("header")

    const title = document.createElement('div');
    title.textContent = "HuskLand Restaurant";

    const navBar = document.createElement('div');
    navBar.classList.add("navBar")

    const home = document.createElement('div');
    home.textContent = "Home";
    const menu = document.createElement('div');
    menu.textContent = "Menu";
    const content = document.createElement('div');
    content.textContent = "Content";

    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(content)

    
    element.appendChild(title);
    element.appendChild(navBar)

    return element
}

export {
    header,
}