import {header} from './header/header';
import {mainPage} from './mainPage';


function writeToPage(component) {
    const content = document.querySelector("#content");
    content.appendChild(component())
}

writeToPage(header)
writeToPage(mainPage);





