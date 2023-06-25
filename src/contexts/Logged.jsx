import { createContext, useState } from "react";

const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);

    const updateLogged = (value) => {
        setLogged(value);
    };

    return (
        <LoggedContext.Provider value={{ logged, updateLogged }}>
            {children}
        </LoggedContext.Provider>
    );
};

export default LoggedContext;