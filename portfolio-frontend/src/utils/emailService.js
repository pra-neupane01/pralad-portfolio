import emailjs from 'emailjs-com';

export const initEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendContactEmail = async ({ name, email, message }) => {
  initEmailJS();

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      to_email: 'pra2026neupane@gmail.com',
      from_name: name,
      from_email: email,
      message,
    },
  );
};
