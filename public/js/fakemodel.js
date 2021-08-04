const addProduct_Btn = document.getElementById("add-product");//add button
const removeProduct_Btn = document.getElementById("remove-product");//remove button
const productTitle = document.getElementById("product-title").innerHTML;//product title
var productQuantity = document.getElementById("product-quantity");//product quantity

//=================
var PRODUCT_QUANTITY = 0;
const ID = 7338;
var addOrRemove_Counter = 0;
const PRICE = 30;
var isAlreadyZero;
//=================

addProduct_Btn.onclick = ()=>{
    isAlreadyZero = false;
    PRODUCT_QUANTITY++; addOrRemove_Counter = 1;
    productQuantity.innerHTML = PRODUCT_QUANTITY;
    updateProduct(addOrRemove_Counter);
    addOrRemoveType(PRODUCT_QUANTITY , "add");
}
removeProduct_Btn.onclick = ()=>{
    isAlreadyZero = true;
    addOrRemove_Counter = 0;
    if (PRODUCT_QUANTITY != 0) {isAlreadyZero = false; PRODUCT_QUANTITY--;  addOrRemove_Counter = -1};
    productQuantity.innerHTML = PRODUCT_QUANTITY;
    updateProduct(addOrRemove_Counter);
    console.log(isThere(ID))
    if(isThere(ID) == false){localStorage.removeItem(ID)};
    addOrRemoveType(PRODUCT_QUANTITY , "remove");
}
//=================

//=================
function updateProduct(addOrRemoveByOne){
    var TOTAL_QUANTITY = parseInt(localStorage.getItem("totalQuantity"));
    var product = {"title": `${productTitle}`, "quantity": PRODUCT_QUANTITY , "price": PRODUCT_QUANTITY*PRICE}
    localStorage.setItem(ID , JSON.stringify(product));

    localStorage.setItem("totalQuantity" , TOTAL_QUANTITY + addOrRemoveByOne);
    console.log(`Total Quantity: ${localStorage.getItem("totalQuantity")}`);
}
//=============
function isThere(someID){
    
    if (JSON.parse(localStorage.getItem(ID)).quantity > 0 ) {
        return true;
    } else {
        return false;
    }
}
//===========
function addOrRemoveType(productQuantityProvidedHere , keyProvidedHere){
    var initialNumberOfTypes = parseInt(localStorage.getItem("numberOfTypesOfProducts"));
    
    if(productQuantityProvidedHere == 0){
        if(!isAlreadyZero){
            localStorage.setItem("numberOfTypesOfProducts" , initialNumberOfTypes - 1)}
    }else{
        if(productQuantityProvidedHere == 1 && keyProvidedHere == "add"){
            localStorage.setItem("numberOfTypesOfProducts" , initialNumberOfTypes + 1);
        }
    }
}