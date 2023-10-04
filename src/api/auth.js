const axios = require('axios');
const config_auth = require('./config')

function getHttpHeader(accessToken) {
  // console.log("fasfasfasfasdfasfsda")
  
  return {
    Authorization: 'Bearer ' + accessToken,
    'Content-type': 'application/json',
  };
}

async function getAuthToken() {
  try {
    const data = new FormData();
    data.append('client_id', config_auth.appId);
    data.append('client_secret', config_auth.appSecret);
    data.append('grant_type', 'client_credentials');
    data.append('resource', config_auth.fhirEndpoint);

    const response = await axios.post(
      config_auth.aadTenant + config_auth.aadTenantId + '/oauth2/token',
      data
    );
    const accessToken = response.data.access_token;
    // console.log(
    //   '\tAAD Access Token acquired: ' + accessToken.substring(0, 50) + '...'
    // );
    return accessToken;
  } catch (error) {
    // console.log('\tError getting token: ' + error.response.status);
    return null;
  }
}

module.exports = {
  getHttpHeader,
  getAuthToken
};