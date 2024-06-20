import { createContext, useState } from 'react';

const ContextName = createContext();

const AppContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState('true-main');
    return (
        <ContextName.Provider value={{ isDarkMode, setIsDarkMode  }}>
            {children}
        </ContextName.Provider>
    );
}

export { AppContextProvider, ContextName };
