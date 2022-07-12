import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css'

import { darkTheme } from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
