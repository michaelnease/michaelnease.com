import { Foot } from "./styles";

const Footer = () => {
  return (
    <Foot>
      <p>&copy; michaelnease.com {new Date().getFullYear()}</p>
      <img src="/static/images/footer/mocmennemcom-footer.svg" />
    </Foot>
  );
};

export default Footer;
