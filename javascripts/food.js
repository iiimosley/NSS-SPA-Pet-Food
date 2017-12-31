"use strict";
let food = require('./getFood');
let output = document.getElementById('foodGrid');

function printDogFood(dog) {
    for (let i = 0; i < dog.length; i++) {
        output.innerHTML += 
        `<div id="dogBrand${[i+1]}">
        <div class="brandName"><h3>${dog[i].name}</h3></div></div>`;
        for (let t = 0; t < dog[i].types.length; t++) {
            document.getElementById(`dogBrand${[i+1]}`).innerHTML +=
                `<div id="dog${i+1}Type${t+1}">
            <h4>${dog[i].types[t].type}</h4></div>`;
            for (let v = 0; v < dog[i].types[t].volumes.length; v++) {
                document.getElementById(`dog${i+1}Type${[t+1]}`).innerHTML +=
                    `<li><span class="weight">${dog[i].types[t].volumes[v].name}:</span> 
                    $${dog[i].types[t].volumes[v].price}</li>`;
            }
        }
    }
}

function printCatFood(cat) {
    for (let i = 0; i < cat.length; i++) {
        output.innerHTML +=
            `<div id="catBrand${[i + 1]}">
        <div class="brandName"><h3>${cat[i].name}</h3></div></div>`;
        for (let t = 0; t < cat[i].types.length; t++) {
            document.getElementById(`catBrand${[i + 1]}`).innerHTML +=
                `<div id="cat${i + 1}Type${t + 1}">
            <h4>${cat[i].types[t].type}</h4></div>`;
            for (let v = 0; v < cat[i].types[t].volumes.length; v++) {
                document.getElementById(`cat${i + 1}Type${[t + 1]}`).innerHTML +=
                    `<li><span class="weight">${cat[i].types[t].volumes[v].name}:</span> 
                    $${cat[i].types[t].volumes[v].price}</li>`;
            }
        }
    }
}

food.loadDogFood(printDogFood);
food.loadCatFood(printCatFood);