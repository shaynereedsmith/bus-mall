'use strict';

function Product(name, filepath, numberOfTimesShown, timesClicked) {
  this.name = name;
  this.filepath = filepath;
  this.numberOfTimesShown = numberOfTimesShown;
  this.timesClicked = timesClicked;
};

var Bag = new Product('bag', 'img/bag.jpg', 0, 0);
var Banana = new Product('banana', 'banana.jpg', 0, 0);
var Bathroom = new Product('bathroom', 'bathroom.jpg', 0, 0);
var Boots = new Product('boots', 'boots.jpg', 0, 0);
var Breakfast = new Product('breakfast', 'breakfast.jpg', 0, 0);
var Bubblegum = new Product('bubblegum', 'bubblegum.jpg', 0, 0);
var Chair = new Product('chair', 'chair.jpg', 0, 0);
var Cthulhu = new Product('cthulhu', 'cthulhu.jpg', 0, 0);
var DogDuck = new Product('dog-duck', 'dog-duck.jpg', 0, 0);
var Dragon = new Product('dragon', 'dragon.jpg', 0, 0);
var Pen = new Product('pen', 'pen.jpg', 0, 0);
var PetSweep = new Product('pet-sweep', 'pet-sweep.jpg', 0, 0);
var Scissors = new Product('scissors', 'scissors.jpg', 0, 0);
var Shark = new Product('shark', 'shark.jpg', 0, 0);
var Sweep = new Product('sweep', 'sweep.png', 0, 0);
var Tauntaun = new Product('tauntaun', 'tauntaun.jpg', 0, 0);
var Unicorn = new Product('unicorn', 'unicorn.jpg', 0, 0);
var Usb = new Product('usb', 'usb.gif', 0, 0);
var WaterCan = new Product('water-can', 'water-can.jpg', 0, 0);
var WineGlass = new Product('wine-glass', 'wine-glass.jpg', 0, 0);

function renderFirstProduct() {
  var imageOne = document.getElementById('one');
  var firstImage = document.createElement('img');
  firstImage.src = Bag.filepath;
  imageOne.appendChild(firstImage);
};

function renderSecondProduct() {
  var imageTwo = document.getElementById('two');
  var secondImage = document.createElement('img');
  secondImage.src = Bag.filepath;
  imageTwo.appendChild(secondImage);
};

function renderThirdProduct() {
  var imageThree = document.getElementById('three');
  var thirdImage = document.createElement('img');
  thirdImage.src = Bag.filepath;
  imageThree.appendChild(thirdImage);
};

renderFirstProduct();
renderSecondProduct();
renderThirdProduct();
