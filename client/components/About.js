import { AboutStyled, Text, Rex, Texture, Link } from "./styles";

const About = () => {
  return (
    <AboutStyled>
      <Link name="about" />
      <Texture>
        <Text>
          <p>
            I am a Los Angeles based Front-End Software Engineer with over 10
            years of development experience. The latter comes from working on
            enterprise websites which actively receive more than 2 million
            unique visitors a day. My duties include development of new features
            and components, active maintenance, code refactoring, as well as
            unit testing.
          </p>
          <Rex src="/static/images/bio/rex.jpg" />
          <p>
            If I am not writing code, you will probably find me walking my
            🐕named Rex through Griffith Park or surfing in Redondo Beach. I
            have recently started listening to tech talks at breweries - what
            could be more enjoyable than learning new technologies while having
            a beer?
          </p>
          <p>
            Below is a small sample of my work. All examples were taken from PSD
            to code. Technology used include React/Redux, HTML, CSS, PHP, and
            Magento.
          </p>
        </Text>
      </Texture>
    </AboutStyled>
  );
};

export default About;
