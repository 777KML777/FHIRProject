'use client'
import api from './api/requests'
import Formulario from './components/Formulario/Formulario'

export default function Home() {
  
  const enviar = () => {
    console.log('Entrei no método estou no componente ainda')
    const data = {
      nome: 'Carlos',
      sobrenome: 'Francisco',
      email: 'franciso@gmail.com'
    }

    const response = api.post('/patient'); 
    console.log(response)
  }

  return (
    <>
      {/* <button 
        onClick={enviar}
      >
        Cadastre-se
      </button> */}

      <Formulario/>
    </>
  )
}
