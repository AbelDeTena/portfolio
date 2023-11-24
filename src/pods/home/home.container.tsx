import image from "../../assets/tharolin.png";
import * as classes from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "../../commons/anchor/anchor";

export const Home = () => {
  return (
    <section className={classes.home}>
      <div>
        <img src={image} alt="me" />
        <nav className={classes.socialLinks}>
          <Anchor
            title="LinkedIn"
            url="https://www.linkedin.com/in/abeldetena/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Anchor>
          <Anchor title="GitHub" url="https://github.com/AbelDeTena">
            <FontAwesomeIcon icon={faGithub} />
          </Anchor>
          <Anchor title="CV" url="https://abeldetena.github.io/curriculum/">
            <FontAwesomeIcon icon={faIdCard} />
          </Anchor>
        </nav>
      </div>
      <header>
        <h1>Abel de tena</h1>
        <h2>Frontend developer</h2>
        <p>
          Welcome to my portfolio<span>&#128075;</span>
        </p>
        <p>
          Here, you can get to know me better and explore my skills, projects,
          or anything else. I live in Almería, where the sun resides{" "}
          <span>&#127774;</span>. I have always been a curious person, enjoying
          the search for solutions to different problems. I also have a great
          interest in studying and innovating, especially in the field of
          technology.
        </p>
        I possess diverse qualifications in different areas; I have always
        embraced versatility. My background spans different fields, from
        programming to accounting, logistics, or English. Event I have also
        worked alongside my father in his carpentry workshop. Being a frontend
        developer gives me the opportunity to dedicate myself to what I am
        passionate about and contribute significantly to solving real-world
        problems.
        <p></p>
      </header>
    </section>
  );
};
