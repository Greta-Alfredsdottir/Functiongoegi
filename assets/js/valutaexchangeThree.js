
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});




// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {
    const myDanishAmount = document.getElementById('danishAmount').value;
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;
    //alert('Jeg har indsamlet data: ' + myDanishAmount);
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    calculateCurrency(myDanishAmount);
}




// håndterer data behandling  (controller code fra MVC)
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
    let myEuroResult = myDanishAmount / myEuroRate;
    let myDollarResult = myDanishAmount / myDollarRate;
    showResult(myEuroResult, myDollarResult, myDanishAmount);
}


// sub funktion der udfører en opgave og returnerer et resultat.  stadig controller code i MVC

function calculateCurrency(myDanishAmount)
{
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;
    let myEuroResult = calculateExchange(myDanishAmount, myEuroRate);
    let myDollarResult = calculateExchange(myDanishAmount, myDollarRate);
    showResult(myEuroResult, myDollarResult, myDanishAmount);
}    


// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}
function calculateExchange(myDanishAmount, myRate) {
    return myDanishAmount / myRate;
}