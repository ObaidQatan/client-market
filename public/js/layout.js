localStorage.clear();
localStorage.setItem("maxNumberOfProducts" , document.getElementById("bob").innerHTML);

var totalQuantity = document.getElementById("total-quantity");//html element
var cart_float = document.getElementById("cart-float");//html element
var menuType = document.getElementById("menu-type");//html element
setInterval(()=>{totalQuantity.innerHTML = localStorage.getItem("totalQuantity");
if(totalQuantity.innerHTML == 0){cart_float.style.display = "none"}else{cart_float.style.display = "initial"}

if(localStorage.getItem("page")==0){menuType.innerHTML = `نوع القائمة الأول`}
else if(localStorage.getItem("page")==1){menuType.innerHTML = `نوع القائمة الثاني`}
else{menuType.innerHTML = ``}
});