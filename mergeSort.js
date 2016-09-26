function mergeSort(data) {
    if (data.length == 1 ) {
      return data;
    }  
    var mid = data.length / 2;
    var left = data.slice(0, mid);
    var right = data.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
  
function merge(left, right) {
    var result=[];
    var leftIndex=0;
    var rightIndex=0;
  
    while (leftIndex<left.length && rightIndex<right.length) {
        if (left[leftIndex]>right[rightIndex]) {
            console.log('RIGHT: ', right[rightIndex], rightIndex);
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            console.log('LEFT: ', left[leftIndex], leftIndex);
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while (leftIndex<left.length) {
        console.log('LEFT WHILE: ', left[leftIndex], leftIndex);
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex<right.length) {
        console.log('RIGHT WHILE: ', right[rightIndex], rightIndex);
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9, 56, 98, 34, 78, 54, 88, 980];
console.log(mergeSort(a));
