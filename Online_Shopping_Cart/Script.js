let products = [
    {name: "Laptop", price: 35000, categories: "Electronics"},
    {name: "Headphoenes", pricee: 1500, categories: "Accessories"},
    {name: "Mouse", price: 500, categories: "Accessories"},
    {name: "Phone", price: 20000, categories: "Electronics"},
    {name: "USB", pricee: 150, categories: "Accessories"},
    {name: "Smart Watch", price: 5000, categories: "Electronics"},
];
//step 2
products.sort(function(a, b){
    return a.price - b.price;
});

//step 3
products.forEach(function(product, index){
    console.log(index + ":" + product.name + "- ₱" +
        product.price + "(" + product.category + ")");
}
    );
//step 4
let cart = [];
//step 5
function addToCart(productName){
   let found = false;
   for (let i = 0; i < products.length; i++){
    if(products[i].name === productName){
        cart.push(products[i]);
        console.log(productName + " added to cart!");
        found = true;
        break;
    }
   }
if(!found){
    console.log("Product not found!");
  }
}

//step 6
addToCart("Laptop");
addToCart("Mouse");
addToCart("Phone");

console.log("Current cart:", cart);

//step 7 
function removeLastItem(){
    if(cart.length > 0){
        let removed = cart.pop();
        console.log(removed.name + " removed from cart!");
    }else{
        console.log("Cart is empty!");
    }
}
   //step 8 
function removeFirstItem(){
    if(cart.length > 0){
        let removed = cart.shift();
        console.log(removed.name + " removed from cart!");
    }else{
        console.log("Cart is empty!");
    }
}
//step 9 
function showCart(){
    console.log("=== CART(" + cart.length + " items) ===");
    cart.forEach(function(item, index){
        console.log(index + ": " + item.name + "- ₱" + item.price);
    });
}
//step 10
function getTotalPrice () {
    return cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0); 
}

console.log("Total Price: ₱" + getTotalPrice());


removeLastItem();
showCart();
console.log("Total Price: ₱" + getTotalPrice());

//step 11
function getElectronics(){
    return cart.filter(function(item){
        return item.categories === "Electronics";
    });
}

console.log("Electronics in cart:", getElectronics());

//step 12
function applyDiscount(cartItems, discountPercent){
    return cartItems.map(function(item){
        return {
            name: item.name,
            originalPrice: item.price,
            discountedPrice: item.price * (1 - discountPercent / 100)
        };
    });
        }

        let discountedCart = applyDiscount(cart, 10);
        console.log("Cart with 10% discount:", discountedCart);
//step 13
        function checkout(){
            let total = getTotalPrice();
            console.log("Original Total: ₱" + total);

            if (total > 20000){
                let discounted = applyDiscount(cart, 10);
                let discountedTotal = discounted.reduce(function(sum, item)
                {
                    return sum + item.discountedPrice;
                }, 0);
                console.log("Discounted applied! new Total: ₱" + discountedTotal.toFixed(2));
            }else{
                console.log("Total: ₱" + total);
            }
            }

            checkout();
//step 14
            function removeItemByName(productName){
                for (let i = 0; i < cart.length; i++){
                    if(cart[i].name === productName){
                        cart.splice(i, 1);
                        console.log(productName + " removed!");
                        return;
                    }
                }
                console.log("Item not found in cart!");
            }

            addToCart("Headphones");
            removeItemByName("Mouse");
            showCart();
//step 15
            cart = [];

            addToCart("Laptop");
            addToCart("Smart Watch");
            addToCart("USB Cable");
            addToCart("Headphones");

            showCart();
            checkout();

            removeItemByName ("USB Cable");
            showCart();