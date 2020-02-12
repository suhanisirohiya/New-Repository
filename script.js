function demo1(){
    var a=6;

    if(a%2==0)
      document.getElementById("demo").innerHTML= a + " is EVEN";
    else
      document.getElementById("demo").innerHTML= a + " is ODD";
}

function calc(){
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var c=parseInt(a)+parseInt(b);
    var d=parseInt(a)-parseInt(b);
    var e=parseInt(a)*parseInt(b);
    var f=parseInt(a)/parseInt(b);
    document.getElementById("demo").innerHTML= "Addition is: " + c + " Subtraction is: " + d + " Product is : " + e + " Quotient is: " + f;
}
