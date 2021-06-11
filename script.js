function compute()
{
/* collect the principal, rate and years from the form elements */
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;

   if(principal == ""){
       alert("Please enter principal");
       document.getElementById("principal").focus();
   }else if(rate == ""){
       alert("Please enter rate");
   }else if(years == ""){
       alert("Please enter years");
   }else{

        if(principal <= 0){
            alert("Please enter a positive number for principal");
              document.getElementById("principal").focus();
        }else{
            var amount = principal * years * rate /100;
            var year = new Date().getFullYear()+parseInt(years);
            document.getElementById("result").innerHTML = "If you deposit <span class=\"hl\">"+principal+"</span>,\<br\>at an interest rate of <span class=\"hl\">"+rate+"%</span>\<br\>You will receive an amount of <span class=\"hl\">"+amount+"</span>,\<br\>in the year <span class=\"hl\">"+year+"</span>\<br\>";
        }        
   }  
}

function updateRate() 
{
    /** Update the rate of interest on changing the slider  */
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

        