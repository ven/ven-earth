import '../styles/globals.css'
import '../lib/fontawesome'
import { Navbar } from '../components/Nav/Navbar'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster position="bottom-left" />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="h-full lg:px-0 px-10">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
