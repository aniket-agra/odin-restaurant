import {createContent as createHome} from "./landing-page.js";
import {createContent as createMenu} from "./menu-page.js";
import {createContent as createContact} from "./contact-page.js";

const btnDiv = document.createElement("div");
btnDiv.classList.add("buttons");

const btn1 = document.createElement("button");
btn1.classList.add("home");
btn1.textContent = "Home";
btn1.addEventListener("click", function (e) {
  document.querySelectorAll("#content > *").forEach(e => document.querySelector("#content").removeChild(e));
  createHome();
  btn1.classList.remove("showBorder");
  btn2.classList.add("showBorder");
  btn3.classList.add("showBorder");
});
btnDiv.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.classList.add("menu");
btn2.classList.add("showBorder");
btn2.textContent = "Menu";
btn2.addEventListener("click", function (e) {
  document.querySelectorAll("#content > *").forEach(e => document.querySelector("#content").removeChild(e));
  createMenu();
  btn1.classList.add("showBorder");
  btn2.classList.remove("showBorder");
  btn3.classList.add("showBorder");
});
btnDiv.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.classList.add("contact");
btn3.classList.add("showBorder");
btn3.textContent = "Contact";
btn3.addEventListener("click", function (e) {
  document.querySelectorAll("#content > *").forEach(e => document.querySelector("#content").removeChild(e));
  createContact();
  btn1.classList.add("showBorder");
  btn2.classList.add("showBorder");
  btn3.classList.remove("showBorder");
});
btnDiv.appendChild(btn3);

document.querySelector("body").insertBefore(btnDiv, document.querySelector("#content"));
document.querySelectorAll("button").forEach(e => {e.style.fontSize = "2rem";});