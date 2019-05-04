import { Tech, List, Texture } from "./styles";
import { technology } from "../static/data/technology";

const Bio = () => {
  console.log("tech: ", technology);
  return (
    <Tech>
      <Texture>
        <List>
          {technology.map(subject => {
            return <p>{subject.skill}</p>;
          })}
        </List>
      </Texture>
    </Tech>
  );
};

export default Bio;
