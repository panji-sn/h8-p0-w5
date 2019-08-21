function cariPelaku(str) {
   var arr = str.match(/abc/g);
   if (!arr){
       return "Tidak ada pelaku";
   } else {
       return arr.length;
   }
}
  
// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
 
//var paragraph = 'far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!'
//console.log(paragraph.match(/far/g));