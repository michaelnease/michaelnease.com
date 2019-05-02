import { useState } from "react";
import { Bar, Navigation, Invader } from "./styles";

const Header = () => {
  const [name, setInvaderName] = useState("");

  const handleMouseEnter = e => {
    setInvaderName(e.target.name);
  };

  return (
    <Bar>
      <Invader invader={name}>Michael Nease</Invader>
      <Navigation>
        <ul>
          <li>
            <a onMouseEnter={handleMouseEnter} name="crab" href="#about">
              About
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} name="antenna" href="#skill">
              Skills
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} name="legs" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} name="octopus" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </Navigation>
    </Bar>
  );
};

export default Header;
