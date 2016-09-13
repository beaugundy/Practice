

function combine(array1, array2){
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + " " + array2[i]);
    return newArray;
  }
}

var arr1 = ['mark', 'luke', 'jacob'];
var arr2 = ['mciver', 'schunk', 'talley'];

var combined = combine(arr1, arr2);
console.log(combined);
