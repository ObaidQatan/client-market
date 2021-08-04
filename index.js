const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const PORT = process.env.PORT||5000;

app.use(express.static(path.join(__dirname,'public')))
app.use('/css' , express.static(path.join(__dirname,'public/css')))
app.use('/js' , express.static(path.join(__dirname,'public/js')))



app.use(expressEjsLayouts);
app.set('view engine' , 'ejs');



//Routing
app.get('' , (req , res)=>{
    app.use('/public',express.static(path.join(__dirname,'public')))
    res.render('pages/main-page.ejs', {available_products});
})

//-----

app.get('/products' , (req , res)=>{
    app.use('/public',express.static(path.join(__dirname,'public')))
    res.render('pages/page1.ejs' , {available_products});
})

//-----

app.get('/products2' , (req , res)=>{
    app.use('/public',express.static(path.join(__dirname,'public')))
    res.render('pages/page2.ejs' , {available_products_2});
})

//-----

app.get('/setLocation' , (req , res)=>{
    app.use('/public',express.static(path.join(__dirname,'public')))
    res.render('pages/locationPage.ejs' , {location_properties});
})

//-----

app.get('/final' , (req , res)=>{
    app.use('/public',express.static(path.join(__dirname,'public')))
    res.render('pages/final.ejs' , {location_properties});
})

//-----

app.get('/payment' , (req , res)=>{
    app.use('/public',express.static(path.join(__dirname,'public')))
    res.render('pages/payment.ejs' , {location_properties});
})

















//functions
var available_products = [
    {title: "اسم المنتج الأول" , id: 8850 , price: 20},
    {title: "اسم المنتج الثاني" , id: 7338 , price: 30},
    {title: "اسم المنتج الثالث" , id: 446 , price: 10},
    {title: "اسم المنتج الرابع" , id: 798 , price: 60}
]

var available_products_2 = [
    {title: "منتج أول" , id: 001 , price: 118},
    {title: "منتج ثاني" , id: 002 , price: 239},
    {title: "منتج ثالث" , id: 003 , price: 110},
    {title: "منتج رابع" , id: 004 , price: 90}
]
//====
var location_properties = {
    LATITUDE: 13.0352764,
    LONGITUDE: 77.5536076,
    MAX_DISTANCE_ALLOWED: 5100
};




//listen
app.listen(PORT , ()=>{console.log(`Listening on port ${PORT}`)});