function cal(){
let mathsMarks=document.getElementById("mat").value;
let phyMarks=document.getElementById("phy").value;
let chemMarks=document.getElementById("chem").value;
let extra=document.getElementById("extra").value;
let total;
var per;
let gds="";
total=parseFloat(mathsMarks)+parseFloat(phyMarks)+parseFloat(chemMarks)+parseFloat(extra);

per=(total/400)*100;

if(per>=80 && per<=100){
    gds="A";
}else if (per>=50 && per<80){
    gds="B";
}else if (per<50){
    gds="C";
}else{
    gds="Fail";
}
if(per>=50){
    document.getElementById("showData").innerHTML=`You have scored ${per}% and your grade is ${gds} You have Passed.`;
}
else{
    document.getElementById("showData").innerHTML=`You have scored ${per}% and your grade is ${gds} You have failed.`;
    
}
}