let personTested = 1

const testPerson = (name, age, temperature) => {  
 const person = {
   firstName: name,
   age: age,
   temperature: temperature,
   id: personTested,
 };
 personTested += 1
 return person
};

export default { testPerson };
