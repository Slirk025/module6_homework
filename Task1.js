let arr = [15, true, 0, 1, 4,2];
let arrNew = [10, 2, 45, "tg", null, 0, 123, 12, "gbfjbnf", "fvhuvfvr", 506];
function CountNumber(arr){
let even = 0;
let odd = 0;
let other =0;

for(i = 0; i < arr.length; i++){
  if ((typeof(arr[i]) != 'number') || arr[i] === 0){
    other++;
  }
   else if ((arr[i] % 2) === 0){
      even++;
    }
    else{
      odd++;
    }
}
  return [even, odd, other];
}
let result = CountNumber(arrNew);
console.log("Четных " + result[0]);
console.log("Нечетных " + result[1]);
console.log("Остальных " + result[2]);
