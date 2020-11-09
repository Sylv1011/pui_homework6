
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
        a1.setAttribute("href", "");
        a1.innerHTML = "Edit";
        p2.appendChild(a1);
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

        // a3.addEventListener("click", function() {
        //     var element = event.target;
        //     var pa=element.parentNode;
        //     var num = productList[element.num].q;
        //     console.log(element.num);
        //     productList.splice(element.num, 1);
        //     localStorage.setItem("savedList", JSON.stringify(productList));
        //     console.log(element.num);
        //     var nowQ = Number(JSON.parse(localStorage.getItem("savedTotalQuant")))-num;
        //     console.log(nowQ);
        //     localStorage.setItem("savedTotalQuant", JSON.stringify(nowQ));
        //     document.getElementById("cartQ").textContent= nowQ;
        //     console.log(nowQ);
        //     onLoad();
        // });


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


        //Wishlist
        var p7 = document.createElement("div");
        var a7 = document.createElement("a");
        a7.setAttribute("href", "");
        a7.setAttribute("id", "wl");
        a7.innerHTML = "Add to Wishlist";
        p7.appendChild(a7);
        p7.style = "position:absolute;top:"+ (68+150*i) +"px;left:85%;width:15%; font:14px Pavanam sans-serif; Color: black;";
        pic.appendChild(p7);
    }
}

function onLoad() {

    document.getElementById("circle").setAttribute("src", "./images/cartblue.png" );
    document.getElementById("cartQ").textContent= JSON.parse(localStorage.getItem("savedTotalQuant"));

    var amount = JSON.parse(localStorage.getItem("savedWishList")).length;
    var productList = JSON.parse(localStorage.getItem("savedWishList"));
    if (amount === 0){
        document.getElementById("empty").textContent = "Your list is empty";
    }
    drawPic(productList, amount);

    for (var i = 0; i < amount; i++) {
        console.log();
    }

    // total quantity
    var totalNumber = Number(JSON.parse(localStorage.getItem("savedTotalQuant")));

    document.getElementById("cartQ").textContent= totalNumber;

}



