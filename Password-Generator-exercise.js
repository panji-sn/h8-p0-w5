function changeVocals (str) {
    var vocalCap = ["B","F","J","P","V"];
    var vocalLow = ["b","f","j","p","v"];
    var arr = [];
    
    for (var i = 0; i < str.length; i++){
        if (str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=="o"||str[i]=="O"||str[i]=="u"||str[i]=="U"){
            switch (str[i]) {
                case "a":
                    arr.push(vocalLow[0]);
                    break;
                case "A":
                    arr.push(vocalCap[0]);
                    break;
                case "e":
                    arr.push(vocalLow[1]);
                    break;
                case "E":
                    arr.push(vocalCap[1]);
                    break;
                case "i":
                    arr.push(vocalLow[2]);
                    break;
                case "I":
                    arr.push(vocalCap[2]);
                    break;
                case "o":
                    arr.push(vocalLow[3]);
                    break;
                case "O":
                    arr.push(vocalCap[3]);
                    break;
                case "u":
                    arr.push(vocalLow[4]);
                    break;
                case "U":
                    arr.push(vocalCap[4]);
                    break;
                default:
                    break;
            }
        } else {
            arr.push(str[i]);
        }   
    }
    str = arr.join("");
    return str;
}

function reverseWord (str) {
    var arrRev = [];
    for (var j = str.length-1; j >= 0; j--){
        arrRev.push(str[j]);
    }
    str = arrRev.join("");
    return str;
}

function setLowerUpperCase (str) {
    var arrLowUp = [];
    var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var cap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (var k = 0; k < str.length; k++){
        if (str[k] == " "){
            arrLowUp.push(" ");
        }
        for (var l = 0; l < low.length; l++){
            if (low[l] == str[k]){
                arrLowUp.push(cap[l]);
            } else if (cap[l] == str[k]){
                arrLowUp.push(low[l]);
            }
        }
    }
    str = arrLowUp.join("");
    return str;
}

function removeSpaces (str) {
  var strKosong = "";
  for (var m = 0; m < str.length; m++){
    if (str[m] !== " "){
        strKosong+= str[m];
    }
  }
  return strKosong;
}

function passwordGenerator (name) {
    if (name.length > 4){
        var vocals = changeVocals(name);
        var reverse = reverseWord(vocals);
        var lowUpper = setLowerUpperCase(reverse);
        var hasil = removeSpaces(lowUpper);
        return hasil;
    } else {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'