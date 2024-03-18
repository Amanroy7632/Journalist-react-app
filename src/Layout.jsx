import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { ThemeContextProvider } from './context/theme'
function Layout() {
    const [themeMode,setThemeMode]=useState("dark");
    const lightTheme=()=>{
        setThemeMode("light");
    }
    const darkTheme=()=>{
        setThemeMode("dark");
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark");
        document.querySelector('html').classList.add(themeMode);
        // document.querySelector('body').classList.toggle(".setDarkBackground")
    },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
    <Header/>
    <Outlet/>
    <Footer/>
    </ThemeContextProvider>
  )
}

export default Layout
