function unite(arr1, arr2, arr3) {  
  /* Write a function that takes two or more arrays and returns 
  a new array of unique values in the order of the original 
  provided arrays. */
  
  for (var i in arr2) {
    if (arr1.indexOf(arr2[i]) === -1) arr1.push(arr2[i]);
  }

  for (i in arr3) {
    if (arr1.indexOf(arr3[i]) === -1) arr1.push(arr3[i]);
  }
  
  return arr1;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);  