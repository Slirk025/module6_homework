let number = +prompt('Введите простое число');

function isPrime(number){
  let PrimeNum = 'Число простое';
  let NonPrimeNum = 'Не верные данные';
 if (number <= 1 || number > 1000){
   return NonPrimeNum;
 }
  else if (number == 2){
    return PrimeNum;
  }
  for (let i = 2; i <= number/2; i++){
    if (number % i == 0){
      return NonPrimeNum;
    }
    else{
      return PrimeNum;
    }
  }
}
console.log(isPrime(number));
