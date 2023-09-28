const patientData = {
    resourceType: 'Patient',
    active: true,
    name: [
      {
        use: 'official',
        family: 'Teste',
        given: ['Testado', 'Atestado'],
      },
    ],
    telecom: [
      {
        system: 'phone',
        value: '(11) 97070-7711',
        use: 'mobile',
        rank: 1,
      },
    ],
    gender: 'male',
    birthDate: '2005-12-25',
    address: [
      {
        use: 'home',
        type: 'both',
        text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
        line: ['534 Erewhon St'],
        city: 'São Paulo',
        district: 'Rainbow',
        state: 'Vic',
        postalCode: '3999',
        period: {
          start: '2005-12-25',
        },
      },
    ],
  };

  module.exports = patientData;