const imageElement = document.getElementById("image-element");
const nameElement = document.getElementById("name-element");

function showName() {
    alert("My name is Pranjal");
}

function showReg() {
    alert("My Registration number is 202000210");
}

function mouseOver() {
    imageElement.style.maxWidth = "40%";
    nameElement.style.fontSize = "1.8rem";
    nameElement.style.fontWeight = "800";
}

function mouseOut() {
    imageElement.style.maxWidth = "30%";
    nameElement.style.fontSize = "1rem";
    nameElement.style.fontWeight = "700";
}

function mouseOver2() {
    nameElement.style.fontSize = "1.3rem";
    nameElement.style.fontWeight = "500";
}

function mouseOut2() {
    nameElement.style.fontSize = "1rem";
    nameElement.style.fontWeight = "300";
}