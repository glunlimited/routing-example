import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/PersonnelDetail.css";
import NotFound from "./NotFound";

/* This component fetches and displays details of a specific person based on the ID from the URL. 
It also handles errors by showing a NotFound component if the fetch fails. It also shows a loading 
state while fetching. */

const PersonnelDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: "GET",
      headers: { "x-api-key": "reqres_43b8f91376584dc9abe05417b31f6326" },
    })
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {setPerson(data.data); setLoading(false);})
      .catch((err) => console.error("Error fetching person:", err));
  };

  useEffect(() => {
    getPerson();
  }, []); // Re-run the effect when the id changes

  //console.log("Current person state:", person); // Debugging log to check the current person state

  if (error) {
    return <NotFound />;
  }
  if (loading) {
    return <div>Data Loading...</div>;
  }
  if (!error && !loading) {
    return (
      <div className="personWrapper">
        <div className="personDetail">
          <h3>
            {person?.first_name} {person?.last_name}
          </h3>
          <img
            src={person?.avatar}
            alt={`${person?.first_name} ${person?.last_name}`}
            crossOrigin="anonymous"
          />
          <p>Email: {person?.email}</p>
        </div>
        <div className="buttonWrapper">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }
};

export default PersonnelDetail;
