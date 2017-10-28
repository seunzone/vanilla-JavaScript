//Simple App showing Account Balance after Purchase

var accountBalance = 500;
var shoe = 700;
var coupon = 900;

if (accountBalance >= shoe){
	accountBalance -= shoe;
	console.log("Purchase was sucessful and your account balance is: " + accountBalance);
} 
else if (shoe - coupon <= accountBalance){
	accountBalance -= shoe - coupon;  
	console.log("We just bought an amazing shoe using a COUPON");
	console.log("Our Account Balance is " + accountBalance);
} else {
	console.log("You aint got enough geez bra!");
}
