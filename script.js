// JavaScript File
let request = new XMLHttpRequest();


function getPokemon() {
    let section = document.getElementById("pokelist");
    let pokemonType = document.getElementById("type");
    let type = pokemonType.value;
    let url = "https://api.pokemontcg.io/v1/cards?name=";
    let exurl = url + type; 
    //open XMLhttprequest
    request.open("GET", exurl, true);
    request.onload = function() {
    let data = JSON.parse(this.response);
    let pokemonCard = document.createElement("img");
     if(request.status >= 200 && request.status < 400 ) {
         pokemonCard.src =data.cards[0].imageUrl;
         pokemonCard.className = "card";
         section.appendChild(pokemonCard);
    }
    };
    request.send();

}