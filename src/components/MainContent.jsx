import React from 'react';


const MainContent = () => {
  return (
    <main aria-label="Contenido principal">
      <section className="about-section">
        <div className="grid-50-50 about-content">
          <div className="area-left">
            <div className="shape magic-box"></div>
          </div>
          <div className="area-right section-description">
            <p className="description-text">
              Estrategia, diseño y desarrollo que optimizan el proceso y aumentan la competitividad en el mercado.
            </p>
            <p className="description-text">La clave está en tener una visión global y un análisis profundo del entorno y usar las herramientas más adecuadas. </p>
            <p className="description-text">El equilibrio en las prácticas ágiles centradas en los resultados y adaptar la metodología y las herramientas según el momento, sin seguir planes rígidos, de forma dinámica y aprovechando el cambio como oportunidad.</p>
          </div>
        </div>

        <div className="grid-50-50 about-content">
          <div className="area-left">
            <div className="shape magic-circle"></div>
          </div>
          <div className="area-right section-description">
            <p className="">Mi objetivo es proveer estrategias únicas y digitales para desbloquear aspectos claves de negocio.</p>
            <div className="grid-50-50">
              <p className="description-sm area-left">Mi concepto principal son las soluciones de negocio basadas en el desarrollo de marca, procesos, tecnología y desarrollo</p>
              <p className="description-sm area-right">Transformar ideas y conceptos para crear soluciones innovadoras.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default MainContent;