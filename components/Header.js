import { useState } from "react";
import { Bar, Navigation, Invader, Hamburger, Dropdown } from "./styles";

const Header = () => {
  const [name, setInvaderName] = useState("");
  const [open, setHamburger] = useState(false);

  const handleMouseEnter = e => {
    setInvaderName(e.target.name);
  };

  const handleHamburgerClick = () => {
    setHamburger(!open);
  };

  return (
    <Bar>
      <Invader invader={name}>Michael Nease</Invader>
      <Dropdown />
      <Navigation open={open}>
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
      <Hamburger onClick={handleHamburgerClick}>
        <div />
        <div />
        <div />
      </Hamburger>
    </Bar>
  );
};

export default Header;
