// -----------------------------------------------------------------------------------
// ------------ Measuring , Extracting , Modifying and Replacing Strings : ------------
// -----------------------------------------------------------------------------------

// --------------- Replacing a String by another : ---------------

// The New York magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.

// ----------------------------------------------------------------------------------------------

// LongHand Method : (The Old Method)

// let paragraph = "World War II was a global war that lasted from 1939 to 1945.";
// let warName = "World War II";
// let newWarName = "The Second World War";

// for (i = 0; i <= paragraph.length; i++) {
//     if (paragraph.slice(i, i + 12) === warName) {
//             paragraph = paragraph.slice(0, i) + newWarName + paragraph.slice(i + 12);
//                                                    // This slice takes all the characters after the "World War II"
//   }
// }
// console.log(paragraph);

// --------------------------------------------------------------------------------------------------

// --------------- ShortHand Method : ---------------

// let paragraph = "World War II was a global war that lasted from 1939 to 1945.";
// let newParagraph = paragraph.replace("World War II", "The Second World War");
// console.log(newParagraph);

// --------------------------------------------------------------------------------------------------

// --------------- Replacing a String by another Using Some JS Method : ---------------

// let paragraph = "My name is Hasnain and my cousin name is also Hasnain and my friend name is also Hasnain.";
// let newParagraph = paragraph.replace("Hasnain", "Ali");
//   --->    The 'replace' keyword only replaces the first "Hasnain"
// console.log(newParagraph);

// -------------------

// If you want to replace all the "Hasnain" in the sentence, you can use the "replaceAll()" method instead :

// let paragraph = "My name is Hasnain and my cousin name is also Hasnain and my friend name is also Hasnain.";

// let newParagraph = paragraph.replaceAll("Hasnain", "Ali");

// console.log(newParagraph);

// --------------- An old Method to do the same thing is that : ---------------

// let paragraph = "My name is Hasnain and my cousin name is also Hasnain and my friend name is also Hasnain.";

// let newParagraph = paragraph.replace(/Hasnain/g, "Ali");             // /name/g is a regular expression/regex.

// console.log(newParagraph);

// ------------------ Another Old Method to do the same thing is that : ------------------

// -------------  Split and Join Method : ---------------

// let paragraph = "My name is 'Hasnain' and my cousin name is also 'Hasnain' and my friend name is also 'Hasnain'.";

// let splitting = paragraph.split("Hasnain");

// let joining = splitting.join("Ali");

// // The 'split method' splits the string into an array at those points where there is a "Hasnain" and then
// // the 'join method' joins the array into a string, with replacing the "Hasnain" with "Ali".

// console.log(joining);

// ------------------------------------------------------------------------------------------------

// let paragraph = "My name is Hasnain and my cousin name is also Hasnain and my friend name is also Hasnain.";

// let newParagraph = paragraph.split("Hasnain").join("Ali");

// // The 'split method' splits the string into an array at those points where there is a "Hasnain" and then
// // the 'join method' joins the array into a string, with replacing the "Hasnain" with "Ali".

// console.log(newParagraph);

// --------------------

// Checking Positions/Indexes :

// let country = "Pakistan"
// let firstChar = country.indexOf("P")
// console.log(firstChar)

// -------------------------

// Now , we have another method to replace the string with less code the FOR Loop :

// let text = "World War II was a global war that lasted from 1939 to 1945.";
// let firstChar = text.indexOf("World War II");

// // console.log(firstChar)

// if (firstChar.text !== -1){
//     text = text.slice(0, firstChar) + "The Second World War" + text.slice(firstChar + 12)
// }
// console.log(text);

// -------------------------------------

// If there are multiple same words or strings in the sentence , you can check the last word by "lastIndexOf()" :

// let sentence = "To be or not to be.";

// let lastIndex = sentence.lastIndexOf("be");

// console.log(lastIndex);

// -----------------------------------------------------------------------

// Finding A Character At A Location :

// let country = "Pakistan";
// let firstChar = country.slice(0, 1);
// console.log(firstChar);

//          "OR"

