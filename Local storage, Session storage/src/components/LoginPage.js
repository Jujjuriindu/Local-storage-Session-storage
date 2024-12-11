import React, { useEffect, useRef } from "react";

function LoginPage() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  useEffect(() => {

    if(localStorage.getItem("email") && localStorage.getItem("password")){
        emailInputRef.current.value = localStorage.getItem("email");
        passwordInputRef.current.value = localStorage.getItem("password");

    onLoginClick();
    }
  }, []);

  let onLoginClick = async () => {
    let typedEmail = emailInputRef.current.value;
    let typedPassword = passwordInputRef.current.value;

    localStorage.setItem("email", emailInputRef.current.value);
    localStorage.setItem("password", passwordInputRef.current.value);

    sessionStorage.setItem("email", emailInputRef.current.value);
    sessionStorage.setItem("password", passwordInputRef.current.value);

    if (typedEmail == "dhoni@gmail.com" && typedPassword == "dhoni") {
      alert("valid email or password");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <form>
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordInputRef}></input>
        </div>
        <h5>Forgot Email/Password?</h5>
        <div>
          <button
            type="button"
            onClick={() => {
              onLoginClick();
            }}>login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
