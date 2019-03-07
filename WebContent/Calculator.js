//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  
  //Calculate tip
  var total = (billAmt * serviceQual);
  var totalBill = parseFloat(total) + parseFloat(billAmt);
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  totalBill = Math.round(totalBill * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  totalBill = totalBill.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  document.getElementById("totalBill").style.display = "block";
  document.getElementById("totBill").innerHTML = totalBill;
}

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};