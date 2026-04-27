import error from "../img/404.png";

const NotFound = () => {
  return (
    <div className="errorWrapper">      
      <img src={error} alt="404 Not Found" />
    </div>
  );
};

export default NotFound;