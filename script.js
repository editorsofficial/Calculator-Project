function displayValue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calc(){
    var userinput = document.getElementById("display").value;
    var result = eval(userinput);

    document.getElementById("display").value = result;
}