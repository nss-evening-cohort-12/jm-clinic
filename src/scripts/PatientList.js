import patients from './Clinic';

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const patientList = () => {
  const getPatients = patients.usePatients()
  console.log(getPatients);
  let domString = '';
  for (let i = 0; i < getPatients.length; i++) {
      domString += `
      <section class="patient" id="patient--${patient.id}">
        <h2 class="patient__name">${patient.name}</h2>
        <div class="patient__properties">
          <p>Age: ${patient.age}</p>
          <p>Temperature: ${patient.temperature}</p>
          <p>Diagnosed: ${patient.diagnosed}</p>
        </div>
        <div class="patient_diagnosis">
          Infected: ${patient.infected}
        </div>
      </section>
      `;
  }
  printToDom('.patients', domString)

}

export default { patientList };
