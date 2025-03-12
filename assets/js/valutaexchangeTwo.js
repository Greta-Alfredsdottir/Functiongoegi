
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
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;




    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}






// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}

// skriv din kode herunder

function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    //console.log('myEuroRate: ' + myEuroRate);
    //console.log('myDollarRate: ' + myDollarRate);
    //console.log('myDanishAmount: ' + myDanishAmount);

    let myEuroResult = myDanishAmount / myEuroRate;
    let myDollarResult = myDanishAmount / myDollarRate;

    //console.log('myEuroResult: ' + myEuroResult);
    //console.log('myDollarResult: ' + myDollarResult);

    showResult(myEuroResult, myDollarResult, myDanishAmount);
}
function calculateExchange() {
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;

    let myEuroResult = myDanishAmount / myEuroRate;
    let myDollarResult = myDanishAmount * myDollarRate;

    showResult(myEuroResult, myDollarResult, myDanishAmount);
}   