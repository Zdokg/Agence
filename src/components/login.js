import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/API/Login", { email, password });
      if (response.status === 200) {
        setMessage(response.data.message);
        navigate("/");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <img src="https://img.freepik.com/free-vector/rocket_23-2148156870.jpg?t=st=1741879627~exp=1741883227~hmac=39bf361771100f2dc1371614e366fb0a1c6c62ffedc500f3f0b73245085ef78e&w=740" className="TasL" />
      <h1 className="HL">Hello Again!</h1>
      <h3 className="KL">Welcome back you've been missing!</h3>

      <form onSubmit={handleSubmit}>
        <input 
          className="hakalmail" 
          placeholder="example@exm.com" 
          type="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="elPassL">{message}</p>
        <input 
          className="hakalpass" 
          placeholder="Password" 
          type={showPassword ? "text" : "password"}
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <img 
          width="30" 
          height="30" 
          src={showPassword ? "https://img.icons8.com/ios-glyphs/30/visible.png" : "https://img.icons8.com/ios-glyphs/30/invisible.png"}
          alt="toggle visibility" 
          className="tchouf" 
          onClick={togglePasswordVisibility}
        />
        <Link to="/FPass">
        <p className="ForgetPass">Forgot Password</p>
        </Link>
        <button className="SignInL" type="submit">Sign In</button>
        <Link to="/register" >
        <button className="SignUpL" type="submit">Sign Up</button>
        </Link>
      </form>

      <p className="ContL">Or continue with</p>
      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" className="LogosL1" />
      <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" className="LogosL2" />
      <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" className="LogosL3" />
    </div>
  );
}

export default Login;
