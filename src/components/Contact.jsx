import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xlekkear");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
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
