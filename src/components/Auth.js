import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const Auth = () => {
  const navigate = useNavigate();
  const { formSignup, formSignin } = UserAuth();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      formSignup(formData);
      navigate("/home");
    } else {
      formSignin(formData);
      navigate("/home");
    }
  };
  const canSubmit = [...Object.values(formData)].every(Boolean);
  return (
    <div className="wrapper">
      <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Votre Nom"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="prenom"
              placeholder="Votre Prénom"
              required
              onChange={handleChange}
            />
          </div>
        )}
        <input
          type="email"
          name="email"
          placeholder="exemple@gmail.com"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe.."
          required
          onChange={handleChange}
        />
      </form>
      <button disabled={!canSubmit}>{isSignup ? "Sign Up" : "Login"}</button>
      <div className="member" onClick={() => setIsSignup(!isSignup)}>
        {isSignup
          ? "Already a member? Try to Signin."
          : "Not a member? Try to Singup."}
      </div>
    </div>
  );
};

export default Auth;
