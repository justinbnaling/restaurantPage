const header = () => {
    const element = document.createElement('div');
    element.classList.add("header")

    const logo = document.createElement('div');
    logo.classList.add("logo")

    const title = document.createElement('div');
    title.textContent = "HuskyLand";
    title.classList.add("title")

    const image = document.createElement('img');
    image.src = "../images/husky-g9a4080289_1280.png";
    
    const title2 = document.createElement('div');
    title2.textContent = "Restaurant";
    title2.classList.add("title")
       
    logo.appendChild(title)
    logo.appendChild(image)
    logo.appendChild(title2)
    element.appendChild(logo);
    
    /*
        NavBar Code
    */
    
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
    element.appendChild(navBar)

    return element
}

export {
    header,
}