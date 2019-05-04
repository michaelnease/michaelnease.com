const Image = ({ className, src, span }) => (
  <img className={className} src={`/static/images/portfolio/${src}`} />
);

export default Image;
