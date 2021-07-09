import '../styles/globals.css'
import { Navbar } from '../components/Nav/Navbar'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { AppProps } from 'next/app'
import '../lib/fontawesome'

const App = ({ Component, pageProps, router }: AppProps) => {
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
