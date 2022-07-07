// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b){
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else{
    return a;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length === 0){
    return null;
  }
  else if(words.length === 1){
    return words[0];
  }
  else{
    var max = 0;
    var pos = 0;
    for (let i = 0; i < words.length; i++) {
      if(words[i].length > max){
        max = words[i].length
        pos = i;
      }
    }
    return words[pos];
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length === 0){
    return 0;
  }
  else if(numbers.length === 1){
    return numbers[0];
  }
  else{
    var not0 = true;
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] !== 0){
        not0 = false;
      }
    }
    if(not0 === true){
      return 0;
    }
    else{
      var sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum = sum  + numbers[i];
      }
      return sum;
    }
  }
}

// Progression #3.1 (Bonus): A generic sum() function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){  
  let sum=0;
  for(i=0;i<mixedArr.length;i++){
    if(typeof mixedArr[i]=='string'){      
        sum = sum + mixedArr[i].length;    
    } 
    else if(mixedArr[i]==true){
      sum = sum+1;
    }
    else if(mixedArr[i]==false){
      sum = sum +0;
    }
    else if(typeof mixedArr[i]==="number"){      
        sum = sum + mixedArr[i];      
    }    
    else throw Error("Unsupported data type sir or ma'am");
  }      
  return sum; 
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg) {
  if(numbersAvg.length === 0){
    return null;
  }
  else{
    var sum = 0;
    for (let i = 0; i < numbersAvg.length; i++) {
      sum = sum  + numbersAvg[i];
    }
    var avg = sum / (numbersAvg.length)
    return avg;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  if(wordsArr.length === 0){
    return null;
  }
  else{
    var sum = 0;
    for (let i = 0; i < wordsArr.length; i++) {
        var len = wordsArr[i].length;
        sum += len;
    }
    var avg = sum / wordsArr.length;
    return avg;
  }
}


//Progression #4.3 (Bonus): A generic avg() function
const mixedArr2 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(mixedArr2) {
  if(mixedArr2.length === 0){
    return null;
  }
  else{
    let length = mixedArr2.length;
    let sum = 0;
    for(let i = 0; i < length; i++) {
      if (typeof mixedArr2[i] === 'string') {
        sum += mixedArr2[i].length;
      }
      else if (typeof mixedArr2[i] == true) {
        sum ++;
      } 
      else {
        sum += mixedArr2[i]
      }
    }
    let avg = parseFloat((sum/length).toFixed(2));
    return avg;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
const arr = [];
function uniqueArray(wordsUnique) {
  if(wordsUnique.length === 0){
    return null;
  }
  else{
    const arr = [];
    for (let i = 0; i < wordsUnique.length; i++) {
      if (arr.indexOf(wordsUnique[i]) === -1) {
        arr.push(wordsUnique[i])
      }
    }
    return arr;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
var a = '';
function searchElement(wordsFind, a) {
  if(wordsFind.length === 0){
    return null;
  }
  else{
    var ctr = 0;
    for (let i = 0; i < wordsFind.length; i++) {
      if(a === wordsFind[i]){
        ctr++;
      }
    }
    if (ctr === 0) {
      return false;
    }
    else{
      return true;
    }
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
var a = '';
function howManyTimesElementRepeated(wordsCount, a) {
  if(wordsCount.length === 0){
    return 0;
  }
  else{
    var ctr = 0;
    for (let i = 0; i < wordsCount.length; i++) {
      if(a === wordsCount[i]){
        ctr++;
      }
    }
    return ctr;
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) {
  var temp = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== 1) {
        temp=false;
      }
    }
  }
  if (temp === true) {
    return 1;
  }
}