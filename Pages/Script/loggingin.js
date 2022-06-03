
function log_in_check()
{
var lusername=/[A-Z]{1}[a-z0-9]{6,}/;
var lpassword=/[A-Za-z0-9]{8,}/;
var lcount=0;
var llusername=document.login.loginusername.value;
var llpassword=document.login.loginpassword.value;


if(lusername.test(llusername))
{lcount+=1;
}
else
{document.login.loginusername.value="";
document.login.loginpassword.value="";
}

if(lpassword.test(llpassword))
{lcount+=1;
var td=document.getElementById("tdloginusername");
td.className="tdnone"; 
}
else
{document.login.loginusername.value="";
document.login.loginpassword.value="";

}
 if(lcount==2)
 {window.location="Users/login.html";
}
else
{var hh3=document.getElementById("incorrecttext");
hh3.className="incorrect";
}

}

function clear_login()
{
var h3=document.getElementById("incorrecttext");
h3.className="hidden";
}

