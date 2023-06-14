import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [state, handleSubmit] = useForm("xlekkear");
  if (state.succeeded) {
      return (
        <div className="success-message">
        <p>¡Genial! 🎉 ¡Tu mensaje fue enviado! 💌</p>
        <p>¡Mil gracias por tomarte el tiempo de escribirme! 🙌 Valoro tus palabras y te prometo que te voy a contestar a la brevedad. Mientras tanto, dale una mirada a la página y conóceme un poco más. 🌟</p>
        <p>¡Espero que el sitio te guste y te parezca buena onda! 💫✨</p>
        <Link to="/" className="success-message-link"><span className="material-symbols-rounded">home</span></Link>
      </div>
      );
  }

  return (
    <section>
      <form className="contact_form" onSubmit={handleSubmit}>
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
