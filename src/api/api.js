const express = require('express');
const cors = require('cors');

const { getAuthToken } = require('./auth');

// Import Controllers 
const { getPatients, postPatient, getPatientById, } = require('./controllers/patientController');

const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());

app.get('/patients', async (req, res) => {
  const accessToken = await getAuthToken();
  const data = await getPatients(accessToken);
  res.json(data?.entry || []);
});

app.get('/patients/:id', async (req, res) => {
  const patientId = req.params.id;
  const accessToken = await getAuthToken();
  const data = await getPatientById(patientId, accessToken);

  res.json(data);
});

app.get('/patients', async (req, res) => {
  // const accessToken = await getAuthToken();
  // const patientId = await postPatient(accessToken, req.body);

  console.log(patientOperation)

  // res.json({ patientId });
  res.json({ patientOperation });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});