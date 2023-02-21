import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n  
  .use(initReactI18next)  
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          menu: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            about: 'About'
          }
        }
      },
      es: {
        translation: {
          menu: {
            home: 'Inicio',
            services: 'Servicios',
            contact: 'Contacto',
            about: 'Acerca'
          }
        }
      }
    }
  });

export default i18n;