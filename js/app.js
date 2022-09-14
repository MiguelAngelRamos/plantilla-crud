import { obtenerClientes, eliminarCliente } from './api.js';

(() => {
  const listado = document.querySelector('#listado-clientes');

  document.addEventListener('DOMContentLoaded', mostrarClientes);
  //* el llamado a la funcion eliminar
  listado.addEventListener('click', confirmarEliminar);

  async function mostrarClientes() {
    const clientes = await obtenerClientes(); //* el array clientes

    clientes.forEach( (cliente) => {
      const  { nombre, email, telefono, empresa, id } = cliente;
      const row = document.createElement('tr');

      row.innerHTML += `
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
          <a href="#" data-cliente="${id}" class="eliminar" >Eliminar</a>
        </td>
     `;

           // row.innerHTML = row.innerHTML + `
      //  <td>
      //   <p>${nombre}</p>
      //  </td>
      //  <td>
      //   <p>${email}</p>
      //  </td>
      //   <td>
      //   <p>${telefono}</p>
      //   </td>
      //   <td>
      //    <p>${empresa}</p>
      //   </td>
      //   <td>
      //     <a>Editar</a>
      //     <a>Eliminar</a>
      //   </td>
      // `;

      listado.appendChild(row);
    });
  };

  function confirmarEliminar(event) {
    // console.log('Click en eliminar');
    // console.log(event.target.classList);
    // console.log(event.target.classList.contains('eliminar'));

    if(event.target.classList.contains('eliminar')) {
      console.log(typeof event.target.dataset.cliente);
      const clienteId = parseInt(event.target.dataset.cliente);

      Swal.fire({
        title: '¿Desea eliminar este registro?',
        text: "No podras recuperar la información de este usuario!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then( response => {
        if(response.isConfirmed) {
          eliminarCliente(clienteId);
        }
      })
    }
    
  }

})();

