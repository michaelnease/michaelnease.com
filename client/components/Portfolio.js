import { PortfolioStyled, Work, Texture, PortfolioImage, Link } from './styles';
import { portfolio } from '../static/data/portfolio';

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Texture>
        <Link name="portfolio" />
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
