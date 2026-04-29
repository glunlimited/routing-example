import error from "../img/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="errorWrapper">      
      <img src={error} alt="404 Not Found" />      
      <div className="btnWrapper" >
         <button onClick={() => navigate("/")}>
          Home
        </button>       
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>      
    </div>
  );
};

export default NotFound;