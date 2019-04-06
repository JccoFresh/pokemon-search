// JavaScript File
//https://api.pokemontcg.io/v1/cards/dp6-90  example picture
let request = new XMLHttpRequest();


//let pokemonCounter;
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
        //pokemonCounter++;
        //  if(pokemonCounter === 4) {
        //      section.removeChild(section.firstChild)
         
        // } 
         
        //  for(let i = 0; i<3 ; i++ ){
        //     let arr = [];
        //     arr[i] = pokemonCard.src;
        //     pokemonCounter++;
        //     console.log(pokemonCounter)
            //  if(pokemonCounter === 4) 
            //  section.removeChild(pokemonCard)
            //  location.reload()
        } 
        //  console.log(pokemonCounter);
        // if(pokemonCounter === 4) {
        //     location.reload(true);
        // };
       
    };
    request.send();
}
