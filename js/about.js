let users =[
  {surname:"Kovács",firstname: "Balázs",age:22} , 
  {surname:"Nagy",firstname: "Tamás",age:19},  
  {surname:"Fekete",firstname: "Erzsébet",age:42},  
  {surname:"Kolompár",firstname: "Zsigmond",age:82},  
  {surname:"Hombre",firstname: "Bombre",age:29},
  {surname:"Kalapos",firstname: "Máté",age:25},  
  {surname:"Weisz",firstname: "Fanni",age:32},  
  {surname:"Tóth",firstname: "Emese",age:46},  

];
let tablebody = document.querySelector("#userTable tbody");
for (let k in users){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = parseInt(k)+1;
    tr.appendChild(td);
    tablebody.appendChild(tr);
}