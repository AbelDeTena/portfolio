import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor } from "../../commons/anchor/anchor";
import {Option} from "./component/options"
import wh1 from "../../assets/wh1.jpeg";
import wh2 from "../../assets/wh2.jpeg";
import wh3 from "../../assets/wh3.jpeg";
import G1 from "../../assets/guitar1.jpg";
import G2 from "../../assets/guitar2.jpg";
import G3 from "../../assets/guitar3.jpg";

const imagesWH = [
  {
    original: wh1,
    thumbnail: wh1,       
  },
  {
    original: wh2,
    thumbnail: wh2,      
  },
  {
    original: wh3,
    thumbnail: wh3,      
  },
];

const imagesGuitar = [
    {
      original: G1,
      thumbnail: G1,       
    },
    {
      original: G2,
      thumbnail: G2,      
    },
    {
      original: G3,
      thumbnail: G3,      
    },
  ];

export const Contact = () => {
  return (
    <section>
      <h1>Contact:</h1>
      <p>
        When I am not working on development, you might find me engaged in other
        activities.
      </p>
      <div>
        <p>
          We can meet in Azeroth if you would like to play World of Warcraft.
        </p>{" "}
        <p>discord.gg/EwwFJHSNjQ</p>
        <Anchor
          title="visit"
          url="https://eu.forums.blizzard.com/en/wow/t/sodaeu-pve-lost-in-the-abyss-new-casual-raidingsocial-guild-recruiting/476355"
        >
          <FontAwesomeIcon icon={faIdCard} />
        </Anchor>
      </div>
      <Option images={imagesWH} anchorTitle="visit" anchorUrl="https://www.vinted.es/member/162831263-detena13" paragraphContent="Or perhaps you might be interested in acquiring one of my Warhammer
        miniatures, which I paint in my free time." />
      <Option images={imagesGuitar}  anchorTitle="visit" anchorUrl="https://luthierdetena.blogspot.com/p/contacto.html" paragraphContent="If you enjoy playing the guitar, you will certainly be interested in
          one of my handmade guitars."/>
      
      <div>
        <p>
          And, of course, you can reach out to me via email:
          abeldetena@hotmail.com.
        </p>
      </div>
    </section>
  );
};
