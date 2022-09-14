export function validatorObject(objetoCliente) {
  return !Object.values(objetoCliente).every(values => values !== '');
}