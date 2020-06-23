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

//select elem kitöltése
let toppings =["szalonna","hagyma","golyóscsapágy","extra sonka","libamáj"];
let toppingselect = document.querySelector("#feltét");
let index =0;
while (index< toppings.length) {
    let options = document.createElement("option");
    options.value = index;
    options.innerHTML = toppings[index];
    toppingselect.appendChild(options);
    index++;
}