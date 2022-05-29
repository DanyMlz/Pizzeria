//Active and desactive 
var navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
    //classList change styles
};





//Add 
var account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = function(){
    account.classList.add('active');
};


//Remove 
document.querySelector('#close-account span').onclick = function(){
    account.classList.remove('active');
};





//Add
var myOrders = document.querySelector('.my-orders');
document.querySelector('#order-btn').onclick = () =>{
    myOrders.classList.add('active');
}

//Remove
document.querySelector('#close-orders span').onclick = () =>{
    myOrders.classList.remove('active');
}





//Add
var shoppingCart = document.querySelector('.shoping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.add('active');
}

//Remove
document.querySelector('#close-cart span').onclick = () =>{
    shoppingCart.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


// next button
var slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
var index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//Faq
var accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(des => {
    des.onclick = () =>{
        accordion.forEach(remove => remove.classList.remove('active'));
        des.classList.add('active');
    }
});