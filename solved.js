
//Challenges to have a go at first

//Multiply

function multiply(a, b){
    return a * b
   
 }
//Even Or Odd

function even_or_odd(number) {
    if (number % 2 == 0)
      return ('Even')
      else return ('Odd');
    }

//Sum of Positive

function positiveSum(arr) {
    let sum = 0
    arr.forEach(num => num >0 && (sum +=num))
    return sum 
    
    
  }

//Opposite Number

function opposite(number) {
    return (-number);
  }

//Sentence Smash
// Smash Words
smash = function (words) {
    return words.join(" ");
  };   
      

//If you can't sleep, just count sheep!!
//Given a non-negative integer, 3 for example, 
//return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative integers.

const countSheep = length =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('')
  

//Grasshopper - Summation
//watched this solution on youtube


var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }