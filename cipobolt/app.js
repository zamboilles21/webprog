let elem=6;
x=new Array();

let most=new Date();
let aho=most.getMonth()+1;

if (aho>1) eho=aho-1
else eho=12 
        
for (let i = 0; i < elem; i++) {
h=Math.floor(Math.random()*2) ? aho:eho
n=Math.floor(Math.random()*28)+1

if (h<10) h="0"+h 
if (n<10) n="0"+n

x[i]=h+"."+n
document.writeln(" <span class='cipoadat'> "+x[i]+" </span> ")
document.writeln("");
    
function kieg(x){
  if (x<10) {
    x="0"+x;
  }
return x;
}    

}
let maidatum=most.getMonth()+1+"."+most.getDate();

max = 0
for( i=2 ; i<=elem ; i++ )
{
  if( x[i] > x[max] )   max = i
}

document.writeln("<br>Az eddigi utolsó beszállítás: "+x[max])

let volt=false;
for (let i = 0; i < elem; i++) {
ho=x[i].split('.');
if (aho==ho[0]) {
  volt=true;
  break;
}
  
}
document.writeln('<br> Volt-e beszállítás ebben hónapban? '+((volt)?"volt": "nem volt"));

let db=0;

for (let i = 0; i < elem; i++) {
  if (x[i]>maidatum) {
    db++;
  }  
}
document.writeln('<br> Előre száma: '+db);

let vane=false;

for (let i = 0; i < elem-1; i++) {
    for (let j = i+1; j < elem; j++) {
      if (x[i]==x[j]) {
        vane=true;
        break;
      }
   }
  
}
document.writeln('<br>1.b: Volt-e, vagy lesz-e több beszállítás egyazon napon? ' + ((vane) ? "Igen" : "Nem"));

document.writeln('<br><br>');

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

// 2.a A legnagyobb női cipő

maxindex = 0;

for (let i = 0; i < 12; i++) {
    if (N[i] > N[maxindex]) {
        maxindex = i;
    }
}

document.writeln('<br><br>2.a: A legnagyobb női cipőméret: ' + N[maxindex]);

// 2.b cipőméret átlagok különbsége

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
/*function randomDate(start, end) 
{ 
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())); 
} 
const d = randomDate(new Date(2022, 0, 1), new Date()); console.log(d);*/