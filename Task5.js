const count = (x, n) => {
  let number = x;
  for (i = 2; i <= n; i++){
    number = number*x;
  }
  return number;
}

console.log(count(36, 10))