
// Name: Constrained Writing
// URL: https://edabit.com/challenge/yeevEvr7SKTtbekKm

function constraint(txt) {

  // Pangram
  let PangramAlphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < txt.length; i++) {
    let currentLetter = txt[i].toLowerCase();
    if (PangramAlphabet.indexOf(currentLetter) > -1) {
      // if currentLetter is in the alphabet, remove it
      PangramAlphabet = PangramAlphabet.replace(currentLetter, "");
    }
  }
  if (PangramAlphabet == "") return "Pangram"; // if all the letters of the alphabet were removed, return "Pangram"

  // Heterogram
  let lettersOfSentence = "";
  let Heterogram = true;
  for (let i = 0; i < txt.length; i++) {
    if (lettersOfSentence.indexOf(txt[i]) === -1) {
      lettersOfSentence += txt[i].toLowerCase();
      lettersOfSentence = lettersOfSentence.trim();
    } else {
      // letter already exists in the sentence
      Heterogram = false;
      break;
    }
  }
  if (Heterogram) return "Heterogram";

  // Tautogram
  let firstLetter;
  let Tautogram = true;
  for (let i = 0; i < txt.split(" ").length; i++) {
    if (typeof firstLetter === "undefined")
      firstLetter = txt.split(" ")[i][0].toLowerCase();
    if (txt.split(" ")[i][0].toLowerCase() !== firstLetter) Tautogram = false; // word's first letter isn't equal of firstLetter
  }
  if (Tautogram) return "Tautogram";

  // Transgram

  
}

constraint("A cannibal alligator has attacked an unaware vegan alligator.");


/* Description:

In this challenge, establish which type of constrained writing is applied to a sentence. There are four possible types to detect:

Pangram: the sentence contains all the 26 letters of the English alphabet.
Heterogram: the sentence doesn't have multiple instances of its letters (as to say that every letter is unique).
Tautogram: every word of the sentence starts with the same letter.
Transgram: all words of the sentence share at least a common letter.
Given a string txt being a sentence, implement a function that returns the strings "Pangram", "Heterogram", "Tautogram" or "Transgram" accordingly to the above definitions and following the same given order to establish the result. If no constrained writing is detected, return the string "Sentence". */