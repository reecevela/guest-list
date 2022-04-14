const names = document.querySelector('.names');
const banned = document.querySelector('.banned');
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

const NUMPEOPLE = +prompt("Enter the amount of guests you'll have: ", "3");
const BANNEDPEOPLE = ["Jonas", "Marge", "Rachel", "Hunter"];

let people = [];

BANNEDPEOPLE.forEach(person => {
  banned.textContent += `${person} `;
});

while (NUMPEOPLE > people.length) {
  let i = people.push(prompt("Enter the name of your guest: "));
  i == NUMPEOPLE ? names.textContent += `and ${people[i-1]}` : names.textContent += `${people[i-1]}, `;
}

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
      return true
    }
  }
  return false;
}