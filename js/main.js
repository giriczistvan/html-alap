function calcamount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='összeg_input']");
    let vegösszeg = parseInt(amountInput.value) * price;
    //alert(" a fizetendő összeg "+vegösszeg+" Ft" );
    let showamount = document.querySelector("span.show-amount");
    showamount.innerHTML = vegösszeg;
}


let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandler=function(ev){this.parentElement.style.display ='none';}
//itt a span elemre fog történni az esemény
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click",alertCloseEventHandler    
    );
    
}
