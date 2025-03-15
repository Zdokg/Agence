import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [name1, setName1] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/API/Register", { email, password, name1, phone });
      setMessage(response.data.message);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setMessage(error.response?.data?.message);
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
          className="hakalmail1" 
          placeholder="example@exm.com" 
          type="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="elPassL">{message}</p>
        <input 
          className="hakalpass1" 
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
          alt="toggle password visibility" 
          className="tchouf1" 
          onClick={togglePasswordVisibility}
        />
        <input 
          className="hakaltal" 
          placeholder="Phone" 
          type="tel" 
          name="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input 
          className="hakalname" 
          placeholder="Name" 
          type="text" 
          name="Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          required
        />
        <button className="SignInL1" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
