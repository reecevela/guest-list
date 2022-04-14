const names = document.querySelector('.names');
const banned = document.querySelector('.banned');
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

// The '+' in front of prompt() converts the string to an int
const NUMPEOPLE = +prompt("Enter the amount of guests you'll have: ", "3");
const BANNEDPEOPLE = ["Jonas", "Marge", "Rachel", "Hunter"];

// Display each banned person
BANNEDPEOPLE.forEach(person => {
  banned.textContent += `${person} `;
});

// Gather input from user
let people = [];
while (NUMPEOPLE > people.length) {
  // push returns the index+1 that the new content was added to
  let i = people.push(prompt("Enter the name of your guest: "));
  // If it's the last element this runs
  i == NUMPEOPLE ? names.textContent += `and ${people[i-1]}` : names.textContent += `${people[i-1]}, `;
}

// Display results
people.forEach(person => {
  if (isPersonBanned(person)) {
    refused.textContent += `${person} `;
  } else {
    admitted.textContent += `${person} `;
  }
});

function isPersonBanned(person) {
  for (let i = 0; i < BANNEDPEOPLE.length; i++) {
    const bannedPerson = BANNEDPEOPLE[i];
    if(person == bannedPerson) {
      return true;
    }
  }
  return false;
}