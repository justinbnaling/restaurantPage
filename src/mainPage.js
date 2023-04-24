import './mainPage.css'
import articeImage from './images/articleImage.jpg'


const mainPage = () => {
    const container = document.createElement('div');
    container.classList.add("mainPage")
    
    const articleContainer = document.createElement("div")
    articleContainer.classList.add("articleContainer");

    const articleHeading = document.createElement('div');
    articleHeading.textContent = "Open for Business";
    articleHeading.classList.add("articleHeading");

    const article = document.createElement('div');
    article.textContent = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
    article.classList.add("articleBody");

    const articleHeading2 = document.createElement('div');
    articleHeading2.textContent = "A Howling Good Time!";
    articleHeading2.classList.add("articleHeading");

    const article2 = document.createElement('div');
    article2.textContent = "-A good dog that would not lie to you";
    article2.classList.add("articleBody");

    articleContainer.appendChild(articleHeading)
    articleContainer.appendChild(article)
    articleContainer.appendChild(articleHeading2)
    articleContainer.appendChild(article2)

    container.appendChild(articleContainer)

    const myArticleImage = new Image();
    myArticleImage.src = articeImage;

    container.appendChild(myArticleImage);

    return container
}

export {
    mainPage,
  };


