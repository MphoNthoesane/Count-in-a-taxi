let money;
let numberof;
let charge;
let change;
let fee = 14;

document.getElementById("submit").onclick = function(){
    money = document.getElementById("money").value;
    numberof = document.getElementById("people").value;
    charge = numberof * fee;
    change = money - charge;

    document.getElementById("p1").innerHTML = "You must pay R" + charge;
    document.getElementById("p2").innerHTML = "Your change is R" + change;


}