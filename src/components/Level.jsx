import { useTranslation } from "react-i18next";

const Level = (props) => {
  const [t, i18n] = useTranslation('global');

  const success = {
    1: "success-20",
    2: "success-40",
    3: "success-60",
    4: "success-80",
    5: "success-100",
  }

  return (
    <div>
      <div className="progressbar">
        <div
          className={`success ${success[props.level]}`}
          title={t('progress.barTitle')}
          >
          <span>{t(`progress.${props.level}`)}</span>
        </div>
      </div>
    </div>
  )
}

export default Level;
