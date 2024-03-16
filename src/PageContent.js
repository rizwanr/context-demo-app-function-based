import React,{Component} from 'react';
import {ThemeContext} from './contexts/ThemeContext'

export default class PageContent extends Component{
  //consuming the context
  static contextType = ThemeContext;
render(){
  const { isDarkMode } = this.context;
  const style={
    backgroundColor: isDarkMode ? "black":"white",
    height:"100vh",
    width:"100vw"
  }
  return(
    <div style={style}>
      {this.props.children}
    </div>

  )
}
}