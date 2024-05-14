let butsoma = document.getElementById('butsoma');
let butsubt = document.getElementById('butsubtr');
let butmult = document.getElementById('butmult');
let butdivi = document.getElementById('butdivi');
let mostrar = document.getElementById('mostrar');

butsoma.addEventListener('click', function(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultadosoma = num1 + num2
    mostrar.innerHTML = resultadosoma;   
});
butsubt.addEventListener('click', function(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultadosubtr = num1 - num2;
    mostrar.innerHTML = resultadosubtr;
});
butmult.addEventListener('click', function(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultadomult = num1 * num2;
    mostrar.innerHTML = resultadomult;
});
butdivi.addEventListener('click',function(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultadodivi = num1 / num2;
    mostrar.innerHTML = resultadodivi;
});
