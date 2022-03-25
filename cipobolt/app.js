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
document.writeln(" <span class='cipoadat'> "+x[i]+" <span> ")
document.writeln("");
    
    

}


max = 1
for( i=2 ; i<=elem ; i++ )
{
  if( x[i] > x[max] )   max = i
}
document.writeln()
document.writeln("<span> A legnagyobb elem sorszáma: </span><span>" +   max  + ".</span>")
document.writeln("<span>                     értéke: </span><span>" + x[max] +  "</span>")







/*function randomDate(start, end) 
{ 
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())); 
} 
const d = randomDate(new Date(2022, 0, 1), new Date()); console.log(d);*/