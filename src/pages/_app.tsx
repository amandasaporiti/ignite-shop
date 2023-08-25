import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { AppContainer } from '../styles/pages/app'
import { Header } from '../components/Header'
import { BagProvider } from '../contexts/BagContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BagProvider>
      <AppContainer>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
      </AppContainer>
    </BagProvider>
  )
}
