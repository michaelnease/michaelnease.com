const Item = ({ className, name }) => {
  return (
    <div className={className}>
      <span>{name}</span>
    </div>
  );
};

export default Item;
