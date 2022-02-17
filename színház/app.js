hely = new Array()
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
			    document.write("<span class='szek foglalt' title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
			}
			else
			{
			    document.write("<span class='szek szabad'  title='hely[" + i + "][" + j + "] = " + hely[i][j] + "'>" + j + "</span>")
			}
		}
		document.write("<br>")
		if(i%5==0) document.write("<hr size=1 color=#880000>")
	}

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
    let jegyarbevetel=0;

    for(i=1;i<=15;i++){
        for (let i =0; i <= 24; i++){
            if (hely[i][j]==1) {
                if (i<6) {
                    jegyarbevetel+=7500;
                }
                if (i>=6 && i<11) {
                    jegyarbevetel+=5900;
                }
                if (i>=11) {
                    jegyarbevetel+=4500;
                }
            }
           
        }
    }
    document.writeln(`<br>3.feladat: Jegyárbevétel: ${jegyarbevetel} ft`);