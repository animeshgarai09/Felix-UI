import '@felix-ui/global.scss'
import '../styles/fonts.scss'
import '../styles/global.scss'
import { ToastProvider } from '@felix-ui'
function MyApp({ Component, pageProps }) {
    return (
        <ToastProvider>
            <Component {...pageProps} />
        </ToastProvider>
    )
}

export default MyApp
