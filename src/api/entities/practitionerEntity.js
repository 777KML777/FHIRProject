const practitionerData = {
    resourceType: '',
    active: true,
    name: [
      {
        family: '',
        given: [''],
      },
    ],
    gender: '',
    birthDate: '',
    address: [
      {
        use: '',
        line: [''],
        city: '',
        state: '',
        postalCode: '',
      },
    ],
    telecom: [
      {
        system: '',
        value: '',
      },
      {
        system: '',
        value: '',
      },
    ],
    qualification: [
      {
        code: {
          coding: [
            {
              system: '',
              code: '',
            },
          ],
          text: '',
        },
        period: {
          start: '',
        },
      },
    ],
  };

  module.exports = practitionerData;