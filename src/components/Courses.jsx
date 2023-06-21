import { Link } from "react-router-dom";
import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiReact } from '@icons-pack/react-simple-icons';
import Tag from "./search/Tag";
import Level from './Level';
import StackIcons from "./StackIcons";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const [t, i18n] = useTranslation('courses')
  return (
    <section className="section-courses">
      {/** Frontend101 */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('frontend101.general.title')}</h2>
        <p>{t('frontend101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('frontend101.general.stackTitle')}</h2>
            <StackIcons icons={t('frontend101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('frontend101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('frontend101.general.description.par01')}</p>
          <p>{t('frontend101.general.description.par02')}</p>
        </div>
        <Link className="link-btn" to="/courses/frontend101/">{t('frontend101.general.btnTxt')}</Link>
        <div className="tags">
            <Tag filter="Front-end" />
            <Tag filter="HTML" />
            <Tag filter="CSS" />
            <Tag filter="JavaScript" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** PostgresSql101 */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('postgresql101.general.title')}</h2>
        <p>{t('postgresql101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('postgresql101.general.stackTitle')}</h2>
            <StackIcons icons={t('postgresql101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('postgresql101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('postgresql101.general.description.par01')}</p>
          <p>{t('postgresql101.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/postgresql101/">{t('postgresql101.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="RDBMS" />
            <Tag filter="PostgreSQL" />
            <Tag filter="Data Base" />
            <Tag filter="SQL" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** React.js */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('reactjs101.general.title')}</h2>
        <p>{t('reactjs101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('reactjs101.general.stackTitle')}</h2>
            <StackIcons icons={t('reactjs101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('reactjs101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('reactjs101.general.description.par01')}</p>
          <p>{t('reactjs101.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/reactjs101/">{t('reactjs101.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="Front-end" />
            <Tag filter="HTML" />
            <Tag filter="CSS" />
            <Tag filter="JavaScript" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** Python */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('python101.general.title')}</h2>
        <p>{t('python101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('python101.general.stackTitle')}</h2>
            <StackIcons icons={t('python101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('python101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('python101.general.description.par01')}</p>
          <p>{t('python101.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/python101/">{t('python101.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="Backend" />
            <Tag filter="High Level" />
            <Tag filter="Python" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** Django */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('django102.general.title')}</h2>
        <p>{t('django102.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('django102.general.stackTitle')}</h2>
            <StackIcons icons={t('django102.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('django102.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('django102.general.description.par01')}</p>
          <p>{t('django102.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/django102/">{t('django102.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="Backend" />
            <Tag filter="Django" />
            <Tag filter="Python" />
            <Tag filter="Framework" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** MongoDb */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('mongodb101.general.title')}</h2>
        <p>{t('mongodb101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('mongodb101.general.stackTitle')}</h2>
            <StackIcons icons={t('mongodb101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('mongodb101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('mongodb101.general.description.par01')}</p>
          <p>{t('mongodb101.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/mongodb101/">{t('mongodb101.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="RDBMS" />
            <Tag filter="MongoDB" />
            <Tag filter="Data Base" />
            <Tag filter="No-SQL" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** mysql */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('mysql101.general.title')}</h2>
        <p>{t('mysql101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('mysql101.general.stackTitle')}</h2>
            <StackIcons icons={t('mysql101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('mysql101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('mysql101.general.description.par01')}</p>
          <p>{t('mysql101.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/mysql101/">{t('mysql101.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="RDBMS" />
            <Tag filter="mysql" />
            <Tag filter="Data Base" />
            <Tag filter="SQL" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** C */}
      <article className="course-overview">
        <h2 className="h2-highlight">{t('c101.general.title')}</h2>
        <p>{t('c101.general.subTitle')}</p>
        <div className="card-technologies">
            <h2>{t('c101.general.stackTitle')}</h2>
            <StackIcons icons={t('c101.general.stackIcons')}/>
          </div>
          <div className="course-level">
            <Level level={t('c101.general.level')}/>
          </div>
        <div className="course-description">
          <p>{t('c101.general.description.par01')}</p>
          <p>{t('c101.general.description.par02')}</p>
        </div>
        {/* <Link className="link-btn" to="/courses/c101/">{t('c101.general.btnTxt')}</Link> */}
        <div className="tags">
            <Tag filter="Low Level" />
            <Tag filter="C" />
            <Tag filter="Curso" />
          </div>
      </article>
      {/** Git y Github */}
      {/** Bash */}
      {/** JavaScript intermedio */}
    </section>
  )
}

export default Courses;
