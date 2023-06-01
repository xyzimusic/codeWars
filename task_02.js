// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += getNumber(text.charAt(i));
    }
    return newText.trim();
  }
  
  function getNumber(letter) {
    const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const index = alphabetArray.indexOf(letter.toLowerCase());
    return index == -1 ? "" : " " + (index + 1);
  }