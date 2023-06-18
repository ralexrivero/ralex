import { useTranslation } from "react-i18next";

const Self = () => {
  const [t, i18n] = useTranslation('self');

  return (
    <section className="section-self">
      <h1>{t('autoAnalysisTitle')}</h1>
      <p>{t('autoAnalysisPar1') }</p>
      <p>{t('autoAnalysisPar2') }</p>
      <p>{t('autoAnalysisPar3') }</p>
      <p>{t('autoAnalysisPar4') }</p>
      <p>{t('autoAnalysisPar5') }</p>
      <p>{t('autoAnalysisPar6') }</p>
      <p>{t('autoAnalysisPar7') }</p>
    </section>
  );
}

export default Self;
