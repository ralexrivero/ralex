import { Link } from "react-router-dom";
import Tag from "../search/Tag";
import Level from "../Level";
import StackIcons from "../StackIcons";
import { useTranslation } from "react-i18next";

const CourseOverview = (props) => {
  const [t, i18n] = useTranslation('courses');

  return (
    <article className="course-overview">
      <h2 className="h2-highlight">{t(`${props.course}.general.title`)}</h2>
      <p>{t(`${props.course}.general.subTitle`)}</p>
      <div className="card-technologies">
          <h2>{t(`${props.course}.general.stackTitle`)}</h2>
          <StackIcons icons={t(`${props.course}.general.stackIcons`)}/>
        </div>
        <div className="course-level">
          <Level level={t(`${props.course}.general.level`)}/>
        </div>
      <div className="course-description">
        <p>{t(`${props.course}.general.description.par01`)}</p>
        <p>{t(`${props.course}.general.description.par02`)}</p>
      </div>
      <Link className="link-btn" to={`/courses/${props.course}/`}>{t(`${props.course}.general.btnTxt`)}</Link>
      <div className="tags">
          <Tag filter={t(`${props.course}.general.tags`)} />
        </div>
    </article>
  )
}

export default CourseOverview;
