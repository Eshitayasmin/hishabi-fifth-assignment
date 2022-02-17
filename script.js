// Get Input Field Number
function getInputNumber(inputId){
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    return inputNumber;     
}


function getTotalExpenses(){
       const foodInput = getInputNumber('food-input');
   
       const rentInput = getInputNumber('rent-input');
       
       const clothesInput = getInputNumber('clothes-input');
    
       const totalCost = foodInput + rentInput + clothesInput;
       
       const totalExpenses = document.getElementById('total-expenses');
       totalExpenses.innerText = totalCost;

       return totalCost;
}

function getBalance(){
    const incomeInput = getInputNumber('income-input');
    const balanceInput = document.getElementById('balance');
    const balance = incomeInput - getTotalExpenses();
    balanceInput.innerText = balance;
    return balance;
}
//Calculate button event handler
document.getElementById('calculate-button').addEventListener('click', function(){
    
    getBalance();

})

//Save button event handler
document.getElementById('save-button').addEventListener('click', function(){
    const incomeInput =getInputNumber('income-input');
    const saveInput = getInputNumber('save-input');
    const savingAmount = document.getElementById('saving-amount');
    let save = incomeInput * saveInput / 100;
    savingAmount.innerText = save;
    
    const balance = getBalance();
    //update remaining balance
    const remainInput = document.getElementById('remaining-balance');
    const remainingBalance = balance -save;
    remainInput.innerText = remainingBalance;

})