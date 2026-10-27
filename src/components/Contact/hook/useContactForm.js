import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactSchema } from '../formik/formik';

export const useContactForm = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitMessage('¡Mensaje enviado con éxito!');
        setMessageType('success');
        setTimeout(() => {
          setSubmitMessage('');
          setMessageType('');
        }, 3000);
        resetForm();
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Hubo un error al enviar el mensaje');
      setMessageType('error');
      setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    initialValues,
    validationSchema: contactSchema,
    handleSubmit,
    submitMessage,
    messageType
  };
};
