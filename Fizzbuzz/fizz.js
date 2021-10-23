var numeros = 100;
var numeroActual;
var mainContainer = document.getElementById('main-container');
var item;

for(var i = 1; i <= 100; i++){
    numeroActual = i;
    item = 'dark';
    console.log(item);
    // fizz
    if(esDivisible(i, 3)){
        numeroActual = 'Fizz';
        item = 'danger';
    }
    // buzz
    if(esDivisible(i, 5)){
        numeroActual = 'Buzz';
        item = 'primary';
        if(esDivisible(i, 3)){
            numeroActual = 'FizzBuzz';
            item = 'success'
        }
    }
    mainContainer.insertAdjacentHTML('beforeend', ('<button class="btn btn-' +item + ' m-1">' + numeroActual + '</button>'));
}

function esDivisible(num, divisor){
    if(num % divisor == 0){
        return true;
    }
    else{
        return false;
    }
}