import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faAngular,
  faGit,
  faGithub,
  faNode,
  faSass,
  faNpm,
  faVuejs,
  faMarkdown,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, // Cambiado de faWebpack a faDatabase para SQL
  faCode, // Ícono genérico para TypeScript
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

export const Skills = () => {
  return (
    <section className='skill'>
      <h3>Skills</h3>
      <div className='container__icons'>        
        <FontAwesomeIcon icon={faHtml5} title="HTML5" style={{ color: "#ed6c02" }} size='4x' />
        <FontAwesomeIcon icon={faCss3Alt} title="CSS" style={{ color: "#074DA6" }} size='4x' />
        <FontAwesomeIcon icon={faJs} title="JavaScript" style={{ color: "#F1DD11" }} size='4x' />
        <FontAwesomeIcon icon={faReact} title="React" style={{ color: "#11F155" }} size='4x' />
        <FontAwesomeIcon icon={faAngular} title="Angular" style={{ color: "#F11111" }} size='4x' />
        <FontAwesomeIcon icon={faCode} title="TypeScript" style={{ color: "#007ACC" }} size='4x' />
        <FontAwesomeIcon icon={faVuejs} title="Vue.js" style={{ color: "#41B883" }} size='4x' />
        <FontAwesomeIcon icon={faSass} title="Sass" style={{ color: "#CC6699" }} size='4x' />
      </div>
      <div className='container__icons'>
        <FontAwesomeIcon icon={faGit} title="Git" style={{ color: "#504D4D" }} size='4x' />
        <FontAwesomeIcon icon={faGithub} title="GitHub" style={{ color: "#A603FE" }} size='4x' />
        <FontAwesomeIcon icon={faNode} title="Node.js" style={{ color: "#181818" }} size='4x' />
        <FontAwesomeIcon icon={faNpm} title="NPM" style={{ color: "#CB3837" }} size='4x' />        
        <FontAwesomeIcon icon={faMarkdown} title="Markdown" style={{ color: "#000000" }} size='4x' />
        <FontAwesomeIcon icon={faDatabase} title="SQL" style={{ color: "#8DD6F9" }} size='4x' />
      </div>
    </section>
  );
};
