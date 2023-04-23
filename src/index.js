// Now remove those elements from the HTML (so leave only the <html>,
//  <body>, and <div id="content"> tags) and instead create them by using JavaScript only, e.g. 
// by appending each new element to div#content once the page is first loaded. 
// Since we’re all set up to write our code in multiple files, let’s write this initial 
// page-load function inside of its own module and then import and call it inside of index.js.

// const logo = document.createElement('div');
// logo.innerText = "HuskyLand Restaurant"
// logo.style.fontSize = "xx-large";
// logo.style.fontWeight = "bold";
// document.querySelector("#content").appendChild(logo)

// const img = document.createElement('img');
// img.src = "/Users/localadmin/repos/restaurantPage/images/husky-g9a4080289_1280.png"
// img.height = "200"
// img.width = "200"
// document.querySelector("#content").appendChild(img)

// const element = document.createElement('div');
// element.innerText = "Open for Business"
// element.style.fontSize = "x-large";       
// element.style.fontWeight = "bold";
// document.querySelector("#content").appendChild(element)

// const element2 = document.createElement('div');
// element2.innerText = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
// element2.style.fontSize = "medium";
// element2.style.fontWeight = "normal";
// document.querySelector("#content").appendChild(element2)

// import heading from './mainPage'
import {heading, articleHeading, image, article} from './mainPage';


function writeToPage(component) {
    const element = document.createElement('div');
    element.textContent = component;
    return element;    
}

function drawToPage(component){
    const element = document.createElement('img');
    element.src = component;
    return element;    
}

const content = document.querySelector("#content");

content.appendChild(writeToPage(heading()))
content.appendChild(writeToPage(articleHeading()))
content.appendChild(writeToPage(article()))
// content.appendChild(drawToPage(image()))



