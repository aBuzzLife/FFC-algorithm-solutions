function factorialize(num) {
  var result = 1;
  
  for (i=1; i<=num; i++) {
    result = result * i; 
  }
  return result;
}

factorialize(5);