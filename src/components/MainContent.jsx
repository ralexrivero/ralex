import React from 'react';
import { useTranslation } from 'react-i18next';

const MainContent = () => {
  const [t, i18n] = useTranslation("main");

  return (
    <main aria-label="Contenido principal">
      <section className="about-section">
        <div className="grid-50-50 about-content">
          <div className="area-left">
            <div className="shape magic-box"></div>
          </div>
          <div className="area-right section-description">
            <p className="description-text">{t("main.aboutSection.description1")}</p>
            <p className="description-text">{t("main.aboutSection.description2")}</p>
            <p className="description-text">{t("main.aboutSection.description3")}</p>
          </div>
        </div>

        <div className="grid-50-50 about-content">
          <div className="area-left">
            <div className="shape magic-circle"></div>
          </div>
          <div className="area-right section-description">
            <p className="">{t("main.aboutSection.description4")}</p>
            <div className="grid-50-50">
              <p className="description-sm area-left">{t("main.aboutSection.description5")}</p>
              <p className="description-sm area-right">{t("main.aboutSection.description6")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
