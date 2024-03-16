import React,{useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext'

export default function PageContent(props) {
  //consuming the context
  const { isDarkMode } = useContext(ThemeContext)

  const style={
    backgroundColor: isDarkMode ? "black":"white",
    height:"100vh",
    width:"100vw"
  }
  return(
    <div style={style}>
      {props.children}
    </div>

  )
}