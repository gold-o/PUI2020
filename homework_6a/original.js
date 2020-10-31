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
class CinnamonBun {
    constructor (price, quantity, glaze) {
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

    var cinnamonOrder = new CinnamonBun (price, quantityChosen, glazeChosen);
    order.push(cinnamonOrder);
    //alert (order.length);

    cartAmount (order.length);
}

function cartAmount(amount) {
    var cartNum = document.getElementById('cartnum').innerHTML;
    cartnum.innerHTML = amount;
}