function quicksort(arr, customSort){

  if(!customSort) {
    //if true, place value as "greater"
    customSort = function(a, b) {
      return a > b;
    };
  }

  if (arr.length === 0) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];

  //go through each element in array
  for (var i = 1; i < arr.length; i++) {

    if (customSort(arr[i], pivot)) {
     right.push(arr[i]);
    } else {
      left.push(arr[i]);
     }
  }

  return quicksort(left).concat(pivot, quicksort(right));
};
