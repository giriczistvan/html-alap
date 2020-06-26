const { initial } = require("lodash")

npm initial
npm init -y : generáltasd le a package.json fájlt.
npm install -g json-server : a json-server telepítése 

json-server --watch .\db\db.json
figyeli a JSON fájlt a szerver, ha módosul. Ezenkívül elindul és lehet neki kéréseket küldeni. Ki fogja írni, hogy melyik proton fut, alapból a 3000 lesz, de ezt meg is változtathatod.
GET

A kliens - szerver modell arról szól, hogy küld a kliens egy kérést a szervernek, az pedig válaszol rá. A kérés a Request a válasz a Response.
Get Request

Egy get kérés így néz ki, a böngésző ezt küldi a szerver felé:

GET /images/logo.gif HTTP/1.1

Elemezzük kicsit:

    GET : metódus, azaz hogy hogyan szeretné a kliens megkapni az adatokat a válaszban.
    /images/logo.gif : erőforrás, annak a címe amit kér, ez páldául egy .gif kép.
    HTTP/1.1 : verzió, a HTTP szabvány melyik verziójával történik a kommunikáció.

Ezt a teljesen egyszerű szöveges kérést küldi a böngésző a szervered felé.

Header: a kérés része az első sor után következő haeader sorok. Ezek tövábbi adatokat tartalmaznak a kérésről és mindig HEADER: VALUE formában vannak megadva.

Host: origo.hu
Connection: close
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9) Gecko/2008052906 Firefox/3.0
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Cache-Control: no-cache
Accept-Language: de,en;q=0.7,en-us;q=0.3

Ebből néhány érdekeset kiemelnék:

    User-Agent : a kliens által használt böngésző típusa.
    Accept-Charset : a böngésző milyen karakterkódolással tudja fogadni az adatokat.
    Accept-Language : a válasz nyelve milyen legyen.
    Cache-Control : azt határozza meg, hogy a kliens és szerver közti útvonalon kötelezően használjanak-e cache-elést, vagy sem.

Get Response

Egy ilyen get kérésre a szerver ilyen választ szokott küldeni:

    HTTP/1.1 200 OK : státusz, a válasz első sora. A státuszkód (jelent esetben 200) jelzi hogy mi lett a kérés eredménye. A 2xx, azaz a 2 -essel kezdődő sikeres kérést jelent.
    HTTP/1.1 404 Not Found : itt például nem volt sikeres a kérés, mert a kért erőforrás nem létezik. Ilyenkor kiegészülhet a válasz státusza egy szöveggel is, ami jelen esetben: Not Found.

A Response is tartalmaz header sorokat, a Request -hez hasonlóan. És a header után jön a BODY, ami már a konkrét adat, amit a kliens kért a szervertől.