const MyButtonComponent = ({ userFunction, userStyle, children }) => {
  return (
    <button
      type="button"
      onClick={userFunction}
      style={userStyle}
      className="my-button-compnonet">
      {children}
    </button>
  );
};
export default MyButtonComponent;
