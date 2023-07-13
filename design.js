var a= parseInt(prompt("enter the value"))
var b= parseInt(prompt("enter the value"))
var op=prompt("Enter the operator");
switch(op){
    case '+':document.getElementById("result").textContent = a+b;break;
    case '-':document.getElementById("result").textContent = a-b;break;
    case '*':document.getElementById("result").textContent = a*b;break;
    case '%':document.getElementById("result").textContent = a/b;break;
}