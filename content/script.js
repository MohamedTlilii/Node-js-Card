let btnsInc = document.getElementsByClassName("plus-btn");
let btnsDec = document.getElementsByClassName("minus-btn");
let btnsDel = document.getElementsByClassName("fa-trash-alt");
let btnsFav = document.getElementsByClassName("fa-heart");

for (let i = 0; i < btnsInc.length; i++) {
    btnsInc[i].addEventListener("click", function () {
        btnsInc[i].nextElementSibling.innerHTML++;
        Total();
    });
}

//DECREMENT QUANTITY
for (let i = 0; i < btnsDec.length; i++) {
    btnsDec[i].addEventListener("click", function () {
        if (btnsDec[i].previousElementSibling.innerHTML > 0) {
            btnsDec[i].previousElementSibling.innerHTML--;
            Total();
        }
    });
}


// DELETE CARD
for (let i = 0; i < btnsDel.length; i++) {
    btnsDel[i].addEventListener("click", function () {
        btnsDel[i].parentElement.parentElement.parentElement.remove();
        Total();
    });
}

//TOGGLE FAV
for (let j = 0; j < btnsFav.length; j++) {
    btnsFav[j].addEventListener("click", function () {
        btnsFav[j].classList.toggle("toggleHeart");
    });
}

function Total() {
    let qtite = document.getElementsByClassName("qte");
    let prices = document.getElementsByClassName("unit-price");
    let totalPrice = document.querySelector(".total-price");
    let sum = 0;
    for (let i = 0; i < qtite.length; i++) {
        sum = sum + qtite[i].innerHTML * prices[i].innerHTML;
    }
    return (totalPrice.innerHTML = sum);
}
