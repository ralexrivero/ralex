import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [state, handleSubmit] = useForm("xlekkear");
  if (state.succeeded) {
      return (
        <div className="success-message">
          <p>¡Genial! 🎉 ¡Tu mensaje fue enviado! 💌</p>
          <p>¡Mil gracias por tomarte el tiempo de escribirme! 🙌 Valoro tus palabras y te prometo que te voy a contestar a la brevedad. Mientras tanto, da una vuelta por el sitio y conóceme un poco más. 🌟</p>
          <p>¡Espero que tengas una buena experiencia! 💫✨</p>
          <Link to="/" className="success-message-link"><span className="material-symbols-rounded">home</span></Link>
      </div>
      );
  }

  return (
    <section className="section-contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-info">
          <p>Si tienes alguna consulta o deseas hablar sobre un proyecto, envíame un <a className="link-email" href="mailto:ralexrivero@gmail.com" target="_blank">correo electrónico ✉️</a> o llena el formulario. Estoy aquí para ayudarte con gusto.</p>
          <p>Email<a className="link-email-text" href="mailto:ralexrivero@gmail.com" target="_blank">ralexrivero@gmail.com</a></p>
        </div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn-contact-submit"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact;
