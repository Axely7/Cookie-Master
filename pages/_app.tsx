import type { AppContext, AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css';
import { darkTheme, lightTheme, customTheme } from '../themes';
import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';
;



interface Props extends AppProps {
  theme: string
}



function MyApp({ Component, pageProps, theme = 'dark'}: Props) {

  // console.log({theme})
  const [currentTheme, setCurrenTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;
  
    setCurrenTheme(selectedTheme)
   
  }, [])
  
  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


// MyApp.getInitialProps = async ( appContext:  AppContext) => {

//   const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : { theme: 'light' }

//   const validThemes = ['light', 'dark', 'custom']
  
//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   }

// }



export default MyApp
