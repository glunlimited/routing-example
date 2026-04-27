import { useState, useEffect} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import data from "../data/people.js";
import "../css/PersonnelDetail.css";

const PersonnelDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState("");
  const { state } = useLocation();
  //console.log("Received id parameter:", id); // Debugging log to check the received id parameter
  // console.log("PersonnelDetail data:", id); // Debugging log to check the received parameters
  console.log("PersonnelDetail location:", state); // Debugging log to check the received location
  
  //const obj = JSON.parse(data.data);

  //console.log("Parsed data object:", data.data); // Debugging log to check the parsed data object

    const getPerson = () => {
    // fetch(`https://reqres.in/api/users/${id}?project_id=reqres_43b8f91376584dc9abe05417b31f6326`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("Fetched person data:", data); // Debugging log to check the fetched data
    //     setPerson(data.data);
    //   })
    //   .catch((error) => console.error("Error fetching person data:", error));
    for(let i = 0; i < data.data.length; i++) {
      if(data.data[i].id === id) {
        setPerson(data.data[i]);
        console.log("Found person data:", data.data[i]); // Debugging log to check the found person data
        break;
      }
    }

  };
  
     

  useEffect(() => {
    getPerson();
  } );

console.log("Current person state:", person); // Debugging log to check the current person state
  
  
  return (
    <div className="personWrapper">
      <div className="personDetail">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img
          src={person?.avatar}
          alt={`${person?.first_name} ${person?.last_name}`}
        />
        <p>Email: {person?.email}</p>
      </div>
      <div className="buttonWrapper">
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

export default PersonnelDetail;
