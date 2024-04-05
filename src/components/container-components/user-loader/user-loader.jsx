import "./user-loader.scss";
import React, { useState, useEffect } from "react";

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState({ name: "", books: [] });

  useEffect(() => {
    const getUser = async () => {
      try {
        const request = await fetch(`http://localhost:9090/users/${userId}`);
        const response = await request.json();

        setUser(response);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getUser();
  }, [userId]);

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

export default UserLoader;
