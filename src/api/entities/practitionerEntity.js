const practitionerData = {
    resourceType: 'Practitioner',
    active: true,
    name: [
      {
        family: 'Smith',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '1975-05-15',
    address: [
      {
        use: 'home',
        line: ['123 Main Street'],
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
      },
    ],
    telecom: [
      {
        system: 'phone',
        value: '555-555-5555',
      },
      {
        system: 'email',
        value: 'john.smith@example.com',
      },
    ],
    qualification: [
      {
        code: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: 'Physician',
            },
          ],
          text: 'Physician',
        },
        period: {
          start: '2000-01-01',
        },
      },
    ],
  };

  module.exports = practitionerData;