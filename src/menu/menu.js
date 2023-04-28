import './menu.css'
import coconut from '../images/coconut2.jpg'
import log from '../images/log2.jpg'
import watermelon from '../images/watermelon2.jpg'
import wood from '../images/wood2.jpg'


const menu = () => {
    const container = document.createElement('div');
    container.classList.add("container")

    const menu = document.createElement('div');
    menu.classList.add("menu")

    const imageContainer1 = document.createElement('div');
    const image1 = new Image();
    image1.src = coconut;
    imageContainer1.appendChild(image1)
    const price1 = document.createElement('div');
    price1.textContent = "Coconut $50"
    imageContainer1.appendChild(price1)


    const imageContainer2 = document.createElement('div');
    const image2 = new Image();
    image2.src = log;
    imageContainer2.appendChild(image2)
    const price2 = document.createElement('div');
    price2.textContent = "Log $45"
    imageContainer2.appendChild(price2)

    const imageContainer3 = document.createElement('div');
    const image3 = new Image();
    image3.src = watermelon;
    imageContainer3.appendChild(image3)
    const price3 = document.createElement('div');
    price3.textContent = "Watermelon $35"
    imageContainer3.appendChild(price3)


    const imageContainer4 = document.createElement('div');
    const image4 = new Image();
    image4.src = wood;
    imageContainer4.appendChild(image4)
    const price4 = document.createElement('div');
    price4.textContent = "Wood $20"
    imageContainer4.appendChild(price4)


    menu.appendChild(imageContainer1);
    menu.appendChild(imageContainer2);
    menu.appendChild(imageContainer3);
    menu.appendChild(imageContainer4);
    container.appendChild(menu)
    return container
}

export {
    menu,
  };
