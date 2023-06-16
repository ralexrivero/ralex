import { useTranslation } from 'react-i18next';

const I = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <h1>{t("header.hello-world")}</h1>
  )
}

export default I;
