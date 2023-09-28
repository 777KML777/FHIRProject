async function postAppointment(patientId, practitionerId, accessToken) {
    // https://hl7.org/fhir/R4/appointment-example.json.html
    try {
      const response = await axios.post(
        fhirEndpoint + 'Appointment',
        appointmentData,
        { headers: getHttpHeader(accessToken) }
      );
      const resourceId = response.data.id;
      console.log(
        '\tAppointment ingested: ' + resourceId + '. HTTP ' + response.status
      );
      return resourceId;
    } catch (error) {
      console.log('\tError persisting appointment: ' + error.response.status);
      return null;
    }
  }