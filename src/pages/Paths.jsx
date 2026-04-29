import { Outlet, Link } from "react-router-dom";
import "../css/Paths.css";

const Paths = () => {
  return (
    <div className="pathWrapper">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo, temporibus voluptate beatae dolores eveniet sint aut fugit quo! Quas!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perspiciatis laudantium adipisci a magnam obcaecati nesciunt alias tenetur sit distinctio molestiae praesentium veniam magni explicabo reprehenderit, architecto qui impedit accusantium neque enim ab iste aliquid repellat eligendi! Delectus, nisi libero?</p>
      <div className="btnGroup">
        <Link to="frontend">Frontend</Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;