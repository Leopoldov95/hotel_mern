import "../../styles/Loader.scss";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="server-loader">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text"></div>
      </div>
    </div>
  );
};

export default Loader;
