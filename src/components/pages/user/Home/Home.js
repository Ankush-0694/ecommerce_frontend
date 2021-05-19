import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to the Website and <Link to="Products">products</Link>
    </div>
  );
};

export default Home;
