var tdigit=/[0-9]{6}/;
var e1=document.getElementById("incorrecttext");
var e2=document.getElementById("tddigit");
var digitbox=document.getElementById("none");
var usernamebox=document.getElementById("resetusername");
var passwordbox=document.getElementById("resetpassword");
function reset_check()
{
var ttdigit=document.digit_form.digit6.value;
if(tdigit.test(ttdigit))
{
e1.className="hidden";
e2.className="tdnone";
digitbox.className="hidden";
usernamebox.className="log-in-box";
}
else
{
e1.className="do-not-match";
e2.className="tdcolor";
}
}
