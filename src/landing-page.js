// fill content on landing page
import "./landing-page.css";


function createContent () {
    let intro = document.createElement("div");
    intro.textContent = "Welcome to India - the land of delicious food, and amazing tastes. " +  
                        "We bring you home, to the much-missed odours, to the familiar warmth " + 
                        "of mom's cooking." ;
    intro.style.fontFamily = "'Marck Script', cursive";
    document.querySelector("#content").appendChild(intro);
}

export {createContent};