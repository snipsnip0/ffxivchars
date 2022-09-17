
var cardsElement = document.getElementsByClassName("cards")[0];

var max = 0;

function addChar() {
    if (max == 22) return;


    let name = document.createElement("p");
    let classe = document.createElement("p");
    let icon = document.createElement("i");

    name.textContent = `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
    classe.textContent = `${classes[Math.floor(Math.random() * classes.length)]}`;

    name.classList.add("name");
    classe.classList.add("class");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-circle-user");

    let character = document.createElement("div");
    character.classList.add("card");
    character.append(icon);
    character.append(name);
    character.append(classe);

    cardsElement.append(character);

    max++;
}