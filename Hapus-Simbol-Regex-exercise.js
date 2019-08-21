function hapusSimbol(str) {
    //var arr = [];
    str = str.match(/[a-z0-9]/gi)
    str = String(str.join(""));
    return str;
}
  
// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
//var string = 'devel0p3r s3j@@ati';
  
//console.log(arr);
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]