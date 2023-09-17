import * as yup from 'yup';
export const generatePasswordSchemaValidation = yup.object({
  application: yup
    .string()
    .required(
      'O nome da aplicação no qual a senha sera utilizada é obrigatório',
    ),
  identifier: yup
    .string()
    .required('O email ou o telefone utilizados na aplicação é obrigatório'),

  password: yup
    .string()
    .required('O email ou o telefone utilizados na aplicação é obrigatório'),


});
