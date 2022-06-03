var tdigit=/[0-9]{6}/;
var e1=document.getElementById("incorrecttext");
var e2=document.getElementById("tddigit");
function reset_check()
{
var ttdigit=document.digit_form.digit6.value;
if(tdigit.test(ttdigit))
{
e1.className="hidden";
e2.className="tdnone";
window.location="../Users/profile.html";
}
else
{
e1.className="do-not-match";
e2.className="tdcolor";
}
}
