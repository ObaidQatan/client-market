

var NEXT_COUNT = 0;
const nextSubmit_Btn = document.getElementById("next-submit");
const backSubmit_Btn = document.getElementById("back-submit");
const endSubmit_Btn = document.getElementById("end-submit");
const totalPrice_Container = document.getElementById("totalPrice-container");
var totalPrice = document.getElementById("total-price");//input field
var maxNumberOfProducts = localStorage.getItem("maxNumberOfProducts");

var final_cart = [];
//============

nextSubmit_Btn.onclick = ()=>{
    if(NEXT_COUNT == 2){ endShopping()}
    NEXT_COUNT++;

    backSubmit_Btn.style.display = "initial";
    checkNextButton();
    console.log(NEXT_COUNT)
}
backSubmit_Btn.onclick = ()=>{
    NEXT_COUNT--;

    if(NEXT_COUNT == 0)backSubmit_Btn.style.display = "none";
    checkNextButton();
    console.log(NEXT_COUNT)
}
//end button was here

setInterval(()=>{totalPrice.setAttribute("value" , countTotalPrice());
 localStorage.setItem("totalPrice" , countTotalPrice());
 localStorage.setItem("page" , NEXT_COUNT)
 checkNextButton();

 if(localStorage.getItem("totalQuantity") == 0){nextSubmit_Btn.disabled = true; nextSubmit_Btn.style.backgroundColor = "rgb(0, 80, 0)"}else{
     nextSubmit_Btn.disabled = false; nextSubmit_Btn.style.backgroundColor = "green"}

    if(NEXT_COUNT == 2 && localStorage.getItem("gps-token") != "NVR$44EU5RHDHHF9C&CEGQ"){
        nextSubmit_Btn.style.display = "none";
    }else if(NEXT_COUNT == 2 && localStorage.getItem("gps-token") == "NVR$44EU5RHDHHF9C&CEGQ"){
        nextSubmit_Btn.style.display = "initial";
    }
    
});
 
//=============
function checkNextButton(){
    if(NEXT_COUNT == 3){nextSubmit_Btn.style.display = "none"; totalPrice_Container.style.display = "none";
}else{totalPrice_Container.style.display = "initial"; nextSubmit_Btn.style.display = "initial"};

if(NEXT_COUNT == 2){nextSubmit_Btn.innerHTML = "تأكيد"}{
    nextSubmit_Btn.innerHTML = "التالي";
}
}

//==========
function endShopping(){
    
    var TOTAL_QUANTITY = parseInt(localStorage.getItem("totalQuantity"));

for(var i = 0; final_cart.length < localStorage.getItem("numberOfTypesOfProducts"); i++){
    if(localStorage.getItem(i) != null && localStorage.getItem(i) != undefined){
        final_cart.push(localStorage.getItem(i)); 
    }
}

localStorage.setItem("products" , final_cart);
console.log(final_cart+" it is "+typeof(final_cart));
}
//=========
function countTotalPrice(){
    
    if(localStorage.getItem("totalQuantity") != 0){
        var TOTAL_PRICE = 0;
        

        for(var i = 0; i < 10000; i++){
            if(localStorage.getItem(i) != null && localStorage.getItem(i) != undefined){
                TOTAL_PRICE = JSON.parse(localStorage.getItem(i)).price + TOTAL_PRICE;
            }
        }
        return TOTAL_PRICE;
    }
    return 0;
}
