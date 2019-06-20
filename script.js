let applePrice = 10;
let totalBill = 0;
let userPayment = 0;
let AppleQuantity = 0;
let OrangeQuantity = 0;
let BananaQuantity = 0;
function addApple() {
        userPayment = Number(document.querySelector('#mytotal-money').value);
        totalBill = Number(document.querySelector('p span').innerHTML);

        if (userPayment <= totalBill) {
                alert('You donot have enough money')
        }
        else {
                document.querySelector("#addapple-amount").innerHTML = AppleQuantity;
                AppleQuantity++;
                document.querySelector("#addapple-amount").innerHTML = AppleQuantity;
                document.querySelector('p span').innerHTML = (AppleQuantity * 10) + (OrangeQuantity * 15);

        }

}

function addOrange() {
        userPayment = Number(document.querySelector('#mytotal-money').value);
        totalBill = Number(document.querySelector('p span').innerHTML);
        if (userPayment <= totalBill) {
                alert('You donot have enough money')
        }
        else {
                document.querySelector("#addorange-amount").innerHTML = OrangeQuantity;
                OrangeQuantity++;
                document.querySelector("#addorange-amount").innerHTML = OrangeQuantity;
                document.querySelector('p span').innerHTML = (AppleQuantity * 10) + (OrangeQuantity * 15) + (BananaQuantity * 7);

        }

}


function addBanana() {
        userPayment = Number(document.querySelector('#mytotal-money').value);
        totalBill = Number(document.querySelector('p span').innerHTML);
        if (userPayment <= totalBill) {
                alert('You donot have enough money')
        }
        else {
                document.querySelector("#addbanana-amount").innerHTML = BananaQuantity;
                BananaQuantity++;
                document.querySelector("#addbanana-amount").innerHTML = BananaQuantity;
                document.querySelector('p span').innerHTML = (AppleQuantity * 10) + (OrangeQuantity * 15) + (BananaQuantity * 7);

        }

}

function minusApple() {
        document.querySelector("#addapple-amount").innerHTML = AppleQuantity;
        AppleQuantity--;
        document.querySelector("#addapple-amount").innerHTML = AppleQuantity;
        document.querySelector('p span').innerHTML = (AppleQuantity * 10) - (OrangeQuantity * 15);

}

      








































































