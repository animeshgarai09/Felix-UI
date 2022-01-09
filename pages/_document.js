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
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="apple-mobile-web-app-title" content="Felix-UI" />
                    <meta name="application-name" content="Felix-UI" />
                    <meta name="theme-color" content="#1B1B1B" />
                    <link href="/fonts/Montserrat-Regular.woff2" rel='preload' as='font' />
                    <link href="/fonts/Montserrat-Bold.woff2" rel='preload' as='font' />
                    <meta charSet="utf-8" />

                    <meta name="description" content='A community of AI enthusiast' />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary" />
                    {/* <meta name="twitter:creator" content={this.twitterHandle} /> */}

                    {/* Open Graph */}
                    {/* <meta property="og:url" content={this.currentURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={this.previewImage} />
                    <meta property="og:title" content={this.pageTitle} />
                    <meta property="og:description" content={this.description} /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument