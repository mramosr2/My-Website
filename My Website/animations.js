
const nameText = "Michael Ramos";
const subtitleText = "Computer Science Student | Aspiring Front-End Developer";

const nameElem = document.getElementById("typewriter-name");
const nameCaret = document.getElementById("name-caret");
const subtitleElem = document.getElementById("typewriter-subtitle");
const subtitleCaret = document.getElementById("subtitle-caret");


let nameIndex = 0;
let subtitleIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    nameElem.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 80);
  } else {
    nameCaret.style.display = "none"; // hide after name is done
    setTimeout(typeSubtitle, 300);
  }
}

function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    subtitleElem.textContent += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeSubtitle, 40);
  } else {
    return;
  }
}


window.onload = () => {
  setTimeout(typeName, 400);
};
