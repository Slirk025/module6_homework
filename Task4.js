function getnumber(number1, number2){
  let progress = number1;
  
  const IntervalId = setInterval(
  function(){
    if (progress <= number2){
      console.log(progress);
      progress++;
    }
    else {
      clearInterval(IntervalId);
    }
  }, 1000)
}
getnumber(1, 10);