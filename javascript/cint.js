function compoundInterest(principal, rate, time, n) {
  // Convert percentage rate to decimal
  rate = rate / 100;

  // Formula: A = P * (1 + r/n)^(n*t)
  let amount = principal * Math.pow((1 + rate / n), n * time);

  // Compound interest = Total amount - Principal
  let interest = amount - principal;

  return {
    totalAmount: amount.toFixed(2),
    compoundInterest: interest.toFixed(2)
  };
}

// Example usage:
let result = compoundInterest(10000, 10, 2, 4); 
// Principal = 10000, Rate = 10%, Time = 2 years, Quarterly compounding

console.log("Total Amount: ₹" + result.totalAmount);
console.log("Compound Interest: ₹" + result.compoundInterest);