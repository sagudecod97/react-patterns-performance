import "./data-source.scss";
import React, { useState, useEffect } from "react";

const DataSource = ({ getData, resourceName, children }) => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    const getResourceData = async () => {
      try {
        const response = await getData();
        setResource(response);
      } catch (error) {
        throw error;
      }
    };

    getResourceData();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};

export default DataSource;
