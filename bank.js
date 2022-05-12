let withdrawBtn = document.getElementById('withdraw');
let balanceBtn = document.getElementById('balance');
let depositBtn = document.getElementById('deposit');



withdrawBtn.addEventListener('click', function() {
let withdrawMoney = prompt('سوممىسىنى كىرگۈزۈڭ');
withdrawMoney = parseInt(withdrawMoney);
console.log(withdrawMoney);
if (withdrawMoney < balance) {
    balance = balance - withdrawMoney;
    console.log(balance);
}else {
    alert ('مەبلەغ يېتىشمەسلىك');
}
});


let balance = 0;
balanceBtn.addEventListener('click', function() {
    if(balance < 100) {
        alert ('سىزنىڭ پۇل تەڭپۇڭلۇقىڭىز 100$ دىن تۆۋەن');
    };
    alert ("$"+balance);
});



depositBtn.addEventListener('click', function() {
    alert (' ئامانەت 1000$ دىن ئېشىپ كەتمەيدۇ')
    let amount = prompt('سوممىسىنى كىرگۈزۈڭ');
    amount = parseInt(amount);
    if (amount <= 1000){
        balance = amount + balance;
    }else {
     alert ('ئامانەت مەغلۇپ بولدى: سوممىسى 1000$ دىن ئېشىپ كەتتى');
    };
});