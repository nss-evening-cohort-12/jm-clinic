// Imports go first
import testFacility from './TestFacility.js';
import clinic from './Clinic.js';


// Test 5 people at the testing facility
let doug = testFacility.testPerson('doug', 65, 102)
let susan = testFacility.testPerson('susan', 43, 101)
let karen = testFacility.testPerson('karen', 44, 98)
let dylan = testFacility.testPerson('dylan', 22, 90)
let mike = testFacility.testPerson('mike', 58, 99)

// Diagnose each person at the clinic
doug = clinic.diagnose()


// Invoke the component function that renders the HTML list of patients
