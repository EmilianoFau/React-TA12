import React, { useEffect } from "react";
import { useUser } from '../../Context'

const Display = () => {
    const { userName, setUserName } = useUser();
  
    useEffect(() => {
      setUserName('Juan');
    }, [setUserName]);
  
    return (
      <div>
        <h2>Nombre del Usuario:</h2>
        <p>{userName}</p>
      </div>
    );
};

export default Display;
