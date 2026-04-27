import courses from '../data/data';
import '../css/Courses.css';

const Courses = () => {
  return (
    <div className="coursesWrapper">
      <h1>Our Courses</h1>
      <div className="iconWrapper">
        {courses.map((course) =>{
          const{id, name, img, text} = course;
          return (
            <div className="course" key={id}>
              <img src={img} alt={img} />
              <div>
                <h5>{name}</h5>
                <p>{text}</p>
              </div>
             
            </div>
          );

        })}
      </div>
    </div>
  );
}

export default Courses;