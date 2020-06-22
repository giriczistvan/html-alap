/* összegzés
összeg = 0
CIKLUS AMÍG van még szám, ADDIG
  szám = következő elem
  összeg = összeg + szám
CIKLUS VÉGE
*/
let numericarray =[1,2,4,3,6,8,7,5,9];
let summa = 0;
for (let i=0; i<numericarray.length; i++){
    sum+= numericarray[i];
}
console.log("sum"+sum);

/*SZÁMLÁLÁS
db = 0
CIKLUS AMÍG van még szám, ADDIG
  szám = következő elem
  HA igaz a feltétel szám-ra, AKKOR
    db = db + 1
  FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db=0;
for (let i = 0; i < numericarray.length; i++) {
    if (mumericarray[i]%2==0) {
        db++;
    }
    
}
console.log("páros számok "+db);

numericarray.forEach(element => {
    con
});

/*SZÉLSŐÉRTÉK*/
let legnagyobb = numericarray[0];
let index =0;
for (let i =1; i< numericarray.length; i++ )
{
    if (mumericarray[i]>legnagyobb){
        legnagyobb = numericarray[i];
        index=i;
    }
}
console.log("a legagyobb szám :"+legnagyobb+" A következö indexen van:"+i+" ***" )