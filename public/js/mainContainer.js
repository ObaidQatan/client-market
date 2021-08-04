//define
var middleModule = document.getElementById("middleModule");
var serviceModule = document.getElementById("serviceModule");
var serviceModule_2 = document.getElementById("serviceModule_2");
var locationModule = document.getElementById("locationModule");
var finalModule = document.getElementById("finalModule");
var PAGE_NUMBER;
setInterval(()=>{
     PAGE_NUMBER = localStorage.getItem("page") //keep checking page number

    switch(PAGE_NUMBER){ //switch page number
    
        case "1": //service_2 module....cancel others
        //set
        serviceModule_2.style.height = "70vh";

        console.log("this is case 1")
        //cancel
        serviceModule.style.height = "0px";
        finalModule.style.height = "0px";
        locationModule.style.height = "0px";
        break; 
    
        case "2":  //location module....cancel others
        //set
        locationModule.style.height = "70vh";

        console.log("this is case 2")
        //cancel
        serviceModule.style.height = "0px";
        finalModule.style.height = "0px";
        serviceModule_2.style.height = "0px";
        break; 

        case "3":  //service_4 module....cancel others
        //set
        finalModule.style.height = "120vh";
        console.log("this is case 3")
        //cancel
        serviceModule.style.height = "0px";
        serviceModule_2.style.height = "0px";
        locationModule.style.height  = "0px";
        break; 

        case "0": //service_1 modules....cancel others
        //set
        serviceModule.style.height = "70vh";
        //cancel
        serviceModule_2.style.height = "0px";
        finalModule.style.height = "0px";
        locationModule.style.height = "0px";

        console.log("this is case default")
        break; 
    }
}, 500)