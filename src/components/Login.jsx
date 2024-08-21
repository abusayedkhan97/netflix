import "./login.css";
const Login = () => {
  return (
    <>
      <div className="signIn">
        <h1>Sign In</h1>
        <form action="">
          <input type="text" placeholder="Email or mobile number" />
          <input type="password" placeholder="Password" />
          <input id="submit" type="submit" value={"Sign In"} />
        </form>

        <h4>OR</h4>

        <button>Use a Sign-In Code</button>

        <a href="#">Forgot password?</a>

        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>

        <div className="signUp"><p>Now to Netflix? <a>Sign up now.</a></p></div>

        <div className="learnMore">
            <p>This page is protected by Google reCAPTCHA to ensure you&#39;re not a bot. <a href="#">Learn more.</a></p>
        </div>

      </div>
    </>
  );
};

export default Login;
