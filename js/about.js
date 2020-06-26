let users = [
  { surname: "Kovács", firstname: "Balázs", age: 22 },
  { surname: "Nagy", firstname: "Tamás", age: 19 },
  { surname: "Fekete", firstname: "Erzsébet", age: 42 },
  { surname: "Kolompár", firstname: "Zsigmond", age: 82 },
  { surname: "Hombre", firstname: "Bombre", age: 29 },
  { surname: "Kalapos", firstname: "Máté", age: 25 },
  { surname: "Weisz", firstname: "Fanni", age: 32 },
  { surname: "Tóth", firstname: "Emese", age: 46 },

];


let tablebody = document.querySelector("#userTable tbody");

let createTD = (parent,html=0) => {
  let td = document.createElement("td");
    if(html){
      td.innerHTML = html;
    };
  parent.appendChild(td);
};

let createButtonGroup = parent => {

  let group = document.createElement("div");
  group.className = "btn-group";
  let btnInfo = document.createElement("button");
  btnInfo.className = "btn-info btn";
  btnInfo.innerHTML = "Módosítás";

  let btnDanger = document.createElement("button");
  btnDanger.className = "btn-danger btn";
  btnDanger.innerHTML = "Törlés";
  group.appendChild(btnInfo);
  group.appendChild(btnDanger);
  let td = document.createElement("td");
  td.appendChild(group);
  parent.appendChild(td);


}

for (let k in users) {
  let tr = document.createElement("tr");
  createTD(tr,parseInt(k) + 1);
  for (let value of Object.values(users[k])) {
    createTD( tr,value)
  }
  createButtonGroup(tr);
  tablebody.appendChild(tr);

}