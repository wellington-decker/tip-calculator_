const billInput = document.querySelector(".bill_input");
const numberOfPeople = document.querySelector(".num-of-people__input");
const fiveBtn = document.querySelector(".five");
const tenBtn = document.querySelector(".ten");
const fifteenBtn = document.querySelector(".fifteen");
const twenFiveBtn = document.querySelector(".twenty-f");
const fiftyBtn = document.querySelector(".fifty");
const customInput = document.querySelector(".custom");
const zeroErr = document.querySelector(".err");
const tipResult = document.querySelector(".tip-amount-result");
const totalResult = document.querySelector(".total-person");
const resetBtn = document.querySelector(".reset-button");



const applyFive = () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = 5/100;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;

        fiveBtn.style.backgroundColor =  'hsl(172, 67%, 45%)';
        fiveBtn.style.color =  'hsl(183, 100%, 15%)';
    } 
}

const applyTen = () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;

    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = 10/100;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;

        tenBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
        tenBtn.style.color =  'hsl(183, 100%, 15%)';
    }
}

const applyFifteen = () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = 15/100;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;

        fifteenBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
        fifteenBtn.style.color =  'hsl(183, 100%, 15%)';
    }
}

const applyTwentyF = () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = 25/100;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;

        twenFiveBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
        twenFiveBtn.style.color =  'hsl(183, 100%, 15%)';
    }
}

const applyFifty = () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = 0.5;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;

        fiftyBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
        fiftyBtn.style.color =  'hsl(183, 100%, 15%)';          
    }

}

const applyCustom = () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    let custom_ = +customInput.value;
    
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = custom_;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;
    }
}



fiveBtn.addEventListener('click', applyFive);
tenBtn.addEventListener('click', applyTen);
fifteenBtn.addEventListener('click', applyFifteen);
twenFiveBtn.addEventListener('click', applyTwentyF);
fiftyBtn.addEventListener('click', applyFifty);
customInput.addEventListener('input', () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    let custom_ = +customInput.value;
    
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let percent_ = custom_/100;
        let tip_ = (bill_input * percent_).toFixed(2) / number_of_people;
        tipResult.innerHTML = "$" + `${tip_.toFixed(2)}`;

        let total_ = (bill_input + (bill_input * percent_)).toFixed(2) / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;
    }
});


numberOfPeople.addEventListener('input', () => {
    let bill_input = +billInput.value;
    let number_of_people = +numberOfPeople.value;
    if(numberOfPeople.value == ""){
        alert("Number of People has no input");
    }else if(number_of_people == 0){
        zeroErr.style.display = 'block';
        numberOfPeople.style.outline = '1px solid red';
    }else{
        let total_ = bill_input / number_of_people;
        totalResult.innerHTML = "$" + `${total_.toFixed(2)}`;
    }
});



