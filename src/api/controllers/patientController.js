const axios = require('axios');
const { getHttpHeader } = require('../auth')
const config_auth = require('../config')
// Pegar a função que pega somente o Id do Paciente?
// Não esquecer de pegar e passar o patientEntity para inserir um paciente no FHIR 

async function getPatients(accessToken) {
    console.log('API -> FHIR Get All Patientes')
    const baseUrl = config_auth.fhirEndpoint + 'Patient';

    try {
      const response = await axios.get(baseUrl, {
        headers: getHttpHeader(accessToken),
      });
      
      // console.log(response)
      console.log('API -> FHIR Get All Patientes - Exit')
      return response?.data;
    } catch (error) {
      console.log('\tError getting patient data: ' + error.response.status);
    }
  }

async function getPatientById(patientId, accessToken) {
    // GET htts://<fhir endpoint>/Patient/<patientId>
    console.log('API -> FHIR Get By Id Patient')
    const baseUrl = config_auth.fhirEndpoint + 'Patient/' + patientId;
  
    try {
      const response = await axios.get(baseUrl, {
        headers: getHttpHeader(accessToken),
      });
    //   printResponseResults(response);
    console.log('API -> FHIR Get By Id Patient - Exit')
      return response?.data;
    } catch (error) {
      console.log('\tError getting patient data: ' + error.response.status);
    }
  }

// POST METHOD -  PATIENT
  async function postPatient(accessToken, data) {
    // Example of FHIR Patient: https://www.hl7.org/fhir/patient-example.json.html
    try {
      const response = await axios.post(
        config_auth.fhirEndpoint + 'Patient',
        data, /* || patientData, */
        {
          headers: getHttpHeader(accessToken),
        }
      );
      const resourceId = response.data.id;
      // console.log(
      //   '\tPatient ingested: ' + resourceId + '. HTTP ' + response.status
      // );
      return resourceId;
    } catch (error) {
      console.log('\tError persisting patient: ' + error.response.status);
      return null;
    }
  }

  module.exports = {
    getPatients,
    getPatientById,
    postPatient
  }