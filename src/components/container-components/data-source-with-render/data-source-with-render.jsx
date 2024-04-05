import "./data-source-with-render.scss";
import { useState, useEffect } from "react";

const DataSourceWithRender = ({ getData, render }) => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    const getResourceData = async () => {
      try {
        const response = await getData();
        setResource(response);
      } catch (error) {
        throw console.log("Error: ", error);
      }
    };

    getResourceData();
  }, [getData]);

  return render(resource);
};

export default DataSourceWithRender;
