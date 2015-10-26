var account = {
	balance: 0
};

//deposit 
function deposit(account, amount){


	account.balance = account.balance + amount;

}

//Withdraw 

function withdraw(account, amount){
	
	account.balance = account.balance - amount;
}

//getBalance

function getBalance(account){


	console.log (account.balance);
}

deposit(account, 23);
withdraw(account, 2);
getBalance(account);

var name = undefined;

console.log(name);