const URL = 'http://localhost:3000/api/users';

//* Get obtener los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(URL);
    const clientes = await resultado.json();
    return clientes.data; //* array
  } catch (error) {
    throw error;
  }
};

//* POST crear un cliente tiene que ser un objeto 

export const nuevoCliente = async (cliente) => {
  console.log(cliente);
  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href='index.html';
  } catch (error) {
    throw error;
  }
};

export const eliminarCliente = async (id) => {
  try {
    //* http://localhost:3000/clientes/2
    await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    });
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};