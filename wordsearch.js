const transpose = function (array) {
    let results = [];
    for (let i = 0; i < array[0].length; i++) {
      results.push([]);
  
      for (let j = 0; j < array.length; j++) {
        results[i].push(array[j][i]);
      }
    }
    return results;
  };
  
  // const diagonalTranspose = function (array, word) {
  //   let copyArr = [...array];
  //   let indexI = 0;
  //   let indexJ = 0;
  //   for (let i = 0; i < array.length; i ++) {
  //     for (let j = 0; j < array[i].length; j ++) {
  //       if (array[i][j] === word[0]) {
  //         //console.log(`i: ${i} j: ${j}`);
  //         indexI = i;
  //         indexJ = j;
  //         for (let k = 1; k < word.length; k++) {
  
  //           if (array.length >= k + j && array[i].length >= i + k) {
  
  //             if (array[Math.abs(i + k)][Math.abs(j + k)] === word[k] || array[Math.abs(i - k)][Math.abs(j - k)] === word[k] || array[Math.abs(i - k)][Math.abs(j + k)] === word[k] || array[Math.abs(i + k)][Math.abs(j - k)] === word[k]) {
  //               //console.log(`Found letter at k: ${k}`);
  //               if (k === word.length - 1) {
  //                 return true;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return false;
  // };
  
  
  const wordSearch = (letters, word) => {
    if (letters.length === 0) {
      return false;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const reverseHorizontalJoin = letters.map(ls => ls.reverse().join(''));
    for (const l of reverseHorizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    let transposedArray = transpose(letters);
    // console.log(transposedArray);
    const verticalJoin = transposedArray.map(ls => ls.join(''));
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    const reverseVerticalJoin = transposedArray.map(ls => ls.reverse().join(''));
    for (const l of reverseVerticalJoin) {
      if (l.includes(word)) return true;
    }
  
    // if (diagonalTranspose(letters, word)) {
    //   return true;
    // }
  
    //console.log(verticalJoin);
    return false;
  };
  module.exports = wordSearch;
  
  
  const result = wordSearch([
    ['F', 'W', 'C', 'K', 'G', 'A', 'R', 'F'],
    ['S', 'R', 'I', 'N', 'F', 'E', 'R', 'D'],
    ['Y', 'F', 'A', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'K'],
    ['W', 'H', 'C', 'S', 'K', 'E', 'R', 'N'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'C'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'R'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'B'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK');