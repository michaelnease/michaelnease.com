const List = ({ children, className, name }) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export default List;
