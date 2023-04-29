import './contact.css'

const contact = () => {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";

    const formContainer = document.createElement('div');
    formContainer.classList.add("formContainer")

    const contactForm = document.createElement('form');
    contactForm.method = "post"

    const labelFullName = document.createElement('label');
    labelFullName.textContent = "Full Name";
    labelFullName.htmlFor = "fullName";

    const inputFullName = document.createElement('input');
    inputFullName.type = "text";
    inputFullName.name = "fullName";
    inputFullName.id = "fullName"
    inputFullName.required = ""

    const labelEmail = document.createElement('label');
    labelEmail.textContent = "Email";
    labelEmail.htmlFor = "email";

    const inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "email"
    inputEmail.required = ""

    const labelMessage = document.createElement('label');
    labelMessage.textContent = "Message";
    labelMessage.htmlFor = "message";

    const inputMessage = document.createElement('textArea');
    inputMessage.name = "message";
    inputMessage.id = "email"
    inputMessage.required = ""
    inputMessage.cols = "20"
    inputMessage.rows = "10"

    
    contactForm.appendChild(labelFullName)
    contactForm.appendChild(inputFullName)
    contactForm.appendChild(labelEmail)
    contactForm.appendChild(inputEmail)
    contactForm.appendChild(labelMessage)
    contactForm.appendChild(inputMessage)

    formContainer.appendChild(contactForm)


    container.appendChild(heading)
    container.appendChild(formContainer)
    container.appendChild(formContainer)

    return container
}

export {
    contact,
  };
