/* Add any JavaScript you need to this file. */

//const { doc } = require("prettier");

// list of products
var camera = [
  {
    name: 'Camera',
    description: 'Cenon digital camera',
    price: 25, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'Camera', // category of this item
    imageUrl: 'images/camera1.jpg' // relative URL to image of this item
  },
  {
    name: 'DSLR',
    description: 'Canon DSLR',
    price: 100, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'Camera', // category of this item
    imageUrl: 'images/camera2.jpg' // relative URL to image of this item
  },
  {
    name: 'Sony camera',
    description: 'Sony DSLR',
    price: 73, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'Camera', // category of this item
    imageUrl: 'images/camera3.jpg' // relative URL to image of this item
  },
  {
    name: 'Canon Camera',
    description: 'Canon latest Digital camera',
    price: 32, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'Camera', // category of this item
    imageUrl: 'images/camera4.jpg' // relative URL to image of this item
  }
];

var headphones = [
  {
    name: 'headphones',
    description: 'Black foldable headphones',
    price: 12, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'headphones', // category of this item
    imageUrl: 'images/headphones.jpg' // relative URL to image of this item
  },
  {
    name: 'headphones Black',
    description: 'Sony black headphones',
    price: 15, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'headphones', // category of this item
    imageUrl: 'images/headphones2.jpg' // relative URL to image of this item
  },
  {
    name: 'samsung headphones',
    description: 'Black color samsung headphones',
    price: 14, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'headphone', // category of this item
    imageUrl: 'images/headphones3.jpg' // relative URL to image of this item
  },
  {
    name: 'handsfree',
    description: 'samsung White handsfree',
    price: 4, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'headphones', // category of this item
    imageUrl: 'images/headphones4.jpg' // relative URL to image of this item
  }
];

var watch = [
  {
    name: 'Digital watch',
    description: 'Digital blck watch',
    price: 55, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'watch', // category of this item
    imageUrl: 'images/watch1.jpg' // relative URL to image of this item
  },
  {
    name: 'metallic watch',
    description: 'Quartz metallic watch',
    price: 85, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'watch', // category of this item
    imageUrl: 'images/watch2.jpg' // relative URL to image of this item
  },
  {
    name: 'pocket watch',
    description: 'Metallic pocket watch',
    price: 80, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'watch', // category of this item
    imageUrl: 'images/watch3.jpg' // relative URL to image of this item
  },
  {
    name: 'Electronic watch',
    description: 'Electronic watch with bluetooth support',
    price: 100, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'watch', // category of this item
    imageUrl: 'images/watch4.jpg' // relative URL to image of this item
  }
];
//method to add camera cards
function cameras(camera) {
  var px = 85;
  for (var i = 0; i < 4; i++) {
    if (i !== 0) {
      px = 20;
    }
    var htmlString =
      '<div id="card' +
      (i + 1) +
      '" id="cp' +
      i +
      '" class="g c1" style="margin-bottom: ' +
      px +
      'px !important;"><img src="' +
      camera[i].imageUrl +
      '" class="grimg" alt="camera"><a href="" class="astyle"><p style="padding-left:20px; padding-top: 20px;color:purple;white-space: nowrap;overflow: hidden;">' +
      camera[i].name +
      '</p><h3 class="price">' +
      camera[i].price +
      ' CAD</h3><p class="description" >' +
      camera[i].description +
      '</p></a></div>';
    var div = document.createElement('div');
    var div1 = document.querySelector('#imageContainer');
    div.innerHTML = htmlString;
    div1.parentNode.insertBefore(div.firstChild, div1.nextSibling);
  }
}
//method to add headphones cards
function headphone() {
  for (var i = 0; i < 4; i++) {
    var htmlString =
      '<div id="card' +
      (i + 1) +
      '" class="g c2"><img src="' +
      headphones[i].imageUrl +
      '" class="grimg" alt="headphones"><a href="" class="astyle"><p style="padding-left:20px; padding-top: 20px;color:purple;white-space: nowrap;overflow: hidden;">' +
      headphones[i].name +
      '</p><h3 class="price">' +
      headphones[i].price +
      ' CAD</h3><p class="description" >' +
      headphones[i].description +
      '</p></a></div>';
    var div = document.createElement('div');
    var div1 = document.querySelector('#imageContainer');
    div.innerHTML = htmlString;
    div1.parentNode.insertBefore(div.firstChild, div1.nextSibling);
  }
}
//method to add watch cards
function watches() {
  for (var i = 0; i < 4; i++) {
    var htmlString =
      '<div id="card' +
      (i + 1) +
      '" class="g c3" ><img src="' +
      watch[i].imageUrl +
      '" class="grimg" alt="watch"><a href="" class="astyle"><p style="padding-left:20px; padding-top: 20px;color:purple;white-space: nowrap;overflow: hidden;">' +
      watch[i].name +
      '</p><h3 class="price">' +
      watch[i].price +
      ' CAD</h3><p class="description">' +
      watch[i].description +
      '</p></a></div>';
    var div = document.createElement('div');
    var div1 = document.querySelector('#imageContainer');
    div.innerHTML = htmlString;
    div1.parentNode.insertBefore(div.firstChild, div1.nextSibling);
  }
}

