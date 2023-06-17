import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t, i18n] = useTranslation('global');
  const [state, handleSubmit] = useForm("xlekkear");
  if (state.succeeded) {
      return (
        <div className="success-message">
          <p>{t('contact.form.par01')}</p>
          <p>{t('contact.form.par02')}</p>
          <p>{t('contact.form.par03')}</p>
          <Link to="/" className="success-message-link">
            <span
              className="material-symbols-rounded"
              title={t('contact.homeTitle')}
              aria-label={t('contact.homeAria')}
              >home</span>
          </Link>
      </div>
      );
  }

  return (
    <section className="section-contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-info">
          <p>{t('contact.success.par01')}<a className="link-email" href="mailto:ralexrivero@gmail.com" target="_blank">{t('contact.success.email')}</a>{t('contact.success.par02')}</p>
          <p>{t('contact.success.email')}<a className="link-email-text" href="mailto:ralexrivero@gmail.com" target="_blank">ralexrivero@gmail.com</a></p>
        </div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t('contact.input.namePH')}
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
          placeholder={t('contact.input.emailPH')}
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
          placeholder={t('contact.input.messagePH')}
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
          {t('contact.input.submitTxt')}
        </button>
      </form>
    </section>
  )
}

export default Contact;
