import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme , setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("datk")
        }
        else{
            setTheme("light")
        }
    }

    return <ThemeContext.Provider value={{
        theme,  
        isLight : theme ===  "light",
        toggleTheme,
    }}
    >
        {children}</ThemeContext.Provider>
}