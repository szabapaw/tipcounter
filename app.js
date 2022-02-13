const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBill=()=>
{
    if(price.value === '' || people.value === '' || tip.value === 0){
            error.textContent='Uzupełnij wszystkie pola!';
    }
    else{
        error.textContent='';
    countBill();

    }
};


const countBill=()=> {
    const newPrice = parseFloat(price.value);//typ string został przerobiony na liczbę po przecinku;
    const newPeople = parseInt(people.value);//typ string został przerobiony na liczbę-parseInt
    const newTip = parseFloat(tip.value) //typ string został przerobiony na liczbę po przecinku;

    const sum = (newPrice + (newPrice * newTip)) / newPeople;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2)//zaokroąglanie dp 2 miesjc po przecinku
    }
countBtn.addEventListener('click', showBill)
