import type { AppContext, AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css';
import { darkTheme } from '../themes';


interface Props extends AppProps {
  theme: string
}



function MyApp({ Component, pageProps, ...rest }: Props) {

  console.log({rest})

  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


MyApp.getInitialProps = async ( appContext:  AppContext) => {

  const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : { theme: 'light' }

  const validThemes = ['light', 'dark', 'custom']
  
  return {
    theme: validThemes.includes(theme) ? theme : 'dark',
  }

}



export default MyApp
