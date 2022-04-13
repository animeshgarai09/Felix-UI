import styles from '@styles/documentation.module.scss'
import { Codeblock } from 'components/utils'
import Footer from 'components/footer'
const Installation = () => {
    return (
        <>
            <div className={styles.hero_container}>
                <div className={styles.text}>
                    <h1>Felix UI</h1>
                    <p>A light weight React component library to speed up your next awesome project.</p>
                </div>
            </div>
            <p className={styles.description}>
                Felix UI is an open source react component library which extends as a CSS styling framework, which helps developers to use best styles and components, by using pre-defined classnames. Felix UI helps you to quickly build your dream project, by focusing much on functionality, because we take care of your designs.
            </p>
            <h4>Installing Felix UI</h4>
            <p>To use Felix UI components in react, all you need to do is install the <code>react-felix-ui </code> package.</p>
            <Codeblock lang="sh">
                {`$ npm i react-felix-ui`}
            </Codeblock>

            <h4>Usage</h4>
            <p>To start using the components, please follow these steps:</p>
            <ul>
                <li>Wrap your application with the <code>FelixProvider</code> provided by <strong> react-felix-ui</strong>.</li>
            </ul>
            <Codeblock lang="jsx">
                {`import { FelixProvider } from "react-felix-ui"

// Do this at the root of your application
function App({ children }) {
    return <FelixProvider>{children}</FelixProvider>
}`}
            </Codeblock>
            <ul>
                <li>Felix UI ships with easy to use utility classes. To add CSS Import global CSS file from the package, in your <code> index.js </code>file.</li>
            </ul>
            <Codeblock lang="jsx">
                {`// import Felix UI global CSS file
import "react-felix-ui/dist/cjs/index.css"

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)`}
            </Codeblock>

            <h4>Use as a styling framework</h4>
            <p>Felix UI can be used as a styling framework for your vanilla HTML CSS projects also. To start using the components in your project, Copy-paste the stylesheet <code> link </code>into your <code> head</code> before all other stylesheets to load Felix UI CSS.</p>
            <Codeblock lang="html">
                {`<link rel="stylesheet" href="https://felix-ui-dev.netlify.app/components/main.css" />`}
            </Codeblock>
            <Footer currentPage="Installation" />
        </>
    )
}

export default Installation
