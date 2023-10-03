'use client'
// ButtonComponent.js
import React from 'react';
import api from "../../api/requests";

// const constante = pegarReceitas; // Sua constante

const ButtonComponent = () => {

    const pegarReceitas = async () => {
        const response = await  api.get('/receitas')
        console.log(response);
        return response.data;
      };

  return <button onClick={pegarReceitas}>Clique-me</button>;
};

export default ButtonComponent;

ButtonComponent.js

