import { Framework, Texture, FrameworkList, ListItem } from "./styles";
import { technology } from "../static/data/technology";

const Technology = () => {
  return (
    <Framework>
      <Texture>
        <FrameworkList>
          {technology.map(({ id, name }) => (
            <ListItem key={id} name={name} />
          ))}
        </FrameworkList>
      </Texture>
    </Framework>
  );
};

export default Technology;
