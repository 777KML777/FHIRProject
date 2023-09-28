async function postPractitioner(accessToken) {
    // Example of FHIR Practitioner: https://www.hl7.org/fhir/practitioner-example.json.html
    try {
      const response = await axios.post(
        fhirEndpoint + 'Practitioner',
        practitionerData,
        { headers: getHttpHeader(accessToken) }
      );
      const resourceId = response.data.id;
      console.log(
        '\tPractitioner ingested: ' + resourceId + '. HTTP ' + response.status
      );
      return resourceId;
    } catch (error) {
      console.log('\tError persisting practitioner: ' + error.response.status);
      return null;
    }
  }