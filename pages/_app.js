import '@felix-ui/global.scss'
import '../styles/fonts.scss'
import '../styles/global.scss'
import { FelixProvider } from '@felix-ui'
function MyApp({ Component, pageProps }) {
    return (
        <FelixProvider>
            <Component {...pageProps} />
        </FelixProvider>
    )
}

export default MyApp
