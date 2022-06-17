import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider =  ({ children }) => {
    const [theme ,  setTheme ] =  useState("light");
    //theme as an variable , setTheme to show onDisplay , "light" is Initial Value;
    const toggleTheme = () =>{
        if(theme === "light"){
            setTheme("dark");
        }
        else{
            setTheme("light")
        }
    };

    return (
        <ThemeContext.Provider value = {{theme, isLight : theme === "light" , toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );

}