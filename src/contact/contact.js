const contact = () => {
    const container = document.createElement('div');
    container.classList.add("contact")

    const article = document.createElement("div")
    article.classList.add("articleContainer");
    article.textContent = "this is the contact page "

    container.appendChild(article)

    return container
}

export {
    contact,
  };