// let country = "Pakistan";
// let firstChar = country.charAt(0);
// console.log(firstChar);

// ------------------------

// let country = "Pakistan";
// let lastChar = country.slice(-1);
// console.log("slice(-1) -->" , lastChar);

//         "OR"

// let country = "Pakistan";
// let lastChar = country.charAt(country.length - 1);
// console.log(lastChar);

// ------------------ Checking Exclamation Mark in a Sentence : ------------------

// let text = prompt("Enter a sentence").trim();
// let exclamationMark = false;

// if (text === "" || text === null || text === undefined) {
//   console.log("Please enter some text!");
// } 
// else {
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//       exclamationMark = true;
//       break; // stops checking after first "!"
//     }
//   }

//   if (exclamationMark === true) {
//     console.log(text);
//     console.log("Exclamation mark found!");
//   } 
//   else if (exclamationMark === false) {
//     console.log(text);
//     console.log("Exclamation mark not found!");
//   }
// }

// -------------------------------

// Short Hand Method :

// let text = prompt("Enter a sentence").trim();

// if (text.indexOf("!") === -1) {
//   console.log(text);
//   console.log("Exclamation mark not found!");
// }
// else {
//   console.log(text);
//   console.log("Exclamation mark found!");
// }

// ------------ Other Ways To Check Exclamation Mark in a Sentence : ------------

// let text = prompt("Enter a sentence:");
// let found = false;

// for (let i = 0; i < text.length; i++) {
//   if (text[i] === "!") {                                    //  (text[i]) is same as (text.charAt(i))
//     found = true;
//     break; //  Stops the loop after finding one
//   }
// }

// console.log(text);

// if (found === true) {
//   console.log("Exclamation mark found!");
// }
// else {
//   console.log("Exclamation mark not found!");
// }

// -------------------------

// let text = prompt("Enter a sentence:").trim();

// if (text.includes("!")) {
//   console.log(text);
//   console.log("Exclamation mark found!");
// }
// else {
//   console.log(text);
//   console.log("Exclamation mark not found!");
// }

// -------------------------

// Long Hand Method :

// let userName = prompt("Enter Your Name :").trim();

// for (i = 0; i < userName.length; i++) {
//   if (
//     userName.charAt(i) === "$" ||
//     userName.charAt(i) === "!" ||
//     userName.charAt(i) === "@" ||
//     userName.charAt(i) === "#" ||
//     userName.charAt(i) === "%" ||
//     userName.charAt(i) === "^" ||
//     userName.charAt(i) === "&" ||
//     userName.charAt(i) === "*" ||
//     userName.charAt(i) === "(" ||
//     userName.charAt(i) === ")" ||
//     userName.charAt(i) === "-" ||
//     userName.charAt(i) === "_" ||
//     userName.charAt(i) === "+" ||
//     userName.charAt(i) === "=" ||
//     userName.charAt(i) === "[" ||
//     userName.charAt(i) === "]" ||
//     userName.charAt(i) === "{" ||
//     userName.charAt(i) === "}" ||
//     userName.charAt(i) === "|" ||
//     userName.charAt(i) === ":" ||
//     userName.charAt(i) === "/" ||
//     userName.charAt(i) === "?" ||
//     userName.charAt(i) === "." ||
//     userName.charAt(i) === "," ||
//     userName.charAt(i) === "'" ||
//     userName.charAt(i) === '"' ||
//     userName.charAt(i) === " \ "
//   ) {
//     console.log("Special Characters are not allowed in Name !!!");
//     break;
//   }
// }
// console.log(userName);

// ---------------------- Checking Empty String and Special Characters : ----------------

// This Loop only runs once, if the condition (user name is empty or special character) is true ,
// it will stop the loop and display/print the message.

// Short Hand Method :

// let userName = prompt("Enter Your Name :").trim();

// if (userName === "") {
//   console.log("Please enter your name!");
// } else {
//   let hasSpecialChar = false;

