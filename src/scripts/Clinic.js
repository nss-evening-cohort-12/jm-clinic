const testPeople = []

const usePatients = () => {
  return testPeople
};

const diagnose = (person, days) => {
  person.diagnosed = false;
  person.infected = false
  if (person.temperature > 101 && days >= 4) {
    person.diagnosed = true;
    person.infected = true
  } else {
    person.diagnosed = true;
    person.infected = false
  }
  testPeople.push(person)
  return person
};

export default { usePatients, diagnose };
