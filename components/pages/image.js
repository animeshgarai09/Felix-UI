import styles from '../../styles/documentation.module.scss'
import { Codeblock } from '../utils'
import { Img } from '../../styles/felix-ui'
import Footer from '../footer/footer'
const Image = () => {
    return (
        <>
            <h1>Image</h1>
            <p>The <code>Img</code> component is used to display images.</p>
            <h4>Import</h4>
            <Codeblock>
                {`import { Img } from '../../styles/designComponents/components'`}
            </Codeblock>

            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Img options={{ src: '/images/3.jpg', width: '200px', alt: 'Dan Abramov' }} />
            </div>
            <Codeblock>
                {`<Img options={{ src: '/images/3.jpg', width: '200px', alt='Dan Abramov' }} />`}
            </Codeblock>
            <h4>Size</h4>
            <p>The width of the image can be adjusted using the <code>width</code> prop.</p>
            <div className={styles.element_container}>
                <Img options={{ src: '/images/3.jpg', width: '100px', alt: 'Dan Abramov' }} />
                <Img options={{ src: '/images/3.jpg', width: '150px', alt: 'Dan Abramov' }} />
                <Img options={{ src: '/images/3.jpg', width: '200px', alt: 'Dan Abramov' }} />
            </div>

            <Footer previous={['Grid', '/documentation/grid']} next={['Input', '/documentation/input']} />
        </>
    )
}

export default Image