//   for (let i = 0; i < userName.length; i++) {
//     let Characters = userName.charAt(i);
//     if ("$!@#%^&*()-_+=[]{}|:/?.',\"\\".includes(Characters)) {
//       hasSpecialChar = true;
//       break;
//     }
//   }

//   if (hasSpecialChar) {
//     console.log("Special characters are not allowed in Name!");
//   } else {
//     console.log("Welcome, " + userName + "!");
//   }
// }

// ---------------------------

// Using Do While Loop :
//   "This loop runs again and again, if the condition (user name is empty) is true ,
//   it will keep running until the user gives a valid name."

// let userName;

// do {
//   userName = prompt("Enter Your Name :").trim();
//   if (userName === "") {
//     alert("Please enter your name!");
//   }
// } while (userName === "");

// console.log("Welcome, " + userName + "!");

// ------------ Checking Empty Name and Special Characters in the UserInput and shows Alerts : --------------

// let userName;

// do {
//   userName = prompt("Enter Your Name :").trim();

//   // 1. Agar user nay kuch bhi nahi likha :

//   if (userName === "") {
//     alert("Please enter your name!");
//     continue;                   // loop ko dobara chalao
//   }

//   // 2. Agar user nay special characters likhe :

//   let hasSpecialChar = false;
//   for (let i = 0; i < userName.length; i++) {
//     let ch = userName.charAt(i);
//     if ("$!@#%^&*()-_+=[]{}|:/?.',\"\\".includes(ch)) {
//       hasSpecialChar = true;
//       break;
//     }
//   }

//   if (hasSpecialChar) {
//     alert("Special characters are not allowed in Name!");
//     userName = "";              // taake loop repeat ho
//   }
// } while (userName === "");      // Jab tak user valid name nahi likhta, loop chalta rahega

// console.log("Welcome, " + userName + "!");

// ------------ Checking Empty Name and Special Characters in the UserInput and shows/Consoles Messages :--------------

// let userName;

// do {
//   userName = prompt("Enter Your Name :").trim();

//   if (userName === "") {
//     console.log("Please enter your name!");
//     continue;
//   }

//   let hasSpecialChar = false;
//   for (let i = 0; i < userName.length; i++) {
//     let ch = userName.charAt(i);
//     if ("$!@#%^&*()-_+=[]{}|:/?.',\"\\".includes(ch)) {
//       hasSpecialChar = true;
//       break;
//     }
//   }

//   if (hasSpecialChar) {
//     console.log("Special characters are not allowed in Name!");
//     continue;
//   }

//   break; // agar sab sahi hai toh loop se bahar nikal jao
// } while (true);

// console.log("Welcome, " + userName + "!");

// --------------------------------

// Final Version (Checking Special Characters and Numbers) until the user gives a valid name :

// let userName;

// do {
//   userName = prompt("Enter Your Name :").trim();

//   // 1. Agar user ne kuch bhi nahi likha
//   if (userName === "") {
//     alert("Please enter your name!");
//     continue; // loop dobara chalao
//   }

//   // 2. Special characters aur numbers check karne ke liye
//   let hasInvalidChar = false;

//   for (let i = 0; i < userName.length; i++) {
//     let characters = userName.charAt(i);

//     // Agar special character ya number mil jaye
//     if (
//       "$!@#%^&*()-_+=[]{}|:/?.',\"\\".includes(characters) || (!isNaN(characters) && characters !== " ") // Single Space is allowed
//     ) {
//       hasInvalidChar = true;
//       break;
//     }
//   }

//   // 3. Agar koi invalid character mila
//   if (hasInvalidChar) {
//     alert("Numbers or Special Characters are not allowed in Name!");
//     continue;               //  Dubara prompt dikhaye ga
//   }

//   // Agar sab sahi hai to loop se bahar nikal jao
//   break;
// } while (true);

// console.log("Welcome, " + userName + "!");

// -----------------------------------------------------------------------------------------------------------

// Spread Operator Of Arrays In ES-6 :

// let array = [1, 2, 3];
// let newArray = [...array];     // Copies from the Original Array
// console.log(newArray);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2, 7, 8, 9];
// console.log(arr3);
