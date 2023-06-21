import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiReact, SiPython, SiDjango, SiMongodb, SiMysql, SiC, SiNpm } from '@icons-pack/react-simple-icons';

const StackIcons = (props) => {
  const { icons } = props;
  const iconsArray = Array.isArray(icons) ? icons : icons.split(',');

  const iconComponents = {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPostgresql,
    SiReact,
    SiPython,
    SiDjango,
    SiMongodb,
    SiMysql,
    SiC,
    SiNpm
  };

  return (
    <ul className="project-links">
      {iconsArray.map((icon, index) => {
        const IconComponent = iconComponents[icon];
        return (
          <li key={index} className="badge-tech">
            {IconComponent && <IconComponent title={icon} color="default" />}
          </li>
        );
      })}
    </ul>
  );
};

export default StackIcons;
