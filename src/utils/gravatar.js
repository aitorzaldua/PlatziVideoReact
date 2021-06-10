/* eslint-disable no-unused-vars */
import md5 from 'md5';

const gravatar = (email) => {
  //función de retorno del avatar
  const base = 'https://gravatar.com/avatar';
  //eliminamos espacios y convertimos a minusculas
  const formattedEmail = (email).trim().toLowerCase();
  //creacion del hash -> no se pueden mandar @ -> convertir a binario
  const hash = md5(formattedEmail, { encoding: 'binary' });
  //union base con el template
  return `${base}${hash}`;

};

export default gravatar;
