// fill content on landing page
import "./landing-page.css";
import Atithi from "../img/atithi.jpeg"

function createContent () {
    let content = document.querySelector("#content");
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.flexDirection = "column";
    
    let intro = document.createElement("div");
    intro.textContent = "Welcome to India - the land of delicious food, and amazing tastes. " +  
                        "We bring you home, to the much-missed odours, to the familiar warmth " + 
                        "of mom's cooking. Check out our menu or get in touch!" ;
    intro.style.fontFamily = "'Marck Script', cursive";
    intro.style.fontSize = "2rem";
    intro.style.width = "60%";
    content.appendChild(intro);

    let introImage = document.createElement("div");
    const myImg = new Image();
    myImg.src = Atithi;
    introImage.appendChild(myImg);
    content.appendChild(myImg);
}

export {createContent};