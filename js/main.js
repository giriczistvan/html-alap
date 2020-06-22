function calcamount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='összeg_input']");
    let vegösszeg = parseInt(amountInput.value) * price;
    //alert(" a fizetendő összeg "+vegösszeg+" Ft" );
    let showamount = document.querySelector("span.show-amount");
    showamount.innerHTML = vegösszeg;
}
