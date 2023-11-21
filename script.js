const button = document.querySelector(".btn");
const textArea = document.querySelector("textarea");
const wordCount = document.querySelector(".word-counts");

const wordCalc = function () {
  let words = textArea.value;
  //   replacing extra spaces by single space
  let trimmedWord = words.replace(/\s+/g, " ").trim();

  //   splitting words by space (' ')
  let wordSpilt = trimmedWord.split(" ");

  let numberOfWords = wordSpilt.length;
  if (wordSpilt[0] == "") {
    numberOfWords = "0";
  }
  wordCount.innerHTML = numberOfWords;
};

button.addEventListener("click", wordCalc);
