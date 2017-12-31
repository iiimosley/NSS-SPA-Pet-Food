"use strict";
let dogFood = [];
let catFood = [];

const loadDogFood = function (callDogFood) {
    const loader = new XMLHttpRequest();
    loader.open('GET', "dog-food.JSON");
    loader.send();
    loader.addEventListener("load", function () {
        dogFood = JSON.parse(event.target.responseText).dog_brands;
        callDogFood(dogFood);
    });
};

const loadCatFood = function (callCatFood) {
    const loader = new XMLHttpRequest();
    loader.open('GET', "cat-food.JSON");
    loader.send();
    loader.addEventListener("load", function () {
        catFood = JSON.parse(event.target.responseText).cat_brands;
        callCatFood(catFood);
    });
};

module.exports = { loadDogFood, loadCatFood };