const transpose = function (letters) {
  
    let mainOutputArray = [];
  
    const addSubArrays = function(letters) {
      for (let m = 0; m < letters[0].length; m++) {
        mainOutputArray.push([]);
      }
    };
  
    addSubArrays(letters);
  
    for (let row = 0; row < letters.length; row++) {
      for (let column = 0; column < letters[row].length; column++) {
        mainOutputArray[column][row] = letters[row][column];
      }
    }
  
    return mainOutputArray;
  };
  

// const transpose = require('../../async/matrix_transposition');

const wordSearch = (letters, word) => { 
    if (letters.length === 0 || word.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const transposedLetters = transpose(letters);

    const verticalJoin = transposedLetters.map(ls => ls.join(''))

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    return false;
}


module.exports = wordSearch;