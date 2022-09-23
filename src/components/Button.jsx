const CustomBtn = ({ type, className, style, children, onClick }) => {
  return (
    <button type={type} className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomBtn;
