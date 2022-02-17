// Get Input Field Number
function getInputNumber(inputId){
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);

    const numberError = document.getElementById('number-error');
    const negativeNumberError = document.getElementById('negative-number');
    if(isNaN(inputNumber)){
        numberError.style.display ='block';
    }
    if(inputNumber < 0){
      negativeNumberError.style.display = 'block';
    }
    if(inputNumber > 0){
        return inputNumber;
    }
    // return inputNumber;     
}


function getTotalExpenses(){
       const foodInput = getInputNumber('food-input');
   
       const rentInput = getInputNumber('rent-input');
       
       const clothesInput = getInputNumber('clothes-input');
    
       const totalCost = foodInput + rentInput + clothesInput;
       
       const totalExpenses = document.getElementById('total-expenses');

       const incomeInput = getInputNumber('income-input');
       const ifCostMore = document.getElementById('more-cost-error');

       if(incomeInput > totalCost){
        totalExpenses.innerText = totalCost;
        return totalCost;
    }
      if( totalCost > incomeInput){
         ifCostMore.style.display = 'block';
       }
    
    //    return totalCost;
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
    const balance = getBalance();
    const moreSavingsError = document.getElementById('more-savings-error');
    if(save < balance){
      savingAmount.innerText = save;
     const remainInput = document.getElementById('remaining-balance');
      const remainingBalance = balance -save;
      remainInput.innerText = remainingBalance;
    }
    else{
      moreSavingsError.style.display ='block';
    }
    
})