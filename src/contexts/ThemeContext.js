import React, {createContext} from 'react';
import useToggleState from '../hooks/useToggleState'

export const ThemeContext = createContext();

///create Context
export function  ThemeProvider(props) {

  const [isDarkMode, toggleTheme] = useToggleState(false)
    return (
      //Context.Provide 
      //ThemeContext is the provider
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    );
  
}