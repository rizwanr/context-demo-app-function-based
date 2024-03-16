import React, {Component,createContext} from 'react';

export const ThemeContext = createContext();

///create Context
export  class ThemeProvider extends Component {
  state={
    isDarkMode:true
  };

  toggleTheme =()=>{
    this.setState({isDarkMode : !this.state.isDarkMode})
  }


  render() {
    return (
      //Context.Provide 
      //ThemeContext is the provider
      <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}