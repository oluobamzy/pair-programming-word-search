
    const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    let horizontalSearch = [];
    for(let i = 0; i < letters[0].length; i++){
      horizontalSearch.push(letters[i].join(''))
    }
    let verticalSearch =[];
    for (let j = 0; j < letters[0].length; j++) {
        let verticalWord = '';
        for(let i = 0; i <letters.length; i++) {
            verticalWord += letters[i][j];
        }
        verticalSearch.push(verticalWord);
    }
    if (horizontalSearch.includes(word) || verticalSearch.includes(word)) {
        return true;
    }
  return false;
}


module.exports = wordSearch