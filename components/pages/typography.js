import styles from '@styles/documentation.module.scss'
import Footer from 'components/footer'
const Typography = () => {
    return (
        <>
            <h1>Typography</h1>
            <p>Felix UI uses <code>Montserrat</code>, as its default font, which is a free font available at Google Fonts.</p>

            <div className={styles.text_doc_container}>
                <h1>A Visual Type Scale</h1>
                <h2>A Visual Type Scale</h2>
                <h3>A Visual Type Scale</h3>
                <h4>A Visual Type Scale</h4>
                <h5>A Visual Type Scale</h5>
                <h6>A Visual Type Scale</h6>
                <p>A Visual Type Scale</p>
                <label>A Visual Type Scale</label>
            </div>

            <Footer previous='Colors' next='Alert' />
        </>
    )
}

export default Typography
