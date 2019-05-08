import { Work, Texture, Selected, PortfolioImage } from "./styles";
import { protfolio, portfolio } from "../static/data/portfolio";
import Image from "./Image";
const Portfolio = () => {
  return (
    <Texture>
      <a name="portfolio" />
      <Selected>
        <Work>
          {portfolio.map(({ id, src, span }) => (
            <PortfolioImage key={id} src={src} span={span} />
          ))}
        </Work>
      </Selected>
    </Texture>
  );
};

export default Portfolio;
