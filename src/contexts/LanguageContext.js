import React, { useState,createContext } from 'react';

export const LanguageContext = createContext();

///create Context
export function LanguageProvider(props) {

  const [language, setLanguage]=useState("spanish")
  const changeLanguage =(e)=>{
    setLanguage(e.target.value)
  }


    return (
      //Context.Provide 
      //ThemeContext is the provider
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    );

}

//Your withLanguageContext HOC (Higher Order Component) seems to be designed to wrap another component and provide it with the LanguageContext and its corresponding value as props.

//not needed when using hooks
// export const withLanguageContext =Component =>props=>(
//   <LanguageContext.Consumer>
//   {value => <Component languageContext={value} {...props}/>}

//     </LanguageContext.Consumer>
//   )
  