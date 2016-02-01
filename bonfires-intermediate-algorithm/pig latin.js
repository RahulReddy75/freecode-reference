//solution 1
function translate(str) {
  // Create variables to be used
  var newstr = '';
  var re = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(re)) {
    newstr = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(re)[0]);
   
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    newstr = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return newstr;
}

translate("clifornia");


//solution 2 
function translate(str) {
  //finding all the consonants in the beginning of the str. 
  //by using && below I'm achiving a concept called Intersection of Regular Expressions
  //where your pattern finds the union of two or more RegEx rules. 
  //In Java you can achive this with RegEx special character '&&' 
  //but in Javascript you can use the following instead. 
  //Credit goes to http://stackoverflow.com/q/6595477
  var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');

  //if no consonants found (i.e. str starts with vowels)
  //use replace to remove consonants and construct newStr else add 'way' in the end
  if (consChars !== ''){
    newStr = str.replace(consChars, '') + consChars + "ay";
  } else {
    newStr = str + "way";
  }
  return newStr;
}

// solution 3:
function translate(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else 
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

translate("consonant");