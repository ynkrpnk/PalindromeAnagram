"use strict";
const separator = "";

const isPalindrome1 = (word) => {
  const lowerWord = word.toLowerCase().replaceAll(" ", "");
  const reversed = lowerWord.split("").reverse().join("");

  return reversed === lowerWord;
};

const isPalindrome2 = (word) => {
  const cleanWord = word.toLowerCase().replaceAll(" ", "");
  const len = cleanWord.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleanWord[i] !== cleanWord[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

const isAnagram1 = (str1, str2) => {
  const prepareString = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
  };
  const sorted1 = prepareString(str1);
  const sorted2 = prepareString(str2);

  return sorted1 === sorted2;
};

const isAnagram2 = (data) => {
  const s1 = data[0].toLowerCase().replaceAll(" ", "");
  const s2 = data[1].toLowerCase().replaceAll(" ", "");

  if (s1.length !== s2.length) return false;
  const charCount = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  for (let key in charCount) {
    if (charCount[key] !== 0) return false;
  }

  return true;
};

console.log(isPalindrome1("А рОза упала нА лапУ Азора"));
console.log(isPalindrome2("А рОза упала нА лапу Азора"));
console.log(isAnagram1("ТоПор", "ропот"));
console.log(isAnagram2(["ТоПор", "ропот"]));