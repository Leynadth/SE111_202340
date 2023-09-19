// script.js
var people = [
    { first: "Jason", last: "Vorhees", credit: "Friday the 13th" },
    { first: "Freddy", last: "Krueger", credit: "A Nightmare on Elm Street" },
    { first: "Roger", last: "Rabbit", credit: "Who Framed Roger Rabbit" },
    { first: "Kevin", last: "McCallister", credit: "Home Alone" },
    { first: "Godzilla", last: "King of The Monsters", credit: "Godzilla" },
    { first: "Buzz", last: "Lightyear", credit: "Toy Story" },
    { first: "Marion", last: "Cobretti", credit: "Cobra" }
];

var characterList = document.getElementById("character-list");

for (var i = 0; i < people.length; i++) {
    var tempDiv = document.createElement("div");
    tempDiv.setAttribute("class", "border");
    for (var prop in people[i]) {
        if (people[i].hasOwnProperty(prop)) {
            var tempP = document.createElement("p");
            var textNode = document.createTextNode(prop + ": " + people[i][prop]);
            tempP.appendChild(textNode);
            tempDiv.appendChild(tempP);
        }
    }
    characterList.appendChild(tempDiv);
}
