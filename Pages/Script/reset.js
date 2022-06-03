function reset_check()
{
var tgmail=/[A-Za-z0-9]\w{2,}@[A-Za-z0-9]\w{2,}\.[a-z]{3}/;
var tschool_id=/[0-9]{1}\w{1}[0-9]{2}\w{1}[0-9]{4}/;
var count=0;

var id=document.reset.school_id.value;
if (tschool_id.test(id))
 {count+=1; 
 var td=document.getElementById("tdid");
td.className="tdnone";
  }
else {
var td=document.getElementById("tdid");
td.className="tdcolor";
document.reset.school_id.value="";
 }
 
var ttgmail=document.reset.gmail.value;
if(tgmail.test(ttgmail))
{count+=1;
var td=document.getElementById("tdgmail");
td.className="tdnone";
}
else{
var td=document.getElementById("tdgmail");
td.className="tdcolor";
document.reset.gmail.value="";
}
if(count==2)
{window.location="continue_reset/continue.html";
}
else
{var tmatch=document.getElementById("incorrecttext");
tmatch.className="incorrect";
}
}

function clear_all()
{
 var td3=document.getElementById("tdgmail");
td3.className="tdnone";
 var td4=document.getElementById("tdid");
td4.className="tdnone";
var match=document.getElementById("incorrecttext");
match.className="hidden";
 
}

