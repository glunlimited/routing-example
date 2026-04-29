import "../css/Login.css";

const Login = () => {
  return (
    <div className="loginWrapper">
      <h1>Login</h1>
      <form className="formWrapper">
        <div className="infoWrapper">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="infoWrapper">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
