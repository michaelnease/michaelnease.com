import {
  TechnologyStyled,
  Texture,
  FrameworkList,
  ListItem,
  Landing,
  Link
} from "./styles";
import { technology } from "../static/data/technology";

const Technology = () => {
  return (
    <TechnologyStyled>
      <Link name="technology" />
      <Texture>
        <FrameworkList>
          {technology.map(({ id, name }) => (
            <ListItem key={id} name={name} />
          ))}
        </FrameworkList>
      </Texture>
    </TechnologyStyled>
  );
};

export default Technology;
