function changePrice1 (){
    document.getElementById('quantity').innerHTML = '$3.00';
}
function changePrice3 (){
    document.getElementById('quantity').innerHTML = '$8.00';
}
function changePrice6 (){
    document.getElementById('quantity').innerHTML = '$15.00';
}
function changePrice12 (){
    document.getElementById('quantity').innerHTML = '$30.00';
}

var order=[];
var oldArr=[];
class CinnamonBun {
    constructor (item, price, quantity, glaze) {
        this.item = item
        this.price = price
        this.quantity = quantity
        this.glaze = glaze
    }
}
function addToCart () {
    //console.log (price);
    var quantity = document.getElementsByName('quantityoption');
    //alert (quantity.length);
    var glaze = document.getElementsByName('glazeoption');
    //alert (glaze.length);

    
    for (var x=0; x < quantity.length; x++) {
        if (quantity[x].checked) {
            var quantityChosen = quantity[x].value;
            //alert (quantityChosen);
        }  
    }
    for (var x=0; x < glaze.length; x++) {
        if (glaze[x].checked) {
            var glazeChosen = glaze[x].value;
            //alert (glazeChosen);
        } 
    }
    var price = document.getElementById('quantity').innerHTML;

    var item = document.getElementById('itemtitle').innerHTML; 

    var cinnamonOrder = new CinnamonBun (item, price, quantityChosen, glazeChosen);
    order.push(cinnamonOrder);
    //alert (order.length);

    cartAmount (order.length);
}

function cartAmount(amount) {
    var cartNum = document.getElementById('cartnum').innerHTML;
    cartnum.innerHTML = amount;
}

function cartPage () {
    localStorage.setItem ('cartorder', JSON.stringify(order));
    //stores order array
    window.location.href="cart.html";
    //navigates to cart page
}

function retrieveCart() {
    oldArr = JSON.parse(localStorage.getItem('cartorder'));
    console.log(oldArr);

    var orderInfo = document.getElementById('orderinfo');
    var total = document.getElementById
    
    for (var x = 0; x < oldArr.length; x=x+1) {
        var bun = oldArr[x];
        var total = 0;
        var bunItem = bun.item;
        var bunQuantity = bun.quantity;
        var bunGlaze = bun.glaze;
        var bunPrice = bun.price;
    
        orderInfo.innerHTML = orderInfo.innerHTML + 
        '<div id="items"> ITEM: ' + 
        '<div id="itemtitle">' + bunItem + '</div>'  + 
        '<div onclick="removeItem(' + x + ')" id="remove"> <u> REMOVE ITEM </u> </div>' + '</div>' +
        '<div id="quantity"> QUANTITY: ' + 
        '<div id="selectquantity">' + bunQuantity + '</div>' + '</div>' + 
        '<div id="glaze"> GLAZE: ' + 
        '<div id="selectglaze">' + bunGlaze + '</div>' + '</div>' +
        '<div id="total"> TOTAL: ' + 
        '<div id="price">' + bunPrice + '</div>' + '</div>' + '<br /><br />';

        var total = (total + bun.price);
        alert (bun.price);
        document.getElementById('totalprice').innerHTML = 'SUBTOTAL: ' + total;

    }
}

function removeItem (x) {
    oldArr.splice (x,1);
   
    var orderInfo = document.getElementById('orderinfo');
    orderInfo.innerHTML = ' '

    for (var x = 0; x < oldArr.length; x=x+1) {
        var bun = oldArr[x];
        var total = 0;
        if (bun) {
            var bunItem = bun.item;
            var bunQuantity = bun.quantity;
            var bunGlaze = bun.glaze;
            var bunPrice = bun.price;
    
            orderInfo.innerHTML = orderInfo.innerHTML + 
            '<div id="items"> ITEM: ' + 
            '<div id="itemtitle">' + bunItem + '</div>'  + 
            '<div onclick="removeItem(' + x + ')" id="remove"> <u> REMOVE ITEM </u> </div>' + '</div>' +
            '<div id="quantity"> QUANTITY: ' + 
            '<div id="selectquantity">' + bunQuantity + '</div>' + '</div>' + 
            '<div id="glaze"> GLAZE: ' + 
            '<div id="selectglaze">' + bunGlaze + '</div>' + '</div>' +
            '<div id="total"> TOTAL: ' + 
            '<div id="price">' + bunPrice + '</div>' + '</div>' + '<br />abcdef<br />';

            var total = total + bun.price;

            document.getElementById('totalprice').innerHTML = total;
        }

    }
}