// add watch categories to the page
function displayWatches() {
  document.getElementById('catagory').innerHTML = 'Catagory: Watch';
  removeElement();
  removeHome();
  cameras(watch);
}

// add camera categories to the page
function displayCameras() {
  document.getElementById('catagory').innerHTML = 'Catagory: Camera';
  removeElement();
  removeHome();
  cameras(camera);
}
// add headphones categories to the page
function displayheadphones() {
  document.getElementById('catagory').innerHTML = 'Catagory: headphones';
  removeElement();
  removeHome();
  cameras(headphones);
}
// add all products/categories to the page
function allProducts() {
  document.getElementById('catagory').innerHTML = 'Catagory: All';
  removeElement();
  removeHome();
  addHome();
  cameras(camera);
  headphone();
  watches();
}

//remove cards when a specific category is selected
function removeElement() {
  // Removes an element from the document
  var j = 0;
  do {
    for (var i = 0; i < 4; i++) {
      var element = document.getElementById('card' + (i + 1));
      if (element === null) {
        break;
      }
      element.parentNode.removeChild(element);
    }
    j++;
  } while (j < 3);
}
function removeHome() {
  document.getElementById('bg').style.backgroundColor = 'white';
  var element = document.getElementById('home');
  if (element !== null) {
    element.parentNode.removeChild(element);
  }
}

function addHome() {
  var htmlString =
    '<div id="home" class="height"><div id="homeimg" class="height" style="float:left; width:50%;"><img src="images/undraw_successful_purchase_uyin.svg" id="tr" width="600" ></div><div class="height" style="overflow: hidden; position:relative; padding-top: 25px;"><div style="float:left;"> <div id="hometext"> <h1 style="font-size: 40px;color: white;"><span style="color:#B72C69">Electria</span><br> Electronic shop </h1> <p style="font-size: 14px; color: white;" class="p1"> <br>This shop is specially designed for selling electronic products world wide.<br>We have initially decided to sell headphones, watches and camera, and <br>after successful services of these product we will expand our shop and also <br>start handset and other products.</p><p style="font-size: 14px; color: white;" class="p2">We welcome you to <strong>Electria</strong> where  you can found different verietiesof watches, <br>cameras and headphones. We offer reliable products and affordable prices.<br> Its time to visit the shop!.</p><a href="#catagory"><button style="background-color: lightskyblue;border-radius: 25px;width: 150px;height: 40px;color: white;border: none;margin: auto;" id="btnhover">Shop now</button></a></div></div><div id="circledDiv"></div></div></div>';
  var div = document.createElement('div');
  var div1 = document.querySelector('#head');
  div.innerHTML = htmlString;
  div1.parentNode.insertBefore(div.firstChild, div1.nextSibling);
  document.getElementById('bg').style.backgroundImage =
    '-moz-linear-gradient(#751aff, #4d4dff, #0040ff)';
}

//expand and contract nav bar in case of mobile view
function expander() {
  if (document.getElementById('navigatorcontainer').style.display === 'none') {
    var a = document.getElementById('navigatorcontainer');
    a.style.display = 'flex';
    a.style.flexDirection = 'column';
    document.getElementById('homeBtn').style.marginLeft = '0px';
    document.getElementById('collapseContainer').style.flexDirection = 'column';
  } else {
    document.getElementById('navigatorcontainer').style.display = 'none';
  }
}

