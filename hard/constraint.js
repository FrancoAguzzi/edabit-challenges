function constraint(txt) {

//   // Pangram
//   let PangramAlphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < txt.length; i++) {
//     let currentLetter = txt[i].toLowerCase();
//     if (PangramAlphabet.indexOf(currentLetter) > -1) {
//       // if currentLetter is in the alphabet, remove it
//       PangramAlphabet = PangramAlphabet.replace(currentLetter, "");
//     }
//   }
//   if (PangramAlphabet == "") return "Pangram"; // if all the letters of the alphabet were removed, return "Pangram"

//   // Heterogram
//   let lettersOfSentence = "";
//   let Heterogram = true;
//   for (let i = 0; i < txt.length; i++) {
//     if (lettersOfSentence.indexOf(txt[i]) === -1) {
//       lettersOfSentence += txt[i].toLowerCase();
//       lettersOfSentence = lettersOfSentence.trim();
//     } else {
//       // letter already exists in the sentence
//       Heterogram = false;
//       break;
//     }
//   }
//   if (Heterogram) return "Heterogram";

//   // Tautogram
//   let firstLetter;
//   let Tautogram = true;
//   for (let i = 0; i < txt.split(" ").length; i++) {
//     if (typeof firstLetter === "undefined")
//       firstLetter = txt.split(" ")[i][0].toLowerCase();
//     if (txt.split(" ")[i][0].toLowerCase() !== firstLetter) Tautogram = false; // word's first letter isn't equal of firstLetter
//   }
//   if (Tautogram) return "Tautogram";

  //Transgram
  
}

constraint("A cannibal alligator has attacked an unaware vegan alligator.");
