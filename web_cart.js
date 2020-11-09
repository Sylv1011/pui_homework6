
// set the variables 
// draw the pictures of saved products
function drawPic(productList, amount) {
  var pic = document.getElementById("pic");
  pic.innerHTML = "";

    for (i=0;i<amount;i++) {

      // image
        var p=document.createElement("img");
        var c= productList[i].c
        var q= productList[i].q

        console.log(c);
        p.src="./images/"+c+"_couch1.png";
        // p.top = 35%;
        // p.position = "absolute";
        p.style = "position:absolute;top:"+ (10+150*i) +"px;left:2%;width:15%";
        pic.appendChild(p);

        // Item Description
        var p1= document.createElement("div");
        var ul1= document.createElement("ul");
        ul1.textContent = "Couch Pillow";
        var ul2= document.createElement("ul");
        ul2.textContent = "Color: "+productList[i].n;
        var ul3 = document.createElement("ul");
        ul3.textContent ="Size: One Size";
        p1.appendChild(ul1);
        p1.appendChild(ul2);
        p1.appendChild(ul3);
        p1.style = "position:absolute;top:"+ (150*i) +"px;left:13%;width:30%; font:15px Pavanam sans-serif; Color: black;";
        ul1.style = "line-height:3px;";
        ul2.style = "line-height:3px;";
        ul3.style = "line-height:3px;";
        pic.appendChild(p1);

        // Edit and Back to Detail
        var p2 = document.createElement("div");
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        a1.setAttribute("href", "");
        a2.setAttribute("href", "couch_pillow.html");
        a1.innerHTML = "Edit";
        a2.innerHTML = "Back to Details";
        p2.appendChild(a1);
        p2.appendChild(a2);
        p2.style = "position:absolute;top:"+ (70+150*i) +"px;left:18%;width:15%; font:14px Pavanam sans-serif; Color: black;";
        a1.style = "display:block";
        pic.appendChild(p2);

        // Remove
        var p3 = document.createElement("div");
        var a3 = document.createElement("a");
        a3.setAttribute("href", "");
        a3.innerHTML = "Remove";
        a3.num = i;
        p3.appendChild(a3);
        p3.style = "position:absolute;top:"+ (85+150*i) +"px;left:85%;width:15%; font:14px Pavanam sans-serif; Color: black;";
        pic.appendChild(p3);

        a3.addEventListener("click", function() {
            var element = event.target;
            var pa=element.parentNode;
            var num = productList[element.num].q;
            console.log(element.num);
            productList.splice(element.num, 1);
            localStorage.setItem("savedList", JSON.stringify(productList));
            console.log(element.num);
            var nowQ = Number(JSON.parse(localStorage.getItem("savedTotalQuant")))-num;
            console.log(nowQ);
            localStorage.setItem("savedTotalQuant", JSON.stringify(nowQ));
            document.getElementById("cartQ").textContent= nowQ;
            console.log(nowQ);
            onLoad();
        });


        //Price
        var p4=document.createElement("div");
        var t4=document.createTextNode("$ 20.00");
        p4.appendChild(t4);
        p4.style = "position:absolute;top:"+ (10+150*i) +"px;left:40%;width:15%; font:16px Pavanam sans-serif; Color: black;";
        pic.appendChild(p4);

        //Qty
        var p5=document.createElement("div");
        var t5=document.createTextNode(productList[i].q);
        p5.appendChild(t5);
        p5.style = "position:absolute;top:"+ (10+150*i) +"px;left:60%;width:15%; font:16px Pavanam sans-serif; Color: black;";
        pic.appendChild(p5);

        //Total Price
        var p6=document.createElement("div");
        var t6=document.createTextNode("$ " + productList[i].q*20 + ".00");
        p6.appendChild(t6);
        p6.style = "position:absolute;top:"+ (10+150*i) +"px;left:80%;width:15%; font:16px Pavanam sans-serif; Color: black;";
        pic.appendChild(p6);

        //Wishlist
        var p7 = document.createElement("div");
        var a7 = document.createElement("a");
        p7.setAttribute("id", "wl");
        a7.setAttribute("href", "");
        a7.innerHTML = "Add to Wishlist";
        p7.appendChild(a7);
        p7.style = "position:absolute;top:"+ (68+150*i) +"px;left:85%;width:15%; font:14px Pavanam sans-serif; Color: black;";
        pic.appendChild(p7);

    }
}

function onLoad () {
    document.getElementById("circle").setAttribute("src", "./images/cartblue.png" );
    document.getElementById("cartQ").textContent= JSON.parse(localStorage.getItem("savedTotalQuant"));
    var amount = JSON.parse(localStorage.getItem("savedList")).length;
    var productList = JSON.parse(localStorage.getItem("savedList"));
    if (amount === 0){
        document.getElementById("empty").textContent = "Your cart is empty";
    }
    drawPic(productList, amount);

    for (var i = 0; i < amount; i++) {
        console.log();
    }

    // total quantity
    var totalNumber = Number(JSON.parse(localStorage.getItem("savedTotalQuant")));
    var subtotal = totalNumber * 20;
    var tax = Math.round(subtotal * 0.15);
    var tt = subtotal+tax;
    document.getElementById("cartQ").textContent= totalNumber;
    document.getElementById("st").textContent = "$ "+subtotal + ".00";
    document.getElementById("ship").textContent = "TBD";
    document.getElementById("tax").textContent = "$ "+tax + ".00";
    document.getElementById("tt").textContent = "$ "+tt + ".00";

    // add to wish list
    var wlist=[];
     // localStorage.setItem("savedList", JSON.stringify(list));  //temporary:clear storage 
    var wNowList = JSON.parse(localStorage.getItem("savedWishList")); 
    if (wNowList==null){
        localStorage.setItem("savedWishList", JSON.stringify(list));
    }
    document.getElementById("wl").addEventListener("click", function() {
        // get values
        var wNowList = JSON.parse(localStorage.getItem("savedWishList"));
        // push to item array
        wNowList.push(new item(product.c,product.n));
        localStorage.setItem("savedWishList", JSON.stringify(wNowList));
    });


}
