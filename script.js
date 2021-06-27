function changecontent(){
let x=document.getElementById("know-more");
if(x.style.display=="block"){
    x.style.display="none";}
    else{
        x.style.display="block";
    }
}
function formvalidation(){

let x=document.getElementById("name-boxes").value;
let y=document.getElementById("email-boxes").value;
let z=document.getElementById("pass-boxes").value;

if(x=="")
{ document.getElementById("name-validation").style.display="block" ;}

if(y=="")
{ document.getElementById("email-validation").style.display="block" ;}

if(z=="")
{ document.getElementById("pass-validation").style.display="block" ; }
 

if(x|| y|| z=="")
return false;
}