import "./resource-loader.scss";
import React, { useState, useEffect } from "react";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    const getResource = async () => {
      try {
        const request = await fetch(`http://localhost:9090${resourceUrl}`);
        const response = await request.json();

        setResource(response);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getResource();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
      })}
    </>
  );
};

export default ResourceLoader;
