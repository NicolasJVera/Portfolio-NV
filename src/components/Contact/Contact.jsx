import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "./formik/formik";
import { useState } from "react";
import styles from './Contact.module.css';

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

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

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.contactTitle}>Contacto</h2>
          
          <div className={styles.contactGrid}>
            {/* Información de Contacto */}
            <div className={styles.contactInfo}>
              <h3 className={styles.contactInfoTitle}>Conectemos</h3>
              <p className={styles.contactInfoDescription}>
                Estoy siempre abierto a nuevas oportunidades, colaboraciones o simplemente para charlar sobre tecnología. 
                ¡No dudes en contactarme!
              </p>
              
              <div className={styles.contactInfoLinks}>
                <a
                  href="mailto:nico03veraa@gmail.com"
                  className={styles.contactInfoLink}
                >
                  <FaEnvelope className={styles.contactInfoLinkIcon} />
                  <span>nico03veraa@gmail.com</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/nicolas-vera-javier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactInfoLink}
                >
                  <FaLinkedin className={styles.contactInfoLinkIcon} />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/NicolasJVera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactInfoLink}
                >
                  <FaGithub className={styles.contactInfoLinkIcon} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Formulario con Formik */}
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Nombre
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={styles.formInput}
                      placeholder="Tu nombre"
                    />
                    <ErrorMessage 
                      name="name" 
                      component="div" 
                      className={styles.formError}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={styles.formInput}
                      placeholder="tu@email.com"
                    />
                    <ErrorMessage 
                      name="email" 
                      component="div" 
                      className={styles.formError}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Mensaje
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className={styles.formTextarea}
                      placeholder="Tu mensaje..."
                    />
                    <ErrorMessage 
                      name="message" 
                      component="div" 
                      className={styles.formError}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.formButton}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                  
                  {submitMessage && (
                    <div className={`${styles.formMessage} ${messageType === 'success' ? styles.formMessageSuccess : styles.formMessageError}`}>
                      {submitMessage}
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
