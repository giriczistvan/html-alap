//JavaScriptben minden objektum automatikusan tartalmaz egy speciális, rejtett hivatkozást egy másik objektumra. Ez a hivatkozott objektum az ún. prototípus-objektum vagy röviden prototípus. Igen ám, de ennek az objektumnak megint csak van hivatkozása egy másik prototípus-objektumra, és így tovább, amíg egy olyan objektumhoz nem érkezünk, akinek ez a hivatkozása null értékű. Prototípus-objektumoknak az így kialakult láncolatát nevezzük prototípusláncnak.
Objektum = név-érték párok gyűjteménye.

Név = tetszőleges azonosító vagy szöveg.

Érték = tetszőleges kifejezés.

Ha az érték függvény, akkor metódusnak hívjuk, egyébként tulajdonságnak.
Objektumfilozófia

Objektumfilozófia két alappillére:

    az objektumok dinamikusak

    minden objektumhoz egy prototípus-objektum kapcsolódik

Metódusok

A kulcs-érték párokról megjegyeztük, hogy a kulcs alapvetően tetszőleges azonosító lehet; ha azonban az azonosító foglalt kulcsszó vagy nem felel meg az azonosító szintaktikai szabályainak, akkor szövegként kell megadnunk. Az értékek elemi vagy összetett adattípusok is lehetnek, ezeket tulajdonságoknak hívjuk. Nem beszéltünk azonban arról, hogy érték lehet függvény is, ebben az esetben metódusról beszélünk.

A JavaScript objektumok tehát tulajdonságok és metódusok gyűjteménye, és ilyen szempontból sokkal jobban hasonlítanak az objektum-orientált nyelvek objektumaira, amelyek ugyancsak adattagokat és metódusokat tartalmaznak.

A metódusokat egyszerűen úgy adjuk meg, hogy az érték helyére egy függvényliterált írunk. A metódus meghívása az objektum megfelelő kulcsán keresztül megkapott függvény meghívásából áll.

//Objektum létrehozása 
let matyi = new Object; let matyi = {}

var matyi = {
	kor: 1.5,
	nev: 'Mátyás',
	sir: function () {
		console.log('Oáááá');
	}
};
matyi.kor; magyi["kor"]; Ugyanaz de ha változót kap akkor az utolsót kell hazsnálni

Object.keys(objneve); Object.values(objneve); Object.defineProperties(objneve)[index_number]
//Objektum adattagjainak elérése
matyi.kor;		//1.5
matyi['nev'];		//"Mátyás"

//Objektum metódusának meghívása
matyi.sir();	//"Oáááá"

A metódusoknak természetesen lehetnek paraméterei is. Tegyük fel, hogy matyi beszélni tanul, és visszamond mindent, amit hall.

//matyi objektum bővítése a beszel metódussal
matyi.beszel = function (szo) {
	console.log(szo);
}

//A beszel metódus meghívása
matyi.beszel("csacsi");		//"csacsi"
matyi.beszel("pillangó");	//"pillangó"

Egy metóduson belül az objektumra hivatkozni a this kulcsszóval lehet. Ezen keresztül elérhetőek az objektum tulajdonságai és metódusai. Egészítsük ki a matyi objektumot egy bemutatkozas() metódussal, amely kiírja a konzolra a nevet.

//matyi objektum bővítése a bemutatkozas metódussal
matyi.bemutatkozas = function() {
	console.log(this.nev + " vagyok.")
}

//Az új metódus meghívása
matyi.bemutatkozas();	//"Mátyás vagyok"

A prototípus-objektum lekérdezésére kétféle lehetőség is van:

    a.isPrototypeOf(b): visszaadja, hogy a szerepel-e b prototípusláncában.

    Object.getPrototypeOf(obj): megadja obj prototípus-objektumát.


//A prototípuslánc létrehozása előre feltöltött objektumokkal
var o1 = {
    a: 1,
    b: 2
};
var o2 = Object.create(o1);
o2.b = 22;
o2.c = 3;

//Teszt
ok( o2.c === 3, 'A tulajdonság az adott objektumon elérhető');
ok( o2.a === 1, 'A tulajdonság a prototípuson elérhető');
ok( typeof o2.toString === 'function', 'A metódus az Object.prototype-on keresztül elérhető');
ok( o2.b === 22, 'A tulajdonság eltakarja a prototípus azonos nevű tulajdonságát');

ok( o2.hasOwnProperty('c') === true, 'A c tulajdonság az o2 objektum sajátja');
ok( o2.hasOwnProperty('a') === false, 'Az a tulajdonság nem az o2 objektum sajátja');