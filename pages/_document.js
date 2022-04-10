/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a8a8a8" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#2f2f2f" />
                    <meta name="description" content="Documentation for React JS component library - Felix UI" />

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    <link href="/fonts/Montserrat-Regular.woff2" rel='preload' as='font' />
                    <link href="/fonts/Montserrat-Bold.woff2" rel='preload' as='font' />
                    <link rel="stylesheet" href="https://felix-ui-dev.netlify.app/components/main.css" />
                </Head>
                <body >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument