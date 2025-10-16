// The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.

// ShortHand Method :

// let paragraph = "World War II was a global war that lasted from 1939 to 1945.";
// let newParagraph = paragraph.replace("World War II", "The Second World War");
// console.log(newParagraph);

// ---------------------------------------------------------------------------

// LongHand Method:

// let paragraph = "World War II was a global war that lasted from 1939 to 1945.";
// let warName = "World War II";
// let newWarName = "The Second World War";

// for (i = 0; i <= paragraph.length; i++) {
//   if (paragraph.slice(i, i + 12) === warName) {
//     paragraph = paragraph.slice(0, i) + newWarName + paragraph.slice(i + 12);
//   }
// }
// console.log(paragraph);

// -------------------------------------------------------------------------------

// Checking Positions/Indexes :

// let country = "Pakistan"
// let firstChar = country.indexOf("P")
// console.log(firstChar)

// -------------------------

// Now , we have another method to replace the string with less code :

// let text = "World War II was a global war that lasted from 1939 to 1945.";

// let firstChar = text.indexOf("World War II")

// // console.log(firstChar)

// if (firstChar.text !== -1){
//     text = text.slice(0, firstChar) + "The Second World War" + text.slice(firstChar + 12)
// }
// console.log(text)

// -------------------------------------

// If there are multiple same words or strings in the sentence , you can check the last word by "lastIndexOf()" :

// let sentence = "To be or not to be.";
// let segIndex = sentence.lastIndexOf("be");
// console.log(segIndex)
