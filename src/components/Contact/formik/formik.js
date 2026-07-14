import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(20, 'El nombre no puede exceder 20 caracteres')
    .required('El nombre es requerido'),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido')
    .required('El email es requerido'),
  message: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder 500 caracteres')
    .required('El mensaje es requerido'),
});
