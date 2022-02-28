import styles from '@styles/documentation.module.scss'
import { Codeblock } from 'components/utils'
import { Image } from '@felix-ui'
import Footer from 'components/footer'
const ImageUI = () => {
    return (
        <>
            <h1>Image</h1>
            <p>The <code>Image</code> component is used to display images.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { Image } from '@felix-ui'`}
            </Codeblock>

            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Image src='/images/3.jpg' width='200px' alt='Dan Abramov' />
            </div>
            <Codeblock lang="jsx">
                {`<Image options={{ src: '/images/3.jpg', width: '200px', alt='Dan Abramov' }} />`}
            </Codeblock>
            <h4>Size</h4>
            <p>The width of the image can be adjusted using the <code>width</code> prop.</p>
            <div className={styles.element_container}>
                <Image src='/images/3.jpg' width='100px' alt='Dan Abramov' />
                <Image src='/images/3.jpg' width='150px' alt='Dan Abramov' />
                <Image src='/images/3.jpg' width='200px' alt='Dan Abramov' />
            </div>

            <Footer currentPage='Image' />
        </>
    )
}

export default ImageUI
