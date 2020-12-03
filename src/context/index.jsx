import React, { createContext, useState, useMemo } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [x, setX] = useState(2915);

  const [y, setY] = useState(1486);

  const [sat, setSat] = useState(null);

  const [topo, setTopo] = useState(null);

  const value = useMemo(
    () => ({ x, y, sat, topo, setX, setY, setSat, setTopo }),
    [x, y, sat, topo, setX, setY, setSat, setTopo]
  );

  return (
    <Context.Provider
      value={{
        ...value,
      }}
    >
      {children}
    </Context.Provider>
  );
};
