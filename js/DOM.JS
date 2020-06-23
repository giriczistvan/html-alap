document -> #document ben elérhető az egész onvrdisplayblur

document.getElementById('id') // ha nem létezik NUll lesz a visszatérési érték
document.getElementsByName() // töböt kapok vissza ha van vagy üres tömb 
document.getElementsByClassName()
document.getElementsByTagName("h3") //A class attribútum alapján visszakapjuk azokat a HTML elemeket egy tömbben.

********* a rugalmasság miatt ezeket használják már
document.querySelector("css_selector") //Ez a függvény minden elemet visszaad nekünk, aminek a típusa a megadott tag.
// ez mindig egy elemet ad vissza az elsőt adja
Ez a függvény CSS selectorok alapján keres nekünk HTML elemeket, majd visszaadja az első találatot.
document.querySelectorAll() // ez visszaadja az összes elemet

Szintén CSS selectorok alapján keres nekünk HTML elemeket, de minden egyező elemet visszaad nekünk.

element nevű objektumot kapok visszaad
// az element objektumot bővítem egy metódussal
Element.prototype.seturgent = function() {
    this.style.border =brown;
}

.getAttribute("class") "name" "id" "type" /attributomok lekérdezése
.attributes //mindent visszaad
.setAttribute("type","email")

Tömeges módosítás
const myNodelist = document.querySelectorAll("p");
let i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.backgroundColor = "red";
}
var myNodelist = document.querySelectorAll("p");
for (var k in myNodelist) {
  if (myNodelist[k].style) { // a nodelist array like objektum
    myNodelist[k].style.backgroundColor = "red";
  }
}
//tömeges módosítás
function massModify(selector,attr,valu) {
    let nodelist= document.querySelectorAll(selector);
    for(let i=0;i<nodelist.length; i++){
        nodelist[i][attr]= value;

    }
}
massModify("input","placeholder","érté")

SZÜLŐ - GYEREK KAPCSOLAT
document.querySelector("#valami").childElementCount //adott elementnek hány gyereke van
document.querySelector("#valami:nth-child(2)").children
document.querySelector("#valami:nth-child(2)").childNodes // A szöveges nodokat is beleszámolja
.firsChild vs. .firstElementChild
.lastChild vs .lastElementChild

//ELEMEK HOZZÁADÁSA GYEREKKÉNT
let helpText = document.createElement("small");
helpText.className = "form-text tex-muted";
helpText.innerHTML = 'adja meg a feltéteket'
let parent = document.querySelector(div.fom-group:nth-child(1));
parent.appendChild(helpText);

parent.removeChild(helpText);

//ESEMÉNYKEZELŐK LÉTREHOZÁSA ESEMÉNYEK

let sendbutton = document.querySelector("form .btn.btn-primary");
sendbutton.onclick = function ()) {
    elert ("hello")
}

.onclick = függvényneve_zaronelkul //Az összese esemény felülíródik

// több esemény hozzárendelése!!!
sendbutton.addEventListener("click",funkction(){elert("")})
window.addEventListener("resize",funkction(){})
// .on+eseményt kell megadni!!

//EGÉR ESEMÉNYEK
let orderForm = document.querySelector("#orderform");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault(); //az alapműködés megakadályozása
    console.log(this); //az ürlapot magát adja vissza
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i=0; i<inputs.length;i++){
        values[inputs[i].name] =inputs[i].value;

    } //olyan formában ad vissza adatokat hogy nem frissül le az
    //oldalam


    ***********
    //SZÜLŐK
    ************

    let aleretCloseButtons =document.querySelectorAll(.close[data-dismiss='alert]'])


})