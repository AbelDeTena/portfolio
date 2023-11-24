import { Anchor } from "../../commons/anchor/anchor";
import manfred from "../../assets/manfred-export.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
export const Projects = () => {
  return (
    <section className="projects">
      <h3>Some of my latest projects:</h3>
      <div className="projects__container">
      <article>
        <header>
          <h3>Manfred-export</h3>
          <img src={manfred} alt="manfred-export screenshot" />
        </header>
        <Anchor title="GitHub" url="https://github.com/AbelDeTena">
          <FontAwesomeIcon icon={faGithub} />
        </Anchor>
        <Anchor title="visit" url="https://abeldetena.github.io/curriculum/">
          <FontAwesomeIcon icon={faIdCard} />
        </Anchor>
      </article>
      <article>
        <header>
          <h3>Manfred-export</h3>
          <img src={manfred} alt="manfred-export screenshot" />
        </header>
        <Anchor title="GitHub" url="https://github.com/AbelDeTena">
          <FontAwesomeIcon icon={faGithub} />
        </Anchor>
        <Anchor title="visit" url="https://abeldetena.github.io/curriculum/">
          <FontAwesomeIcon icon={faIdCard} />
        </Anchor>
      </article>
      <article>
        <header>
          <h3>Manfred-export</h3>
          <img src={manfred} alt="manfred-export screenshot" />
        </header>
        <Anchor title="GitHub" url="https://github.com/AbelDeTena">
          <FontAwesomeIcon icon={faGithub} />
        </Anchor>
        <Anchor title="visit" url="https://abeldetena.github.io/curriculum/">
          <FontAwesomeIcon icon={faIdCard} />
        </Anchor>
      </article>
      </div>
    </section>
  );
};
