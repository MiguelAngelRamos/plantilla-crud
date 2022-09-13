const URL = 'http://localhost:3000/clientes';

//* Get obtener los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(URL);
    const clientes = await resultado.json();
    return clientes; //* array
  } catch (error) {
    throw error;
  }
};

//* POST crear un cliente tiene que ser un objeto 

export const nuevoCliente = async (cliente) => {
  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    throw error;
  }
}