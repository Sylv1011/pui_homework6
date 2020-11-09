// Object Constructors
function green(){
  this.n = " After School Special";
  this.c = "green";
  this.image1 = "./images/green_couch1.png";
  this.image2 = "./images/green_couch1.png";
  this.image3 = "./images/green_couch3.png";
  this.image4 = "./images/green_couch4.png";
}

function yellow(){
  this.n = " Morning Haze";
  this.c = "yellow";
  this.image1 = "./images/yellow_couch1.png";
  this.image2 = "./images/yellow_couch1.png";
  this.image3 = "./images/yellow_couch3.png";
  this.image4 = "./images/yellow_couch4.png";
}

function blue(){
  this.n = " Cozy Denim";
  this.c = "blue";
  this.image1 = "./images/blue_couch1.png";
  this.image2 = "./images/blue_couch1.png";
  this.image3 = "./images/blue_couch3.png";
  this.image4 = "./images/blue_couch4.png";
}

function pink(){
  this.n = " Rainy Day";
  this.c = "pink";
  this.image1 = "./images/pink_couch1.png";
  this.image2 = "./images/pink_couch1.png";
  this.image3 = "./images/pink_couch3.png";
  this.image4 = "./images/pink_couch4.png";
}

function item(iFilling,iQuant,iColor,iName){
  this.f=iFilling;
  this.q=iQuant;
  this.c=iColor;
  this.n=iName;

}


// Document Load
function onLoad () {
  // initial value
  var product = new pink();
  var picCount=1;

  // keep track of total quantity
  var tq = 0;
  
  //clear storage 
  //localStorage.setItem("savedTotalQuant", JSON.stringify(tq)); 
  var totalQuant=JSON.parse(localStorage.getItem("savedTotalQuant"));
  if (totalQuant==null){
    localStorage.setItem("savedTotalQuant", JSON.stringify(tq));
  }
  // keep track of the items added in array 
  var list=[];
  
  //clear storage 
  //localStorage.setItem("savedList", JSON.stringify(list));  
  var nowList = JSON.parse(localStorage.getItem("savedList")); 
  if (nowList==null){
    localStorage.setItem("savedList", JSON.stringify(list));
  }

  // add to cart: store color, filling, and quantity
  document.getElementById("atc").addEventListener("click", function() {
    // get values
    var nowList = JSON.parse(localStorage.getItem("savedList"));
    var nowTotalQuant = Number(JSON.parse(localStorage.getItem("savedTotalQuant")));
    var filling=document.getElementById("material").value;
    var quant=Number(document.getElementById("amount").value);

    // push to item array
    nowList.push(new item(filling,quant,product.c,product.n));
    localStorage.setItem("savedList", JSON.stringify(nowList));

    // push total quantity 
    var s = nowTotalQuant+quant;
    console.log(s);
    localStorage.setItem("savedTotalQuant", JSON.stringify(s));

    document.getElementById("cartQ").textContent= s;

  });


  // initial pictures and color
  document.getElementById("circle").setAttribute("src", "./images/cartblue.png" );
  document.getElementById("cartQ").textContent= JSON.parse(localStorage.getItem("savedTotalQuant"));
  document.getElementById("color-name").textContent = product.n;
  document.getElementById("big-pic1").setAttribute("src", product.image1);
  document.getElementById("s-pic2").setAttribute("src", product.image2);
  document.getElementById("s-pic3").setAttribute("src", product.image3);
  document.getElementById("s-pic4").setAttribute("src", product.image4);


  // click on color green
  document.getElementById("gr").addEventListener("click", function() {
    product = new green();
    document.getElementById("color-name").textContent = product.n;
    document.getElementById("big-pic1").setAttribute("src", product.image1);
    document.getElementById("s-pic2").setAttribute("src", product.image2);
    document.getElementById("s-pic3").setAttribute("src", product.image3);
    document.getElementById("s-pic4").setAttribute("src", product.image4);
  });

  // click on color yellow
  document.getElementById("yl").addEventListener("click", function() {
    product = new yellow();
    document.getElementById("color-name").textContent = product.n;
    document.getElementById("big-pic1").setAttribute("src", product.image1);
    document.getElementById("s-pic2").setAttribute("src", product.image2);
    document.getElementById("s-pic3").setAttribute("src", product.image3);
    document.getElementById("s-pic4").setAttribute("src", product.image4);
  });

  // click on color blue
  document.getElementById("bl").addEventListener("click", function() {
    product = new blue();
    document.getElementById("color-name").textContent = product.n;
    document.getElementById("big-pic1").setAttribute("src", product.image1);
    document.getElementById("s-pic2").setAttribute("src", product.image2);
    document.getElementById("s-pic3").setAttribute("src", product.image3);
    document.getElementById("s-pic4").setAttribute("src", product.image4);
  });

  // click on color pink
  document.getElementById("pk").addEventListener("click", function() {
    product = new pink();
    document.getElementById("color-name").textContent = product.n;
    document.getElementById("big-pic1").setAttribute("src", product.image1);
    document.getElementById("s-pic2").setAttribute("src", product.image2);
    document.getElementById("s-pic3").setAttribute("src", product.image3);
    document.getElementById("s-pic4").setAttribute("src", product.image4);
  });

  // click on first small picture 
  document.getElementById("s-pic2").addEventListener("click", function() {
    document.getElementById("big-pic1").setAttribute("src", product.image2);
    picCount = 1;
  });

  // click on second small picture 
  document.getElementById("s-pic3").addEventListener("click", function() {
    document.getElementById("big-pic1").setAttribute("src", product.image3);
    picCount = 2;

  });

  // click on third small picture 
  document.getElementById("s-pic4").addEventListener("click", function() {
    document.getElementById("big-pic1").setAttribute("src", product.image4);
    picCount = 3;
  });

  // Extra Credit: Arrows
  // click on up arrow
  document.getElementById("up").addEventListener("click", function() {
  if (picCount>1){
    picCount-=1;}
  if (picCount === 1) 
    {
      document.getElementById("big-pic1").setAttribute("src", product.image1);
    } 
    else if (picCount === 2) 
    {
      document.getElementById("big-pic1").setAttribute("src", product.image3);
    } 
    else if(picCount === 3)
    {
      document.getElementById("big-pic1").setAttribute("src", product.image4);
    }
  });
  // click on down arrow
  document.getElementById("down").addEventListener("click", function() {
  if (picCount<3){
  picCount+=1;}
  if (picCount === 1) 
    {
      document.getElementById("big-pic1").setAttribute("src", product.image1);
    } 
    else if (picCount === 2) 
    {
      document.getElementById("big-pic1").setAttribute("src", product.image3);
    } 
    else if(picCount === 3)
    {
      document.getElementById("big-pic1").setAttribute("src", product.image4);
    }
  });

};







