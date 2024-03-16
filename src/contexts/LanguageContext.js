import React, { Component,createContext } from 'react';

export const LanguageContext = createContext();

///create Context
export class LanguageProvider extends Component {
  state = {
    language: "spanish"
  };

changeLanguage =(e)=>{
  this.setState({language: e.target.value})
}

  render() {
    return (
      //Context.Provide 
      //ThemeContext is the provider
      <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

//Your withLanguageContext HOC (Higher Order Component) seems to be designed to wrap another component and provide it with the LanguageContext and its corresponding value as props.
export const withLanguageContext =Component =>props=>(
  <LanguageContext.Consumer>
  {value => <Component languageContext={value} {...props}/>}

    </LanguageContext.Consumer>
  )
  