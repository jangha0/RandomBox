let characters = [];
for (i = 1; i <= 9; i++)
{ characters.push('00' + i);
}
for (i = 10; i <= 99; i++)
{ characters.push('0' + i);
}
for (i = 100; i <=905; i++)
{ characters.push(i);
}

const chosenCharacter = characters[Math.floor(Math.random() * characters.length)];
const chosenImage = document.createElement("img")
const imageContainer = document.querySelector(".image-container")
const numbering = document.querySelector(".numbering");

chosenImage.id = "ch-image";
chosenImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${chosenCharacter}.png`;
imageContainer.appendChild(chosenImage);



// chosenImaga.style.filter = "brightness(0)";
chosenImage.style.filter = "brightness(0)";

chosenImage.addEventListener("mouseover",mouseover);

function mouseover() {
    chosenImage.style.filter = "none";
    chosenImage.style.transitionDuration = "0.5s";
    numbering.innerText = `${chosenCharacter}번 포켓몬🎉`;
}



// MonsterNumber.appendChild(chosenCharacter);