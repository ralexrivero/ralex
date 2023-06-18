import { useTranslation } from 'react-i18next';

const Me = () => {
  const [t, i18n] = useTranslation("me");
  return (
    <section className="section-me">
      <article>
        <h1>{t('aboutMeTitle')}</h1>
        <p>{t('aboutMeDescription')}</p>
      </article>

      <article>
        <h2>{t('passionTitle')}</h2>
        <p>{t('passionDescription')}</p>
      </article>

      <article>
        <h2>{t('purposeTitle')}</h2>
        <p>{t('purposeDescription')}</p>
      </article>

      <article>
        <h2>{t('experienceTitle')}</h2>
        <p>{t('experienceDescription')}</p>
      </article>

      <article>
        <h2>{t('valuesTitle')}</h2>
        <p>{t('valuesDescription')}</p>
      </article>
      <article>
        <h3>{t('intellectualHonestyTitle')}</h3>
        <p>{t('intellectualHonestyDescription')}</p>
      </article>

      <article>
        <h3>{t('integrityTitle')}</h3>
        <p>{t('integrityDescription')}</p>
      </article>

      <article>
        <h3>{t('excellenceTitle')}</h3>
        <p>{t('excellenceDescription')}</p>
      </article>

      <article>
        <h2>{t('teachingTitle')}</h2>
        <p>{t('teachingDescription')}</p>
      </article>

      <article>
        <h3>{t('pedagogicalApproachTitle')}</h3>
        <p>{t('pedagogicalApproachDescription')}</p>
      </article>

      <article>
        <h3>{t('taughtSubjectsTitle')}</h3>
        <p>{t('taughtSubjectsDescription')}</p>
      </article>

      <article>
        <h3>{t('virtualAdaptationTitle')}</h3>
        <p>{t('virtualAdaptationDescription')}</p>
      </article>

      <article>
        <h3>{t('studentTestimonialsTitle')}</h3>
        <p>{t('studentTestimonialsDescription')}</p>
      </article>

    </section>
  )
}

export default Me;
