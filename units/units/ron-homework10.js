// Task 1 
const calculateTotalPrice1 = (cart) => {
    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    }

    let total = 0;

    for (const item in cart) {
        if (prices[item]) total += prices[item] * cart[item]
    }
    return total;
}

// Task 2
const calculateTotalPrice2 = (cart) => {
  const prices = {
    Apple: 2.00,
    Orange: 3.29,
    Mango: 4.99,
    Pineapple: 5.25
  }  

  let total = 0;

  for (const item in cart) {
    const qty = cart[item];
    
    total += item === 'Apple' 
    ? (Math.floor(qty / 2) * prices.Apple * 0.5) + (Math.ceil(qty / 2) * prices.Apple)
    : item === 'Mango' 
    ? (qty - Math.floor(qty / 4)) * prices.Mango
    : prices[item] * qty
  }

  return Math.round(total * 100) / 100;
}

// Task 3
const nthWord = (str, num) => {
    const words = str.trim().split(/\s/);
    return num > 0 && num <= words.length ? words[num-1] : "";
}

// Task 4
const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const exponent = digits.length;

    const sum = digits.reduce((x, y) => x + Math.pow(Number(y), exponent), 0);

    return sum === num;
}

// Task 5
const reverseNumber = (num) => {
    let reversed = 0;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reversed;
}

// Task 6
const doubleOrTriple = (arr, bool) => arr.map(num => num * (bool ? 2 : 3));

// Task 7
const splitString = (str, num) => {
    if (str.length < num || str.length % num !== 0) return "";

    let result = [];

    for (let i = 0; i < str.length; i += num) result.push(str.slice(i, i + num));

    return result.join(" ");
}


module.exports = {
    calculateTotalPrice1,
    calculateTotalPrice2,
    nthWord,
    isArmstrong,
    reverseNumber,
    doubleOrTriple,
    splitString
}