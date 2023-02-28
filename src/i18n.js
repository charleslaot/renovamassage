import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        menu: {
          home: "Home",
          services: "Services",
          contact: "Contact",
          about: "About",
        },
        hero: {
          header: "Give yourself a moment",
          subheader: "of relaxation",
          button: "Schedule Now",
        },
        services: {
          header: "Our Services",
        },
      },
    },
    es: {
      translation: {
        menu: {
          home: "Inicio",
          services: "Servicios",
          contact: "Contacto",
          about: "Acerca",
        },
        hero: {
          header: "Date un momento",
          subheader: "de relajación",
          button: "Haz una Cita",
        },
        services: {
          header: "Nuestros Servicios",
        },
      },
    },
  },
});

export default i18n;
