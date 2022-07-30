const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.getElementById('parrafo-id');


function btnClick(){
    let value1 = parseInt(input1.value);
    let value2 = parseInt(input2.value);
    let result = value1 + value2;
    p.innerText = "Resultado: " + result;
}

