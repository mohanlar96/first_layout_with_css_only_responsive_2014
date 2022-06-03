/*function sign_up_check()
{
var sx=document.sign_up.elements[10].click();
{window.alert(sx);
window.alert("Hie");
}
}
*/
function sign_up_check()
{
var tname=/[A-Z]{1}[a-z]{3,}/; 
var tlname=/[A-Z]{1}[a-z]{3,}/; 
var tgmail=/[A-Za-z0-9]\w{2,}@[A-Za-z0-9]\w{2,}\.[a-z]{3}/;
var tschool_id=/[0-9]{1}\w{1}[0-9]{2}\w{1}[0-9]{4}/;
var tusername=/[A-Z]{1}[a-z0-9]{6,}/;
var tpassword=/[A-Za-z0-9]{8,}/;
var count=0;
var firstname=document.sign_up.fname.value;
if (tname.test(firstname))
 {count+=1;
var td=document.getElementById("tdfname");
td.className="tdnone"; 
  }
else {
document.sign_up.fname.value="";
var td=document.getElementById("tdfname");
td.className="tdcolor";
 }

var lastname=document.sign_up.lname.value;
if (tlname.test(lastname))
 {count+=1;
var td=document.getElementById("tdlname");
td.className="tdnone"; 
 }
else {
var td=document.getElementById("tdlname");
td.className="tdcolor";
document.sign_up.lname.value="";
 }
var id=document.sign_up.school_id.value;
if (tschool_id.test(id))
 {count+=1; 
 var td=document.getElementById("tdid");
td.className="tdnone";
  }
else {
var td=document.getElementById("tdid");
td.className="tdcolor";
document.sign_up.school_id.value="";
 }
 
var ttusername=document.sign_up.username.value;
if (tusername.test(ttusername))
 {count+=1; 
 var td=document.getElementById("tdusername");
td.className="tdnone";
  }
else {
var td=document.getElementById("tdusername");
td.className="tdcolor";
document.sign_up.username.value="";
}

var ttgmail=document.sign_up.gmail.value;
if(tgmail.test(ttgmail))
{count+=1;
var td=document.getElementById("tdgmail");
td.className="tdnone";
}
else{
var td=document.getElementById("tdgmail");
td.className="tdcolor";
document.sign_up.gmail.value="";
}

var ttpassword=document.sign_up.password.value;
var trepassword=document.sign_up.re_password.value;
if(ttpassword==trepassword)
{
if(tpassword.test(ttpassword))
{if(tpassword.test(ttpassword))
 {count+=1;
 var td=document.getElementById("tdpassword");
 var rtd=document.getElementById("tdrepassword");
td.className="tdnone";
rtd.className="tdnone";
  }
else{document.sign_up.re_password.value="";
   document.sign_up.password.value="";
    var td=document.getElementById("tdpassword");
 var rtd=document.getElementById("tdrepassword");
td.className="tdcolor";
rtd.className="tdcolor";
}
}
else
{document.sign_up.re_password.value="";
   document.sign_up.password.value="";
       var td=document.getElementById("tdpassword");
 var rtd=document.getElementById("tdrepassword");
td.className="tdcolor";
rtd.className="tdcolor";
 }
}
else
{document.sign_up.re_password.value="";
   document.sign_up.password.value="";
       var td=document.getElementById("tdpassword");
 var rtd=document.getElementById("tdrepassword");
td.className="tdcolor";
rtd.className="tdcolor";
 }

var tyear=document.sign_up.year.value; 
 if(tyear!=0)
 {count+=1;
 var td=document.getElementById("tdyear");
td.className="tdnone";
}
 else
 {var td=document.getElementById("tdyear");
td.className="tdcolor";
 }
  
  var tmonth=document.sign_up.month.value; 
   if(tmonth!=0)
 {count+=1;
 var td=document.getElementById("tdmonth");
td.className="tdnone";}
 else
 {
 var td=document.getElementById("tdmonth");
td.className="tdcolor";
 }
   
   var tday=document.sign_up.day.value;
 if(tday!=0)
 {count+=1;
 var td=document.getElementById("tdday");
td.className="tdnone";
 }
 else
 {
 var td=document.getElementById("tdday");
td.className="tdcolor";
 }   
 
 
 if(count==9)
{window.location="pages/continue_reset/continue_sign_up.html";
}
}

function reset_all()
{var td1=document.getElementById("tdfname");
td1.className="tdnone";
var td2=document.getElementById("tdlname");
td2.className="tdnone"; 
 var td3=document.getElementById("tdgmail");
td3.className="tdnone";
 var td4=document.getElementById("tdid");
td4.className="tdnone";
 var td5=document.getElementById("tdusername");
td5.className="tdnone";
 var td6=document.getElementById("tdpassword");
td6.className="tdnone";
 var td7=document.getElementById("tdrepassword");
td7.className="tdnone";
 var td8=document.getElementById("tdyear");
td8.className="tdnone";
 var td9=document.getElementById("tdday");
td9.className="tdnone";
 var td10=document.getElementById("tdmonth");
td10.className="tdnone";
 var td11=document.getElementById("tdsex");
td11.className="tdnone";
}

