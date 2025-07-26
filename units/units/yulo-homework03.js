//Task-1
function isAverage50OrMore(num1, num2, num3) {
  const average = (num1 + num2 + num3) / 3;

  return average >= 50;
}


//Task-2
function numberMatch(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return 'TRIPLE MATCH';
  } else if (num1 === num2 || num2 === num3 || num1 === num3) {
    return 'DOUBLE MATCH';
  } else {
    return 'NO MATCH';
  }
}


//Task-3
function hasA(str) {
  return str.toLowerCase().includes('a');
}


//Task-4
function doubleOrTripleWord(str) {
  if (str === '') {
    return '';
  } else if (str === ' ') {
    return ' ';
  } else if (str.length % 2 === 0) {
    return str.repeat(3);
  } else {
    return str.repeat(2);
  }
}


//Task-5
function firstWord(str) {
  return str.trim().split(' ')[0];
}


//Task-6
function lastWord(str) {
  const words = str.trim().split(' ');

  return words[words.length - 1];
}


//Task-7
function firstLastWord(str) {
  const words = str.trim().split(' ');
  if (words.length === 1) return words[0];

  return words[0] + words[words.length - 1];
}


//Task-8
function startVowel(str) {
  const trimmed =str.trim();
  if (trimmed === '') {
    return false;
  }

  const first = trimmed.charAt(0).toLowerCase();

  return 'aeiou'.includes(first);
}


//Task-9
function swap4(str) {
  if (str.length < 8) {
    return '';
  }

  const first = str.substring(0, 4);
  const last = str.substring(str.length - 4);
  const middle = str.substring(4, str.length - 4);

  return last + middle + first;
}


//Task-10
function swapFirstLastWord(str) {
  const words = str.trim().split(' ')
  if (words.length < 2) {
    return '';
  }

  const first = words[0];
  const last = words[words.length - 1];
  const middle = words.slice(1, -1);

  return [last, ...middle, first].join(' ');
}


module.exports = {
  isAverage50OrMore,
  numberMatch,
  hasA,
  doubleOrTripleWord,
  firstWord,
  lastWord,
  firstLastWord,
  startVowel,
  swap4,
  swapFirstLastWord
}