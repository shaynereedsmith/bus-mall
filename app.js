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
      if (productNumber[i].id === String(event.target.id) && totalClicks < maxClicks) {
        productNumber[i].timesClicked++;
        totalClicks++;
        renderThreeProducts();
      } else if (totalClicks === maxClicks) {
        proSpace.removeEventListener('click', productSelector, true);
        var listAnchor = document.getElementById('results');
        var resultsList = document.createElement('ul');
        listAnchor.appendChild(resultsList);
        for (var i = 0; i < productNumber.length; i++) {
          var li = document.createElement('li');
          li.innerText = productNumber[i].timesClicked + ' votes for ' + productNumber[i].name;
          resultsList.appendChild(li);
        }
      }
    }
  }
};

var proSpace = document.getElementById('productSpace');
proSpace.addEventListener('click', productSelector);

renderThreeProducts();





var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var chartConfig = {
  type: 'horizontalBar',
  data: {
    labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'USB', 'Water Can', 'WineGlass'],
    // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
    datasets: [{ // <-- notice that this can be an array of multiple data sets.
      // each data set is its own object literal.
      label: '# of Votes', // <-- the label of this one data set
      data: [Bag.timesClicked, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
      backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 5 // border width in pixels
    }]
  },
  options: {
    // maintainAspectRatio: false,
    // animation: {
    //   duration: 1000
    // },
    title: {
      display: true,
      text: 'Some stuff and some junk'
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
