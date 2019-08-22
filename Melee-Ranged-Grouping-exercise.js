function meleeRangedGrouping (str) {
    //Inisialisasi Variabel
    var arr = [];
    var arrMelee = [];
    var arrRanged = [];
    var arrTemp = [];
    var string = "";

    if (!str){
        return arr;
    }
    for (var i = 0; i <= str.length; i++){
        if (str[i] == "-"){
            arrTemp.push(string);
            string = "";
        } else if (str[i] == "," || i == str.length){
            arrTemp.push(string);
            string = "";
            if (arrTemp[1] == "Ranged"){
                arrRanged.push(arrTemp[0]);
            } else {
                arrMelee.push(arrTemp[0]);
            }
            arrTemp = [];
        } else {
            string += str[i];
        }
    }
    arr.push(arrRanged);
    arr.push(arrMelee);
    return arr;
 }
  
// TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  

console.log(meleeRangedGrouping('')); // []