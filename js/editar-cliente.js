import { obtenerClienteId, editarCliente } from "./api.js";
import { mostrarAlerta } from './utils/show-alert.js';
import { validatorObject } from './utils/validator-object.js';

(()=> {
  //* Inputs del formulario Editar Cliente
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");

  document.addEventListener('DOMContentLoaded', async () => {
    const parametroURL = new URLSearchParams(window.location.search);
    // console.log(parametroURL);
    // console.log(parametroURL.get('id'));
    const idMongo = parametroURL.get('id');
   
    // obtenerClienteId(idMongo).then(cliente => {
    //   console.log(cliente);
    // }).catch();
    try {
      const cliente = await obtenerClienteId(idMongo);
      // console.log(cliente);
    } catch (error) {
      throw error;
    }

  
  });
})();