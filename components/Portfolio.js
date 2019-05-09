import { PortfolioStyled, Work, Texture, PortfolioImage } from "./styles";
import { portfolio } from "../static/data/portfolio";
import Image from "./Image";

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Texture>
        <a name="portfolio" />
        <Work>
          {portfolio.map(({ id, src, span }) => (
            <PortfolioImage key={id} src={src} span={span} />
          ))}
        </Work>
      </Texture>
    </PortfolioStyled>
  );
};

export default Portfolio;
