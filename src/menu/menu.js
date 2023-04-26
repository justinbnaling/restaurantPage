const menu = () => {
    const container = document.createElement('div');
    container.classList.add("contact")

    const article = document.createElement("div")
    article.classList.add("articleContainer");
    article.textContent = "this is the menu "

    container.appendChild(article)

    return container
}

export {
    menu,
  };
