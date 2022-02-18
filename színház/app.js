let hely = new Array()
	for( i=1; i<=15; i++ )
	{
		if(i== 1)  document.write("<span class='helyar'>7500.- Ft</span>")
		if(i== 6)  document.write("<span class='helyar'>5900.- Ft</span>")
		if(i==11)  document.write("<span class='helyar'>4500.- Ft</span>")

		hely[i] = new Array()
		document.write("<span class='sorszam'>" + i + ".</span>")
		for( j=1; j<=24; j++ )
		{
			hely[i][j] = Math.floor( (1-Math.random()*Math.random())*2 )     
			if( hely[i][j]==1 )
			{
			    document.write("<span class='szek foglalt' id='"+ i +"|"+j+"' onclick='allapotvaltas("+ i +","+j+")'  title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
			}
			else
			{
			    document.write("<span class='szek szabad' id='"+ i +"|"+j+"' onclkick='allapotvaltas("+ i +","+j+")' title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
			}
		}
		document.write("<br>")
		if(i%5==0) document.write("<hr size=1 color=#880000>")
	}


    console.table(hely)
    //1.feladat
    let szabadhelyekSzama=0;
    for(i=1;i<=15;i++){
        for(j=1;j<=24;j++){
            if (szabadhely(i,j)==0) {
                szabadhelyekSzama++;
            }
        }
    }

    document.writeln("1.feladat: A szabad helyek száma: "+szabadhelyekSzama);

    function szabadhely(x,y) {
        return hely[x][y];
    }

    //2.feladat
    document.writeln('<br>')
    document.writeln("2.feladat: Eladott jegyek százaléka:  "+(((15*24)-szabadhelyekSzama)/(15*24))*100+"%");

    //3.feladat
    // 3. feladat: Mennyi az eddigi jegyárbevétel?

let jegyarBevetel = 0;

for (i = 1; i <= 15; i++) {
    for (j = 1; j <= 24; j++) {
        if (hely[i][j] == 1) {
            if (i < 6) {
                jegyarBevetel += 7500;
            }
            if (i >= 6 && i < 11) {
                jegyarBevetel += 5900;
            }
            if (i >= 11) {
                jegyarBevetel += 4500;
            }
        }
    }
}

document.writeln(`<br>3. Feladat: Az eddigi jegyárbevétel: ${jegyarBevetel} Ft`);

// 4. feladat: melyik érkategóriából adták el a legtöbb jegyet?

let kat = [0, 0, 0];

for (i = 1; i <= 15; i++) {
    for (j = 1; j <= 24; j++) {
        if (hely[i][j] == 1) {
            if (i < 6) {
                kat[0]++;
            }
            if (i >= 6 && i < 11) {
                kat[1]++;
            }
            if (i >= 11) {
                kat[2]++;
            }
        }
    }
}

let maxindex = 0;
for (i = 1; i < 3; i++) {
    if (kat[i] > kat[maxindex]) {
        maxindex = i;
    }
}

console.table(kat);
document.writeln(`<br>4. Feladat: A legtöbb eladott jegy: ${maxindex+1} kategória`);

// 5. feladat: van-e olyan sor, ahol egyetlen szabad hely sincs?

let van = false;

for (i = 1; i <= 15; i++) {
    if (teleSor(i) == true) {
        van = true;
        console.log('A tele sor száma: ', i);
        break;
    }
}

document.writeln(`<br>5. Feladat: ${ van ? 'Van': 'Nincs' } olyan sor, ahol minden jegy elkelt.`);

function teleSor(x) {
    let tele = true;
    for (j = 1; j <= 24; j++) {
        if (hely[x][j] == 0) {
            tele = false;
            break;
        }
    }
    return tele;
}

van=false;
for(i=1;i<=15;i++)
{
    if (negySzabadhely) {
        van=true;
        console.log(`Négy szabad hely a ${i}. sorban.`);
        break;
    }
}

document.writeln(`<br>6. Feladat: ${ van ? 'Van': 'Nincs' } négy szabad hely`)

function negySzabadhely() {
    let van4=false;
    let db=0;
    for (j=1;j<=24;j++) {
        if (hely[x][j]==0) {
            db++;
            if (db==4) {
                van4=true;
                break;
            }
        }
        else
        {
            db=0;
        }
        
    }
    return van4;
    
}
//7.feladat
van=false;
parokhelyekszama=0;
for(i=1;i<=15;i++)
{
    KetSzabadhely(i);
}

document.writeln(`<br>7. Feladat:${parokhelyekszama} párnak van hely`)

function KetSzabadhely() {
    
    let db=0;
    for (j=1;j<=24;j++) {
        if (hely[x][j]==0) {
            db++;
            if (db==2) {
                parokhelyekszama++;
                db=0;
                
            }
        }
        else
        {
            db=0;
        }
        
    }
    
}
// 8. feladat: a sorok szélén a legolcsóbb, de azon blül a legelőrébb lévő hely megkeresése
 
let talalat = {
    sor: 0,
    szek: 0
   }
    
   van = false;
    
   for (i = 11; i <= 15; i++) {
    if (checkPlace1(i)) { break; }
    if (checkPlace24(i)) { break; }
   }
    
   if (van == false) {
    for (i = 6; i <= 10; i++) {
    if (checkPlace1(i)) { break; }
    if (checkPlace24(i)) { break; }
    }
   }
    
   if (van == false) {
    for (i = 1; i <= 5; i++) {
    if (checkPlace1(i)) { break; }
    if (checkPlace24(i)) { break; }
    }
   }
    
   document.writeln(`<br>8. Feladat: A keresett hely: ${talalat.sor}. sor ${talalat.szek}. szék.`);
    
   function checkPlace1(x) {
    van = false;
    if (hely[x][1] == 0) {
    van = true;
    talalat.sor = x;
    talalat.szek = 1;
    }
    return van;
   }
    
   function checkPlace24(x) {
    van = false;
    if (hely[x][24] == 0) {
    van = true;
    talalat.sor = x;
    talalat.szek = 24;
    }
    return van;
   }

   function allapotvaltas(x,y) {
       let aktszek=document.querySelector('#'+x+'|'+y)
       if (hely[x][y]==0) {
           aktszek.classList.remove('szabad');
           aktszek.classList.add('foglalt');
           hely[x][y]=1
       }else{
        aktszek.classList.remove('foglalt');
        aktszek.classList.add('szabad');
           hely[x][y]=0
       }
   }