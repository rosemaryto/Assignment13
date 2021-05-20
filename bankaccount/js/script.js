
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function() {
    "use strict";
    $("urName").addEventListener("click", function addurName() {
        var userName = prompt("Enter your name");   
        window.console.log(userName); 
    });
    $("urDeposit").addEventListener("click", function addurDeposit() {
        var userDeposit = prompt("Enter deposit amount");
        window.console.log(userDeposit);
    });
    $("urWithdrawal").addEventListener("click", function addurWithdrawal() {
        var userWithdrawal = prompt("Enter withdrawal amount");
        window.console.log(userWithdrawal);
    });
});


const bankAccount = (initialBalance) => {
  const balance = initialBalance;

  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(depositAmount) {
      depbal = balance + depositAmount;
      return depbal;
    },
    withdrawal: function(withdrawalAmount) {
      withbal = depbal - withdrawalAmount;
      return withbal;
    }
  };
};

const account = bankAccount(100);

window.document.write("Start Balance: " + account.getBalance() + "<br>");
window.document.write("After Deposit $10: " + account.deposit(10) + "<br>");
window.document.write("After Withdrawal $50: " + account.withdrawal(50));

