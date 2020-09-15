let total = 0;
let account = {
    name: "John",
    expenses: []
}

function addExpenses(description, amount) {
    account.expenses.push({description: description, amount: amount})
}

function getAccountSummary() {
    account.expenses.forEach(function(el){
        total = total + el.amount;
    })
    console.log("Total pengeluaran "+ account.name +" adalah Rp. "+ total);
}

addExpenses("Beli Makanan",45000);
addExpenses("Ongkos",5000);
getAccountSummary();