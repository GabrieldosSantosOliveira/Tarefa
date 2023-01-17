import * as yup from 'yup';
export const generatePasswordSchemaValidation = yup.object({
  application: yup
    .string()
    .min(2)
    .required(
      'O nome da aplicação no qual a senha sera utilizada é obrigatório',
    ),
  emailOrPhone: yup
    .string()
    .min(7)
    .max(255)
    .required('O email ou o telefone utilizados na aplicação é obrigatório'),
});
