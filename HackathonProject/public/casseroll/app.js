// Elements
var loveBtn = document.getElementById("love-btn");
var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

// Index
var status = 0;
var positionUnit = -100;

function switchBtn() {

    if (status == 0) {
        console.log(status);
        loveBtn.setAttribute("class", "love-btn fas fa-heart fa-lg");
        status = 1;
    } else if (status == 1) {
        loveBtn.setAttribute("class", "love-btn far fa-heart fa-lg");
        status = 2;
    }
    else if (status == 2) {
        loveBtn.setAttribute("class", "love-btn far fa-heart fa-lg");
        status = 3;
    }
    else if (status == 3) {
        loveBtn.setAttribute("class", "love-btn far fa-heart fa-lg");
        status = 0;
    }

}

function slideImg(x) {

    var i;

    for (i = 0; i < caroBtns.length; i++) {
        caroBtns[i].style.backgroundColor = "#ffffff44";
    }

    caroBtns[x].style.backgroundColor = "#fff";

    position = x * positionUnit;
    imgList.style.left = position + "%";

}