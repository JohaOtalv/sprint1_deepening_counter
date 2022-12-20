import style from "./style.css";
import logo from "./assets/pattern-hills.svg";
import gen from "./assets/icon-facebook.svg"

const arr = [1, 2, 3],
    codeESNext = () => console.log(...arr);
console.log("hola webpack");
codeESNext();

// document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack">`;
const d = document,
    $app = d.getElementById("app"),
    $h1 = d.createElement("h1"),
    $logo = d.createElement("img"),
    $img = d.createElement("img");

$h1.textContent = "prueba";
$logo.src = logo;
$logo.classList.add("icon");
$img.src = gen;

$app.appendChild($h1);
// $app.appendChild($logo);
$app.appendChild($img);