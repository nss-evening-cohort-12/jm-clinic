import patients from './Clinic.js';

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const patientList = () => {
  const getPatients = patients.usePatients()
  console.log(getPatients.length);
  let domString = '';
  for (let i = 0; i < getPatients.length; i++) {
      domString += `
      <section class="patient" id="patient--${getPatients[i].id}">
        <h2 class="patient__name">${getPatients[i].firstName}</h2>
        <div class="patient__properties">
          <p>Age: ${getPatients[i].age}</p> 
          <p>Temperature: ${getPatients[i].temperature}</p>
          <p>Diagnosed: ${getPatients[i].diagnosed}</p>
        </div>
        <div class="patient_diagnosis">
          Infected: ${getPatients[i].infected}
        </div>
      </section>
      `;
  }
  printToDom('.patients', domString)

}

export default { patientList };
