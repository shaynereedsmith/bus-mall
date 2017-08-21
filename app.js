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
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);
var Bag = new Product(bag, 'bag.jpg', 0, 0);

function renderProduct() {
  var imageOne = document.getElementById('one');
  var firstImage = document.createElement('img');
  firstImage.src = Bag.filepath;
  imageOne.appendChild(firstImage);
};
renderProduct();
