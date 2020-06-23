for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    
    }
}

let cars = ["VW","audi","opel"];
for(let k in cars ){
    console.log(k+"   "+cars[k]) 
   }

for(let value of cars ){
    console.log(value+"   "+cars[value]) 
   }

//string bejárása
let iterable = 'boo';
for (let value of iterable) { console.log(value); }

//objektum bejárása
let user = { name: "Kiss Ramóna", age: 22 };
for ( let value of Object.values(user) ) { console.log(value); }