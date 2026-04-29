import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Personnel.css";

const Personnel = () => {
  
  const [personnel, setPersonnel] = useState([]);
  const navigate = useNavigate();
  const getPersonnel = () => {
    fetch("https://reqres.in/api/users", {method: 'GET', headers: {"x-api-key": "reqres_43b8f91376584dc9abe05417b31f6326"}})
    .then((res) => res.json())
    .then((data) => setPersonnel(data.data))
    .catch((err) => console.error("Error fetching personnel:", err));     
  };

    
  useEffect(() => {
    getPersonnel();
    
  }, []);

    
    return (
      <div className="personnelWrapper">
        <h1>Personnel List</h1>
        <div className="cardWrapper">
          {personnel.map((person) => {
            const { id, first_name, last_name, avatar } = person;
            return (
              <div className="personnelCard" key={id}>
                {/* This image is from an external source, so we need to set crossOrigin to anonymous to avoid CORS issues when fetching the image. */}
                <img src={avatar} alt={`${first_name} ${last_name}`} crossOrigin="anonymous" />
                <p>
                  {first_name} {last_name}
                </p>
                <button
                  onClick={() =>
                    navigate(`/personnel/${id}`)
                  }
                >
                  View Profile
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };


export default Personnel;
