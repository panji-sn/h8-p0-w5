function kaliTerusRekursif(angka) {
  var str = String(angka);
  var arr = str[0];
  if (str.length == 1){
    return str;
  } else {
    for (var i = 1; i < str.length; i++){
      arr *= str[i];
    }
  }
    return kaliTerusRekursif(arr);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6