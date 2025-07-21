console.log("\nTask-10\n");

const swapFirstLastWord = (str) => {
  const words = str.trim().split(" ").filter(w => w !== "");

  if (words.length < 2) return "";

  // Swap first and last
  const first = words[0];
  const last = words[words.length - 1];

  words[0] = last;
  words[words.length - 1] = first;

  return words.join(" ");
}

testWords = ["Hello World", "I like JavaScript", "foo bar foo bar", "", "Hello", "Hello "];
console.log(swapFirstLastWord(testWords[0]))