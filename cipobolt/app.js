document.writeln('<h3>1. feladat</h3>');

ElemSzam = 6;
x = new Array();

most = new Date();
aho = most.getMonth() + 1; 

if (aho > 1) eho = aho - 1; 
else eho = 12;

for (i = 0; i < ElemSzam; i++) {
    h = Math.floor(Math.random() * 2) ? aho : eho;
    n = Math.floor(Math.random() * 28) + 1;

    h = kiegeszit(h);
    n = kiegeszit(n);

    x[i] = h + "." + n;
    document.write("<span class='cipoadat'>" + x[i] + " </span>");
}

function kiegeszit(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}

document.writeln('<br><br>');
let maidatum = kiegeszit(most.getMonth() + 1) + "." + kiegeszit(most.getDate());

let maxindex = 0;

for (let i = 1; i < ElemSzam; i++) {
    if (x[i] > x[maxindex]) {
        if (x[i] < maidatum) {
            maxindex = i;
        }
    }
}

document.writeln('1.a: Az eddigi utolsó beszállítás: ' + x[maxindex]);



let volt = false;
aho = kiegeszit(aho);
for (let i = 0; i < ElemSzam; i++) {
    ho = x[i].split('.');
    if (aho == ho[0]) {
        volt = true;
        break;
    }
}

document.writeln('<br>1.b: Volt-e beszállítás ebben a hónapban? ' + ((volt) ? "Volt" : "Nem volt"));



let db = 0;

for (let i = 0; i < ElemSzam; i++) {
    if (x[i] > maidatum) {
        db++;
    }
}

document.writeln('<br>1.c: Előrejelzett beszállítások száma ' + db);



let vane = false;

for (let i = 0; i < ElemSzam - 1; i++) {
    for (let j = i + 1; j < ElemSzam; j++) {
        if (x[i] == x[j]) {
            vane = true;
            break;
        }
    }
}

document.writeln('<br>1.d: Volt-e, vagy lesz-e több beszállítás egyazon napon? ' + ((vane) ? "Igen" : "Nem"));

document.writeln('<br><br><h3>2. feladat</h3>');

let F = new Array(12);
let N = new Array(12);

for (let i = 0; i < 12; i++) {
    F[i] = Math.round(Math.random() * 8 + 38); // 38-46
    N[i] = Math.round(Math.random() * 7 + 35); // 35-42
}

for (let i = 0; i < 12; i++) {
    document.write("<span class='FcipoMeret'>" + F[i] + " </span>");
}

document.writeln('<br><br><br>');

for (let i = 0; i < 12; i++) {
    document.write("<span class='NcipoMeret'>" + N[i] + " </span>");
}


maxindex = 0;

for (let i = 0; i < 12; i++) {
    if (N[i] > N[maxindex]) {
        maxindex = i;
    }
}

document.writeln('<br><br>2.a: A legnagyobb női cipőméret: ' + N[maxindex]);



let AvgN = 0;
let AvgF = 0;
let SumN = 0;
let SumF = 0;

for (let i = 0; i < 12; i++) {
    SumF += F[i];
    SumN += N[i];
}

AvgN = SumN / 12;
AvgF = SumF / 12;

document.writeln('<br><br>2.b: A cipőméret átlagok különbsége: ' + (AvgF - AvgN));



db = 0;
for (let i = 0; i < 12; i++) {
    if (N[i] > 40) {
        db++;
    }
}

document.writeln('<br><br>2.c: A női cipők hány százaléka 40-es méret feletti? ' + (db * 100 / 12));



let cipomeretek = [
    { meret: 35, db: 0 },
    { meret: 36, db: 0 },
    { meret: 37, db: 0 },
    { meret: 38, db: 0 },
    { meret: 39, db: 0 },
    { meret: 40, db: 0 },
    { meret: 41, db: 0 },
    { meret: 42, db: 0 },
    { meret: 43, db: 0 },
    { meret: 44, db: 0 },
    { meret: 45, db: 0 },
    { meret: 46, db: 0 }
];

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (cipomeretek[i].meret == N[j]) {
            cipomeretek[i].db++;
        }
        if (cipomeretek[i].meret == F[j]) {
            cipomeretek[i].db++;
        }
    }
}

maxindex = 0;
for (let i = 1; i < 12; i++) {
    if (cipomeretek[i].db > cipomeretek[maxindex].db) {
        maxindex = i;
    }
}

document.writeln('<br><br>2.d: A legtöbb eladott cipőméret: ' + cipomeretek[maxindex].meret + " méret");


document.writeln('<br><br><h3>3. feladat</h3>');

let idopontok = new Array();
let kezdo = 0,
    osszido = 0;
for (let i = 0; i < 12; i++) {
    do {
        ido = Math.round(Math.random() * 179 + 1);
    } while ((osszido + ido) > 1440);
    osszido += ido;
    kezdo += ido;
    idopontok[i] = atvalt(kezdo);
}

for (let i = 0; i < 12; i++) {
    document.write("<span class='cipoadat'>" + idopontok[i] + " </span>");
}

function atvalt(atvaltando) {
    let ora;
    let perc;
    ora = kiegeszit(Math.floor(atvaltando / 60));
    perc = kiegeszit(atvaltando % 60);
    return (ora + ':' + perc);
}



db = 0;
for (let i = 0; i < 12; i++) {
    if (idopontok[i] > "12:00" && idopontok[i] < "20:00") {
        db++;
    }
}

document.writeln('<br><br>3.a: Hányszor vásároltak dél és este 8 között? ' + db);

let adtakle = false;

for (let i = 0; i < 12; i++) {
    if (idopontok[i] > "03:00" && idopontok[i] < "04:00") {
        adtakle = true;
        break;
    }
}
document.writeln('<br><br>3.b: Adtak-e le rendelést hajnali 3 és 4 óra között? ' + (adtakle ? "Igen" : "Nem"));


let index = 0;
for (let i = 0; i < 12; i++) {

    ora = idopontok[i].split(':');

    if ((ora[0] == "12" && ora[1] > "00") || ora[0] > "12") {
        index = i;
        break;
    }
}

document.writeln('<br><br>3.c: Mikor volt az első dél utáni vásárlás?' + idopontok[index]);



let kulonbsegekOsszege = 0;

for (let i = 1; i < 12; i++) {

    let perc1 = visszavalt(idopontok[i]);
    let perc2 = visszavalt(idopontok[i - 1]);
    console.log(perc1, perc2, perc1 - perc2);
    kulonbsegekOsszege += (perc1 - perc2);
}

document.writeln('<br><br>3.d: Átlagosan hány percenként érkezett rendelés??' + kulonbsegekOsszege / 11);



function visszavalt(ido) {
    let perc = 0;
    ora = ido.split(':');
    console.log(ora);
    perc = (Number)(ora[0]) * 60 + (Number)(ora[1]);
}
if(typeof(RendelesSzam)=='undefined')  RendelesSzam=12

  x = new Array()

  for( i=1 ; i<=RendelesSzam ; i++ )
  {

	cipo_db = Math.floor( Math.pow(Math.random(),4) *4) + 1

	ertek = 0
	for( j=1 ; j<=cipo_db ; j++ )
	{
	    ertek += Math.floor(Math.random()*20) *1000 + 5990  //  5990..24990  
	}

	x[i] = ertek
	document.write( "<span class='cipoadat c4'>" + x[i] + ".- </span>" )
  }

  
/*function randomDate(start, end) 
{ 
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())); 
} 
const d = randomDate(new Date(2022, 0, 1), new Date()); console.log(d);*/