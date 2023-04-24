const mainPage = () => {
    const container = document.createElement('div');
    
    const articleHeading = document.createElement('div');
    articleHeading.textContent = "Open for Business";

    const article = document.createElement('div');
    article.textContent = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
    
    container.appendChild(articleHeading)
    container.appendChild(article)

    return container
}

export {
    mainPage,
  };


