import styles from '@styles/documentation.module.scss'
import Footer from 'components/footer'
const Colors = () => {
    return (
        <>
            <p>Felix UI comes with pre-defined colors, which are consistent in the overall design. The colors used are chosen on a generic basis, which can be accessed by pre-defined classNamees.</p>

            <h4>Default Palette</h4>
            <p>Below is the color palette, used by Felix, listed with the hex-codes.</p>
            <div className={styles.palette}>
                <div>
                    <span>Primary</span>
                    <span>#3bb77e</span>
                </div>
                <div>
                    <span>Secondary</span>
                    <span>#2d3748</span>
                </div>
                <div>
                    <span>Gray</span>
                    <span>#626262</span>
                </div>
                <div>
                    <span>Success</span>
                    <span>#20a779</span>
                </div>
                <div>
                    <span>Danger</span>
                    <span>#fd4e4e</span>
                </div>
                <div>
                    <span>Warning</span>
                    <span>#f8aa1c</span>
                </div>
                <div>
                    <span>Info</span>
                    <span>#007bc3</span>
                </div>
            </div>
            <h4>Utility classNamees for colors</h4>
            <div className={`${styles.util_colors} text-white`}>
                <span className="bg-primary">.bg-primary</span>
                <span className="bg-secondary">.bg-secondary</span>
                <span className="bg-gray">.bg-gray</span>
                <span className="bg-success">.bg-success</span>
                <span className="bg-danger">.bg-danger</span>
                <span className="bg-warning">.bg-warning</span>
                <span className="bg-info">.bg-info</span>
            </div>
            <div className={`${styles.util_colors} text-secondary`}>
                <span className="bg-primary-light ">.bg-primary-light</span>
                <span className="bg-secondary-light ">.bg-secondary-light</span>
                <span className="bg-gray-light ">.bg-gray-light</span>
                <span className="bg-success-light ">.bg-success-light</span>
                <span className="bg-danger-light ">.bg-danger-light</span>
                <span className="bg-warning-light ">.bg-warning-light</span>
                <span className="bg-info-light ">.bg-info-light</span>
            </div>
            <Footer currentPage='Colors' />
        </>
    )
}

export default Colors
