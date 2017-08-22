'use strict';

var productNumber = [];
var lastThree = [];

function Product(name, filepath, timesShown, timesClicked) {
  this.name = name;
  this.filepath = filepath;
  this.numberOfTimesShown = timesShown;
  this.timesClicked = timesClicked;
  productNumber.push(this);
};

var Bag = new Product('bag', 'img/bag.jpg', 0, 0);
var Banana = new Product('banana', 'img/banana.jpg', 0, 0);
var Bathroom = new Product('bathroom', 'img/bathroom.jpg', 0, 0);
var Boots = new Product('boots', 'img/boots.jpg', 0, 0);
var Breakfast = new Product('breakfast', 'img/breakfast.jpg', 0, 0);
var Bubblegum = new Product('bubblegum', 'img/bubblegum.jpg', 0, 0);
var Chair = new Product('chair', 'img/chair.jpg', 0, 0);
var Cthulhu = new Product('cthulhu', 'img/cthulhu.jpg', 0, 0);
var DogDuck = new Product('dog-duck', 'img/dog-duck.jpg', 0, 0);
var Dragon = new Product('dragon', 'img/dragon.jpg', 0, 0);
var Pen = new Product('pen', 'img/pen.jpg', 0, 0);
var PetSweep = new Product('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
var Scissors = new Product('scissors', 'img/scissors.jpg', 0, 0);
var Shark = new Product('shark', 'img/shark.jpg', 0, 0);
var Sweep = new Product('sweep', 'img/sweep.png', 0, 0);
var Tauntaun = new Product('tauntaun', 'img/tauntaun.jpg', 0, 0);
var Unicorn = new Product('unicorn', 'img/unicorn.jpg', 0, 0);
var Usb = new Product('usb', 'img/usb.gif', 0, 0);
var WaterCan = new Product('water-can', 'img/water-can.jpg', 0, 0);
var WineGlass = new Product('wine-glass', 'img/wine-glass.jpg', 0, 0);

function renderThreeProducts() {
  var imageOne = document.getElementById('one');
  var firstImage = document.createElement('img');
  var randomOne = Math.floor(Math.random() * productNumber.length);
  firstImage.src = productNumber[randomOne].filepath;
  imageOne.appendChild(firstImage);
  var imageTwo = document.getElementById('two');
  var secondImage = document.createElement('img');
  var randomTwo = Math.floor(Math.random() * productNumber.length);
  while (randomOne === randomTwo) {
    randomTwo = Math.floor(Math.random() * productNumber.length);
  }
  secondImage.src = productNumber[randomTwo].filepath;
  imageTwo.appendChild(secondImage);
  var imageThree = document.getElementById('three');
  var thirdImage = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productNumber.length);
  while (randomThree === randomTwo || randomThree === randomOne) {
    randomThree = Math.floor(Math.random() * productNumber.length);
  };
  thirdImage.src = productNumber[randomThree].filepath;
  imageThree.appendChild(thirdImage);
  lastThree = [];
  lastThree.push(randomOne, randomTwo, randomThree);
};

renderThreeProducts();

function voteOne (event) {
  console.log(event + ' this is the first object');
}
function voteTwo (event) {
  console.log(event + ' this is the second object');
}
function voteThree (event) {
  console.log(event + ' this is the third object');
}

var clickOne = document.getElementById('one');
clickOne.addEventListener('click', voteOne);

var clickTwo = document.getElementById('two');
clickTwo.addEventListener('click', voteTwo);

var clickThree = document.getElementById('three');
clickThree.addEventListener('click', voteThree);
