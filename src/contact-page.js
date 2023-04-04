// function to fill content on contact-page

function createContent () {
    let content = document.querySelector("#content");
    content.style.justifyContent = "center";
    
    let msg = document.createElement("div");
    msg.textContent = "Get in touch!";
    content.appendChild(msg);

    let address = document.createElement("div");
    address.textContent = "Privet Drive 3, \n" + 
                            "10113 London, UK."
    content.appendChild(address);

    let phone = document.createElement("div");
    phone.textContent = "+44 007 123456";
    content.appendChild(phone);
}

export {createContent};