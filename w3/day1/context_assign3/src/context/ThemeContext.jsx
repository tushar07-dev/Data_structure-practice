import { createContext, useState } from "react";


export const ThemeContext =  createContext();
/// Created Theme context;
export const ThemeProvider =  ({children}) =>{
    
    const [ theme , setTheme] = useState();

    const toogleTheme = () => {
        if(theme === "light"){
            setTheme('dark');
        }
        else{
            setTheme('light')
        }
    }



    return (
        <ThemeContext.Provider value = {{theme  ,  isLight : theme === 'light' ,  toogleTheme }}>{children}</ThemeContext.Provider>
    )
}