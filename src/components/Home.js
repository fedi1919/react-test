import React from "react";

import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();
  return (
    <div className="wrapper">
      <p>Welcome to our first page</p>
      <h1>
        {user.nom} &nbsp; {user.prenom}
      </h1>
    </div>
  );
};

export default Home;
