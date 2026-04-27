import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/people.js";
import "../css/Personnel.css";

const Personnel = () => {
  const getPersonnel = () => {
    setPersonnel(data.data);
    
    // fetch("https://reqres.in/api/users?project_id=reqres_43b8f91376584dc9abe05417b31f6326").then((res) => res.json())
    // .then((data) => console.log(data));
  };
  const [personnel, setPersonnel] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPersonnel();
  }, []);

  return (
    <div className="personnelWrapper">
      <h1>Personnel List</h1>
      <div className="cardWrapper">
        {
          personnel.map((person) => {
            const { id, first_name, last_name, avatar } = person;
            return (
              <div className="personnelCard" key={id}>
                <img src={avatar} alt={`${first_name} ${last_name}`} />
                <p>{first_name} {last_name}</p>
                <button onClick={() => navigate(`/personnel/${id}`,{state:person})}>View Profile</button>
              </div>
            );
          })
        }
      </div> 
    </div>
  );
};

export default Personnel;