function showOrderID() {
  document.getElementById('productID').style.display = 'block';
  document.getElementById('prdid').style.display = 'block';
}

function hideOrderID() {
  document.getElementById('productID').style.display = 'none';
  document.getElementById('prdid').style.display = 'none';
}

function addFooter() {
  var htmlString =
    '<div class="footer"><div id="footer"><div class="grid-container"><a href="#" class="grid-item brandname">Electria</a><a class="grid-item" href="https://facebook.com"><i class="fa fa-facebook" style="font-size:36px; color: white;" class="footer_icon"></i></a><a class="grid-item" href="https://twitter.com"><i class="fa fa-twitter-square" style="font-size:36px; color: white;" class="footer_icon"></i></a><div class="grid-item"><form action="https://formspree.io/f/xpzoyakb" method="post"><input type="email" placeholder="Enter Email to subscribe" style="color: black;" name="_replyto" class="footer_form"><input type="submit" value="subscribe" class="footer_form" style="color: black; width: 100px; background-color: lightgreen; border: 1px solid lightgreen; border-radius: 50px;"></form></div></div></div></div>';
  var div = document.createElement('div');
  var div1 = document.querySelector('#imageContainer');
  div.innerHTML = htmlString;
  div1.parentNode.insertBefore(div.firstChild, div1.nextSibling);
  document.getElementById('bg').style.backgroundImage =
    '-moz-linear-gradient(#751aff, #4d4dff, #0040ff)';
}

const mediaQuery = window.matchMedia('(min-width: 720px)');

function handleTabletChange(e) {
  // Check if the media query is true than perform some action
  if (e.matches) {
    var a = document.getElementById('navigatorcontainer');
    if (a !== null) {
      a.style.display = 'flex';
      a.style.flexDirection = 'row';
    }
  } else {
    a = document.getElementById('navigatorcontainer');
    if (a !== null) {
      a.style.display = 'none';
    }
  }
}
mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery); //checking for window resolution changes

function validateForm() {
  //alert('validateForm')
  var x = document.forms['myForm']['name'].value;
  var regex = /[^0-9]/g;
  if (x === '') {
    document.getElementById('name').style.border = '1px solid red';
    return false;
  } else {
    document.getElementById('name').style.border = '1px solid black';
  }

  x = document.forms['myForm']['email'].value;
  if (x === '') {
    document.getElementById('email').style.border = '1px solid red';
    return false;
  } else {
    document.getElementById('email').style.border = '1px solid black';
  }

  x = document.forms['myForm']['address'].value;
  if (x === '') {
    document.getElementById('address').style.border = '1px solid red';
    return false;
  } else {
    document.getElementById('address').style.border = '1px solid black';
  }
  x = document.forms['myForm']['city'].value;
  if (x === '') {
    document.getElementById('city').style.border = '1px solid red';
    return false;
  } else {
    document.getElementById('city').style.border = '1px solid black';
  }
  x = document.forms['myForm']['postal_code'].value;
  if (x === '' || x.length < 2) {
    document.getElementById('postal_code').style.border = '1px solid red';
    return false;
  } else {
    document.getElementById('postal_code').style.border = '1px solid black';
  }
  x = document.forms['myForm']['message'].value;
  if (x === '') {
    document.getElementById('message').style.border = '1px solid red';
    return false;
  } else {
    document.getElementById('message').style.border = '1px solid black';
  }
  x = document.forms['myForm']['purpose'].value;
  if (x === 'order problem') {
    x = document.forms['myForm']['prdid'].value;
    if (x === '' || x.length < 2) {
      document.getElementById('prdid').style.border = '1px solid red';
      return false;
    } else {
      document.getElementById('purpose').style.border = '1px solid black';
    }
  }
  return true;
}

function search() {
  var x = document.forms['searchForm']['word'].value;
  if (x.toLowerCase() === 'watch' || x.toLowerCase() === 'watches') {
    displayWatches();
  } else if (x.toLowerCase() === 'camera' || x.toLowerCase() === 'cameras') {
    displayCameras();
  } else if (x.toLowerCase() === 'headphone' || x.toLowerCase() === 'headphones') {
    displayheadphones();
  } else {
    alert('No product matched with your search');
  }
  return false;
}
