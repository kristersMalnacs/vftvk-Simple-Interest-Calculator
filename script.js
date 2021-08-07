function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;



    // Show result
    var year = new Date().getFullYear();
    var nr_years = parseInt(year, 10) + parseInt(years, 10);
    var interest_rate = principal * years * rate / 100;
    var result = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark>. <br> You will receive an amount of <mark>" + interest_rate + "</mark>,<br> in the year <mark>" + nr_years + "</mark>";
    document.getElementById("result").innerHTML = result;

    //Check if the input number is positive
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
}
// Show the range value in %
function range_val(value) {
    document.getElementById("number").innerHTML = value + '%';
}
