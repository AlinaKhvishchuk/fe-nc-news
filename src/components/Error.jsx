import "../css/Error.css";

const Error = ({ message }) => {
  return (
    <div className="error">
      <span className="error-message">{message}</span>
    </div>
  );
};

export default Error;
