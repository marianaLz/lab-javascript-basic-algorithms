// Names and Input

console.log("I'm Ready!");
let hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt("What's the navigators' name?");
console.log(`The navigators's name is ${hacker2}`);

//Conditionals

let unoSize = hacker1.length;
let dosSize = hacker2.length;
unoSize > dosSize
  ? console.log(`The Driver has the longest name, it has ${unoSize} characters`)
  : unoSize < dosSize
  ? console.log(
      `Yo, navigator got the longest name, it has ${dosSize} characters`
    )
  : unoSize === dosSize
  ? console.log(`Wow, you both got equally long names, ${unoSize} characters!!`)
  : false;

//Loops

console.log(
  hacker1
    .toUpperCase()
    .split("")
    .join(" ")
);

console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);

hacker1.localeCompare(hacker2) === -1
  ? console.log("The driver's name goes first")
  : hacker1.localeCompare(hacker2) === 1
  ? console.log("Yo, the navigator goes first definitely")
  : hacker1.localeCompare(hacker2) === 0
  ? console.log("What?! You both got the same name?")
  : false;

//Bonus

let palindrome = prompt("Type a new string:");
let palReverse = palindrome
  .split("")
  .reverse()
  .join("");

palindrome.replace(/\s+/, "").localeCompare(palReverse.replace(/\s+/, "")) === 0
  ? console.log("This is a palindrome")
  : console.log("Not a palindrome");

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae est erat. Donec mollis nunc sed turpis rutrum, nec interdum mauris gravida. Sed ultrices vitae lacus sed rhoncus. Nullam luctus lectus volutpat massa efficitur tristique. Nullam sodales pharetra ante at aliquet. Nullam sit amet urna odio. Integer ut tortor vel ipsum porta maximus quis vitae nibh. Nullam at dolor vitae arcu consectetur condimentum lacinia nec augue. Morbi consequat, risus eu facilisis consequat, orci massa posuere leo, cursus ultricies neque nisi sit amet dui. Mauris tempor ornare libero vitae consectetur. Maecenas eu blandit lectus. Cras egestas eleifend tincidunt. Vestibulum enim tortor, dictum non placerat a, fermentum et mauris. Nam ac vestibulum neque. Sed in risus et justo ultrices mollis eu in ipsum. Proin vulputate eros eu felis aliquet, at luctus metus auctor. Nunc vestibulum rhoncus consequat. Aliquam volutpat risus nec euismod mollis. Integer a semper ex. Duis in lobortis tellus. Pellentesque placerat risus vel massa semper, sit amet mattis leo tristique. Aliquam consectetur est magna. Quisque laoreet elit quis ornare vestibulum. Nulla fringilla ante augue, in efficitur libero consectetur ac. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer consectetur mattis sapien, nec porttitor nulla congue nec. Integer fringilla nibh velit, id dictum enim porttitor vitae. Curabitur laoreet molestie tellus, consequat accumsan risus. Nunc posuere et ante quis laoreet. Pellentesque feugiat quis lacus quis bibendum. Curabitur risus est, euismod eu erat at, bibendum lobortis erat. Fusce vulputate, justo id mattis sollicitudin, est neque tincidunt nibh, ut placerat elit urna at quam.";

let wordCount = loremIpsum
  .trim()
  .replace(/\s+/gi, " ")
  .split(" ").length;
console.log("The number of the words in parragraphs is: " + wordCount);

let spacesEt = loremIpsum.indexOf(" et ");
let commaEt = loremIpsum.indexOf(" et,");
let pointEt = loremIpsum.indexOf(" et.");

let nextEt = -1;
let numberEts = 0;

if (spacesEt > 0) {
  nextEt = spacesEt;
}
if (commaEt < nextEt && commaEt > 0) {
  nextEt = commaEt;
}
if (pointEt < nextEt && pointEt > 0) {
  nextEt = pointEt;
}

while (nextEt > 0) {
  numberEts++;
  spacesEt = loremIpsum.indexOf(" et ", nextEt + 4);
  commaEt = loremIpsum.indexOf(" et,", nextEt + 4);
  pointEt = loremIpsum.indexOf(" et.", nextEt + 4);

  nextEt = -1;
  if (spacesEt > 0) {
    nextEt = spacesEt;
  }
  if (commaEt < nextEt && commaEt > 0) {
    nextEt = commaEt;
  }
  if (pointEt < nextEt && pointEt > 0) {
    nextEt = pointEt;
  }
}

console.log(`Number of et occurrences: ${numberEts}`);
