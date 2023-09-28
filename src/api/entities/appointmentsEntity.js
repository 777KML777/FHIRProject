const appointmentData = {
  resourceType: "Appointment",
  status: "booked",
  description: "Follow-up appointment with Dr. Smith",
  start: "2023-09-20T10:00:00-04:00",
  end: "2023-09-20T11:00:00-04:00",
  participant: [
    {
      actor: {
        reference: "Practitioner/" + practitionerId,
      },
      status: "accepted",
      type: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "ATND",
            },
          ],
          text: "Attendee",
        },
      ],
    },
    {
      actor: {
        reference: "Patient/" + patientId,
      },
      status: "accepted",
      type: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PAT",
            },
          ],
          text: "Patient",
        },
      ],
    },
  ],
};
