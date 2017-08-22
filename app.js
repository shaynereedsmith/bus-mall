'use strict';

var productNumber = [];
var lastThree = [];
var totalClicks = 0;

function Product(name, filepath, id) {
  this.name = name;
  this.filepath = filepath;
  this.id = id;
  this.timesShown = 0;
  this.timesClicked = 0;
  productNumber.push(this);
  this.imageMaker = function() {
    var anchor = document.getElementById('productSpace');
    var img = document.createElement('img');
    img.setAttribute('name', this.name);
    img.setAttribute('src', this.filepath);
    img.id = this.id;
    anchor.appendChild(img);
  };
};

var Bag = new Product('bag', 'img/bag.jpg', 'bag');
var Banana = new Product('banana', 'img/banana.jpg', 'banana');
var Bathroom = new Product('bathroom', 'img/bathroom.jpg', 'bathroom');
var Boots = new Product('boots', 'img/boots.jpg', 'boots');
var Breakfast = new Product('breakfast', 'img/breakfast.jpg', 'breakfast');
var Bubblegum = new Product('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var Chair = new Product('chair', 'img/chair.jpg', 'chair');
var Cthulhu = new Product('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
var DogDuck = new Product('dog-duck', 'img/dog-duck.jpg', 'dog-duck');
var Dragon = new Product('dragon', 'img/dragon.jpg', 'dragon');
var Pen = new Product('pen', 'img/pen.jpg', 'pen');
var PetSweep = new Product('pet-sweep', 'img/pet-sweep.jpg', 'pet-sweep');
var Scissors = new Product('scissors', 'img/scissors.jpg', 'scissors');
var Shark = new Product('shark', 'img/shark.jpg', 'shark');
var Sweep = new Product('sweep', 'img/sweep.png', 'sweep');
var Tauntaun = new Product('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
var Unicorn = new Product('unicorn', 'img/unicorn.jpg', 'unicorn');
var Usb = new Product('usb', 'img/usb.gif', 'usb');
var WaterCan = new Product('water-can', 'img/water-can.jpg', 'water-can');
var WineGlass = new Product('wine-glass', 'img/wine-glass.jpg', 'wine-glass');

var randomNumber = function() {
  return Math.floor(Math.random() * productNumber.length);
};

var renderThreeProducts = function() {
  var anchor = document.getElementById('productSpace');
  anchor.innerHTML = '';
  var currentThree = [];
  for (var i = 0; i < 3; i++) {
    var randomProduct = productNumber[randomNumber()];
    if (currentThree.includes(randomProduct) || lastThree.includes(randomProduct)){
      i--;
      continue;
    } else {
      currentThree.push(randomProduct);
      randomProduct.imageMaker();
    };
  };
  lastThree = currentThree;
};

function productSelector(event) {
  event.preventDefault();
  if(event.target.nodeName === 'IMG') {
    for (var i = 0; i < productNumber.length; i++) {
      if (productNumber[i].id === String(event.target.id) && totalClicks < 25) {
        productNumber[i].timesClicked++;
        totalClicks++;
        renderThreeProducts();
      } else {
        proSpace.removeEventListener('click', productSelector, true);
      }
    }
  }
};

var proSpace = document.getElementById('productSpace');
proSpace.addEventListener('click', productSelector);

renderThreeProducts();

// ORIGINAL CODE BELOW, UPDATED CODE ABOVE

// function renderThreeProducts() {
//   var imageOne = document.getElementById('one');
//   var firstImage = document.createElement('img');
//   var randomOne = Math.floor(Math.random() * productNumber.length);
//   firstImage.src = productNumber[randomOne].filepath;
//   imageOne.appendChild(firstImage);
//   var imageTwo = document.getElementById('two');
//   var secondImage = document.createElement('img');
//   var randomTwo = Math.floor(Math.random() * productNumber.length);
//   while (randomOne === randomTwo) {
//     randomTwo = Math.floor(Math.random() * productNumber.length);
//   }
//   secondImage.src = productNumber[randomTwo].filepath;
//   imageTwo.appendChild(secondImage);
//   var imageThree = document.getElementById('three');
//   var thirdImage = document.createElement('img');
//   var randomThree = Math.floor(Math.random() * productNumber.length);
//   while (randomThree === randomTwo || randomThree === randomOne) {
//     randomThree = Math.floor(Math.random() * productNumber.length);
//   };
//   thirdImage.src = productNumber[randomThree].filepath;
//   imageThree.appendChild(thirdImage);
//   lastThree = [];
//   lastThree.push(randomOne, randomTwo, randomThree);
// };

// renderThreeProducts();
//
// function voteOne (event) {
//   console.log(event);
// }
// function voteTwo (event) {
//   console.log(event);
// }
// function voteThree (event) {
//   console.log(event);
// }
//
// var clickOne = document.getElementById('one');
// clickOne.addEventListener('click', voteOne);
//
// var clickTwo = document.getElementById('two');
// clickTwo.addEventListener('click', voteTwo);
//
// var clickThree = document.getElementById('three');
// clickThree.addEventListener('click', voteThree);
