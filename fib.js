//recursively
function fibRec(i) {
  if (i < 2) {
    return i;
  } else {
    return ( fibRec(i-1) + fibRec(i-2));
  }
}

//programmatically
function fibProg(i) {
  var a = 0;
  var b = 0;
  var c = 0;

  for(var d = 0; d < i+1; d++) {
    if(d === 1) {
      c = 1;
    } else {
      c = a+b;
    }
    a = b;
    b = c;
  }

  return c;
}


//mathematically
function fibMath(i) {
  var sqrtFive = Math.sqrt(5);
  var firstHalf = 0;
  var secondHalf = 0;

  firstHalf = 1 / sqrtFive * Math.pow( ( ( 1 + sqrtFive ) / 2), i);
  secondHalf = 1 / sqrtFive * Math.pow( ( (1 - sqrtFive ) / 2 ), i);
  return Math.round(firstHalf - secondHalf);
}
