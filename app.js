
//Global variables.
var allProducts = [];
var imgQue = [];
var display = document.getElementById("display");
var parent = document.getElementById("display");

//Creates each prodcut instance. Adds to allProducts array.
function createProduct(img, name){
    this.img = img;
    this.shown = 0;
    this.voted = 0;
    this.name = name;
    this.addToArray(); //Adds to product to array.
    console.log(this.name + " product has been created");
    console.log(allProducts)
};

//Method on createProduct constructor that adds new product to an array.
createProduct.prototype.addToArray = function(){
    allProducts.push(this);
};

function choose6RandNums(){//Creates 6 unique random numbers and adds them to imgQue. 
  imgQue = [];
  var num1 = Math.floor(Math.random() * allProducts.length );
  imgQue.push(num1);
for(i = 0; i < 5; i++ ){
  var num2 = Math.floor(Math.random() * allProducts.length );
  while(imgQue.includes(num2)){
    num2 = Math.floor(Math.random() * allProducts.length );
  }
  imgQue.push(num2);
  }
  console.log("imgQue " +imgQue);
}

//Function that will add 3 objects from allProducts array at indices generated by Choose3Products function to the DOM
//Displaying their image property.
function addToDOM(){
  choose6RandNums();
  var newProduct1 = document.createElement("img");
  var newProduct2 = document.createElement("img");
  var newProduct3 = document.createElement("img");
  newProduct1.setAttribute("src", allProducts[imgQue[0]].img);
  newProduct1.setAttribute("class", "product");
  newProduct2.setAttribute("src", allProducts[imgQue[1]].img);
  newProduct2.setAttribute("class", "product");
  newProduct3.setAttribute("src", allProducts[imgQue[2]].img);
  newProduct3.setAttribute("class", "product");
  display.appendChild(newProduct1);
  display.appendChild(newProduct2);
  display.appendChild(newProduct3);
  
}

//When event is triggered the first 3 images are removed and the next 3 are given.
display.addEventListener("click", nextProducts);

function nextProducts(){//removes currently displayed products and displays 3 new products.
  
    for(i = 0; i < 3; i++ ){
        var child = document.getElementsByClassName("product")[0];
        console.log(child);
        console.log(document.getElementsByClassName("product"));
        parent.removeChild(child);
    }
  var newProduct1 = document.createElement("img");
  var newProduct2 = document.createElement("img");
  var newProduct3 = document.createElement("img");
  newProduct1.setAttribute("src", allProducts[imgQue[3]].img);
  newProduct1.setAttribute("class", "product");
  newProduct2.setAttribute("src", allProducts[imgQue[4]].img);
  newProduct2.setAttribute("class", "product");
  newProduct3.setAttribute("src", allProducts[imgQue[5]].img);
  newProduct3.setAttribute("class", "product");
  display.appendChild(newProduct1);
  display.appendChild(newProduct2);
  display.appendChild(newProduct3);

}


//calling functions and methods
var bag = new createProduct("img/bag.jpg", "bag");
var banana = new createProduct("img/banana.jpg", "banana");
var bathroom = new createProduct("img/bathroom.jpg", "bathroom");
var boots = new createProduct("img/boots.jpg", "boots");
var breakfast = new createProduct("img/breakfast.jpg", "breakfast");
var bubblegum = new createProduct("img/bubblegum.jpg", "bubblegum");
var chair = new createProduct("img/chair.jpg", "chair");
var cthulhu = new createProduct("img/cthulhu.jpg", "cthulhu");
var dogduck = new createProduct("img/dog-duck.jpg", "dog duck");
var dragon = new createProduct("img/dragon.jpg", "dragon");
addToDOM();
