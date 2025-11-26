const textInput = document.getElementById("inputText");
const result = document.getElementById("result");
const btn = document.getElementById("Vowel_btn");

function isVowel(text) {
  const Vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of text) {
    if (Vowels.includes(char)) {
      // count = count +1
      count++;
    }
    
  }
  return count;
}
function reset() {
  textInput.value = "";
 
}
function checkVowels() {
  const user_input = textInput.value;
  const vowelCount = isVowel(user_input);
  result.innerHTML = `Number of vowels: ${vowelCount}`;
  reset();
}
// btn.addEventListener('click', checkVowels);
