import "../css/style.css";
import "../css/inject.css";
import "../css/styles.scss";

import { randomNumber } from "./randomNumber";
import html from "../assets/footer.html";
console.log(html);
const divRandomInput = document.getElementById("rndValue");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  divRandomInput.textContent = randomNumber();
});

document.querySelector("footer").innerHTML = html;
