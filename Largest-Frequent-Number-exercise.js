function sorting(arrNumber) {
    var arr = arrNumber.sort(function (a,b) {return a<b;});
    arrNumber = arr;
    return arrNumber;
}
  
function getTotal(arrNumber) {
    var pengulangan = 0;
    for (var i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] == arrNumber [0]){
            pengulangan++;
        }
    }
    if (arrNumber.length == 0){
        return "";
    } else {
        return "angka paling besar adalah " + arrNumber[0] + " dan kemunculannya sebanyak " + pengulangan + " kali";
    }
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''