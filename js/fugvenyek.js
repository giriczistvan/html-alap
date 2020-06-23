//arrow function
let adder = function (n1,n2) {
	let varia=n1+n2;
	return varia%2;
}
//ha csak egy paraméter van és egy sor a művelet minden zárójel elhagyható
let adder = (n1,n1)=> {n1 + n2}; let adder = n1 => return "hello"+n1;

// T egy olyan függvény, amely a tételben általánosan jelenik meg, és a konkrét feladattól függően fejthető ki. Az előző részben leírt lineáris keresés például így írható át:

function kereses(x, T) {
	var i = 0;
	while (i < x.length && !T(x[i])) {
		i++;
	}
	return {
		vane: i < x.length,
		sorsz: i
	};
}

//Ha negatív elemet szeretnénk keresni számok sorozatában, az így nézhet ki:

function negativE(p) {
	return p < 0;
}

var tomb = [1, 3, -2, 8];
console.log(kereses(tomb, negativE));

//Ha páratlan szám keresése a cél, akkor csak a T függvényt kell átírnunk.

function paratlanE(p) {
	return p % 2 !== 0;
}

var tomb = [1, 3, -2, 8];
console.log(kereses(tomb, paratlanE));

// A tömbök map metódusa az összes elemen végigfut, mindre
// meghívva az átadott callback-et, melynek visszatérési
// értékeiből pedig egy új tömböt épít:
var numArray = [1,2,3].map(function(el) {
    return el * 2;
  });
assertEquals([2, 4, 6], numArray);

// A node.js fs.readfile metódusa egy fájlt olvas be
// aszinkron módon, vagyis a függvény visszatérési
// értéke nem tartalmazza a fájl tartalmát - az csak
// az IO művelet végén lesz elérhető. Ha ez megtörtént,
// akkor meghívódik az átadott callback metódus,
// argumentumában pedig megkapja a fájl tartalmát:
fs.readFile('somefile.txt', function (err, data) {
    // Hiba dobása ha nem sikerült a beolvasás
    if (err) throw err;
    console.log(data); // A fájl tartalma
  });
 
  // A jQuery ajax metódusa egy aszinkron kérést indít,
  // amely sikeres válasz esetén meghívja a success-ben
  // beállított callback metódust:
  $.ajax({
      url: 'login.php',
      data: { username: 'user', password: 'pwd' },
      success: function() {
          console.log('Login successfully!');
      }
  });

  // Az addEventListener segítségével egy esemény-
  // kezelőt köthetünk egy HTML elemre, vagyis egy
  // olyan callback függvényt, amely akkor fut le,
  // ha az esemény kiváltódik:
  document.getElementById('okButton')
      .addEventListener("click", function() {
          console.log('Clicked on OK button!');
      }, false);

//Igen összetett feladatok oldhatók meg azokkal a függvényekkel, amelyek függvényeket adnak vissza.
function muveletKeszito(op) {
	if (op === '+') {
		return function (a, b) {
			return a + b;
		};
	}
	else if (op === '*') {
		return function (a, b) {
			return a * b;
		};
	}
}

//Összeadó függvény készítése
var muvelet = muveletKeszito('+');
muvelet(10, 32);	//42

//Szorzó függvény készítése
var muvelet = muveletKeszito('*');
muvelet(10, 32);	//320

//másik verzió a fentinek
function osszead(a, b) {
	return a + b;
}

var szoroz = function (a, b) {
	return a * b;
}

function muveletKeszito(op) {
	if (op === '+') {
		return osszead;
	}
	else if (op === '*') {
		return szoroz;
	}
}

///ÖNKIOLDÓ FÜGVÉNYEK (EGYBŐL MEGHÍVÓDÓK)
Függvény hívásakor a függvényhivatkozás után gömbölyű zárójelet kell tenni. A függvényhivatkozás azonban helyettesíthető a függvényliterállal, azaz a függvény helyben definiálásával. Ekkor a definiált függvényt rögtön meg is hívjuk, a szakirodalom az ilyen függvényeket önkioldó függvényeknek nevezi.

//Függvény definiálása
var szoroz = function (a, b) {
	return a * b;
}

//Függvény meghívása
szoroz(6, 7);	//42
//vagy hangsúlyozandó, hogy itt függvényreferencia van
(szoroz)(6, 7);	//42

//Függvényhivatkozást függvényliterállal helyettesítve
(function (a, b) {
	return a * b;
})(6, 7);		//42

//Private változó létrehozása closure függvénnyel
var makeAdder = function(a) {
	return function(b) {
		return a + b;
	};
};

var add1 = makeAdder(1);
var add10 = makeAdder(10);

console.log(add1(41));
console.log(add10(41));

(function (){
	var a = 10;
	setTimeout(function() {
		console.log(a);
	}, 1000)
})();