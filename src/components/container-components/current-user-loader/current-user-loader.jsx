import "./current-user-loader.scss";
import React, { useState, useEffect } from "react";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState({ name: "", books: [] });

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const request = await fetch("http://localhost:9090/current-user");
        const response = await request.json();

        setUser(response.currentUser);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user: user });
        }

        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
