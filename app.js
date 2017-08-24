'use strict';

var maxClicks = 25;
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

if (localStorage.productNumber) {
  var productNumber = JSON.parse(localStorage.productNumber);
} else {
  var Bag = new Product('R2D2 Bag', 'img/bag.jpg', 'bag');
  var Banana = new Product('Banana Slicer', 'img/banana.jpg', 'banana');
  var Bathroom = new Product('TP Tablet Holder', 'img/bathroom.jpg', 'bathroom');
  var Boots = new Product('Boots', 'img/boots.jpg', 'boots');
  var Breakfast = new Product('Easy-make Breakfast', 'img/breakfast.jpg', 'breakfast');
  var Bubblegum = new Product('Meatball Bubblegum', 'img/bubblegum.jpg', 'bubblegum');
  var Chair = new Product('A Chair', 'img/chair.jpg', 'chair');
  var Cthulhu = new Product('Cthulhu Plushy', 'img/cthulhu.jpg', 'cthulhu');
  var DogDuck = new Product('Duck Muzzle', 'img/dog-duck.jpg', 'dog-duck');
  var Dragon = new Product('Dragon Meat', 'img/dragon.jpg', 'dragon');
  var Pen = new Product('Pen Cutlery', 'img/pen.jpg', 'pen');
  var PetSweep = new Product('Pet Sweep', 'img/pet-sweep.jpg', 'pet-sweep');
  var Scissors = new Product('Pizza Scissors', 'img/scissors.jpg', 'scissors');
  var Shark = new Product('Shark Sleeping Bag', 'img/shark.jpg', 'shark');
  var Sweep = new Product('Baby Sweep', 'img/sweep.png', 'sweep');
  var Tauntaun = new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 'tauntaun');
  var Unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg', 'unicorn');
  var Usb = new Product('Tentacle USB', 'img/usb.gif', 'usb');
  var WaterCan = new Product('Water Can', 'img/water-can.jpg', 'water-can');
  var WineGlass = new Product('Wine Glass', 'img/wine-glass.jpg', 'wine-glass');
}

var imageMaker = function(image) {
  var anchor = document.getElementById('productSpace');
  var img = document.createElement('img');
  img.setAttribute('name', image.name);
  img.setAttribute('src', image.filepath);
  img.id = image.id;
  anchor.appendChild(img);
};

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
      imageMaker(randomProduct);
    };
  };
  lastThree = currentThree;
};

function productSelector(event) {
  event.preventDefault();
  if(event.target.nodeName === 'IMG') {
    for (var i = 0; i < productNumber.length; i++) {
      if (productNumber[i].id === String(event.target.id) && totalClicks < maxClicks) {
        productNumber[i].timesClicked++;
        productNumber[i].timesShown++;
        totalClicks++;
        renderThreeProducts();
      } else if (totalClicks === maxClicks) {
        proSpace.removeEventListener('click', productSelector, true);
        var data = [];
        var name = [];
        var percent = [];
        for (var i = 0; i < productNumber.length; i++) {
          data.push(productNumber[i].timesClicked);
          name.push(productNumber[i].name);
          percent.push((productNumber[i].timesShown / productNumber[i].timesClicked) * 100);
        }
        localStorage.setItem('productNumber', JSON.stringify(productNumber));
        chart(name, data, percent);
      }
    }
  }
};

var proSpace = document.getElementById('productSpace');
proSpace.addEventListener('click', productSelector);

renderThreeProducts();

function chart(name, data, percent) {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var chartConfig = {
    type: 'horizontalBar',
    data: {
      labels: name,
      datasets: [{
        label: 'Number of Times Clicked',
        data: data,
        backgroundColor: 'rgba(1, 103, 190, 0.2)',
        borderColor: 'rgba(3, 177, 196, 1)',
        borderWidth: 1
      }, {
        label: 'Percent of Times Clicked when Shown',
        data: percent,
        backgroundColor: 'rgba(253, 64, 139, 0.2)',
        borderColor: 'rgba(251, 0, 65, 1)',
        borderWidth: 1
      }]
    },
    options: {
      animation: {
        duration: 4500
      },
      title: {
        display: true,
        text: 'Thank you for participating!',
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };

  var myChart = new Chart(ctx, chartConfig);
};
