import { obtenerClientes } from './api.js';

(() => {
  const listado = document.querySelector('#listado-clientes');

  document.addEventListener('DOMContentLoaded', mostrarClientes);

  async function mostrarClientes() {
    const clientes = await obtenerClientes(); //* el array clientes

    clientes.forEach( (cliente) => {
      const  { nombre, email, telefono, empresa, id } = cliente;
      const row = document.createElement('tr');
      row.innerHTML = row.innerHTML + `
       <td>
        <p>${nombre}</p>
       </td>
       <td>
        <p>${email}</p>
       </td>
        <td>
        <p>${telefono}</p>
        </td>
        <td>
         <p>${empresa}</p>
        </td>
        <td>
          <a>Editar</a>
          <a>Eliminar</a>
        </td>
      `;

      listado.appendChild(row);
    });
   
  }
})();

