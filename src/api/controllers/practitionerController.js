const axios = require('axios');
const { getHttpHeader } = require('../auth')
const config_auth = require('../config')

async function getPractitioners(accessToken) {
  const baseUrl = config_auth.fhirEndpoint + 'Practitioner ';

  try {
    const response = await axios.get(baseUrl, {
      headers: getHttpHeader(accessToken),
    });
    
    // console.log(response?.data)

    return response?.data;
  } catch (error) {
    console.log('\tError getting patient data: ' + error.response.status);
  }
}

async function postPractitioner(accessToken) {
    // Example of FHIR Practitioner: https://www.hl7.org/fhir/practitioner-example.json.html
    try {
      const response = await axios.post(
        fhirEndpoint + 'Practitioner',
        practitionerData,
        { headers: getHttpHeader(accessToken) }
      );
      const resourceId = response.data.id;
      // console.log(
      //   '\tPractitioner ingested: ' + resourceId + '. HTTP ' + response.status
      // );
      return resourceId;
    } catch (error) {
      console.log('\tError persisting practitioner: ' + error.response.status);
      return null;
    }
  }

module.exports = {
  getPractitioners, 
  postPractitioner
}