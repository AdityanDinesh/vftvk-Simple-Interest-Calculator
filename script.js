

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
var result = document.getElementById("result");
function compute()
{
    var principal = document.getElementById("principal").value;
 var rate = document.getElementById("rate").value;
 var years = document.getElementById("years").value;
 var interest = principal*years*rate /100;
 var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML=`If you deposit <span class = \"yellow\">${principal}</span>,\<br\>at an interest rate of <span class = \"yellow\">${rate}%</span><br\>You will receive an amount of <span class = \"yellow\">${interest}</span>,<br\>in the year <span class = \"yellow\">${year}</span><br\>`
}