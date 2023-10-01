const axios = require('axios');
const { getHttpHeader } = require('../auth')
const config_auth = require('../config');

const apiReturn = {
  id: "",
  nome: "",
  endereco: {
    cidade: "",
    estado: ""
  },
  descricao: {
    qualificacoes: "",
    texto: ""
  },

}

const practitionerMapFhirToApi = (fhirObject) => {

  const lstDoutores = [];

  fhirObject.map((doutores) => {
    const { id, name, address, qualification } = doutores.resource

    apiReturn.id = id;
    // Tive que fazer assim porque a propriedade estava sendo desestruturada como um objeto e não como um array.
    //Pesquisar depois sobre como desestruturar um array.
    apiReturn.nome = name[0].given[0];
    apiReturn.endereco.cidade = address[0].city;
    apiReturn.endereco.estado = address[0].state;
    apiReturn.descricao.qualificacoes = qualification[0].code.coding[0].code;
    apiReturn.descricao.texto = qualification[0].code.text;

    // Criei um novo objeto obj e copiei as propriedades de apiReturn para ele
    const x = {...apiReturn}
    lstDoutores.push(x);
  });

  console.log("Cheguei no mapeamento FhirToApi e peguei");
  console.log(lstDoutores);
  console.log("Saí do mapeamento FhirToApi.");

  return lstDoutores;
}

const practitionerMapApiToFhir = () => {
  // Transpassar tudo isso para uma lista
  const { id, name, address, qualification } = fhirObject[0]?.resource;
  // const {name} = fhirObject[0]?.resource;

  apiReturn.id = id;
  apiReturn.nome = name[0].given[0];
  apiReturn.endereco.cidade = address[0].city;
  apiReturn.endereco.estado = address[0].state;
  apiReturn.descricao.qualificacoes = qualification[0].code.coding[0].code;
  apiReturn.descricao.texto = qualification[0].code.text;
}

async function getPractitioners(accessToken) {
  console.log('API -> FHIR Get All Practitioner');
  const baseUrl = config_auth.fhirEndpoint + 'Practitioner ';

  try {
    const response = await axios.get(baseUrl, {
      headers: getHttpHeader(accessToken),
    });

    // console.log(response?.data)
    console.log('API -> FHIR Get All Practitioner - Exit');
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
  // exporting mappers 
  practitionerMapFhirToApi,
  practitionerMapApiToFhir,

  // exporting actions
  getPractitioners,
  postPractitioner
}