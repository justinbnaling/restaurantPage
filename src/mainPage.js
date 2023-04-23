const mainPage = () => {
    const container = document.createElement('div');
    
    const heading = document.createElement('div');
    heading.textContent = "HuskyLand Restaurant";

    const articleHeading = document.createElement('div');
    articleHeading.textContent = "Open for Business";

    const article = document.createElement('div');
    article.textContent = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
    
    container.appendChild(heading)
    container.appendChild(articleHeading)
    container.appendChild(article)

    return container
}

const image = () => {
    return "/Users/localadmin/repos/restaurantPage/images/husky-g9a4080289_1280.png"
}

export {
    image,
    mainPage,
  };


