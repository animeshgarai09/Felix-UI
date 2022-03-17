import styles from './ProductCard.module.scss'
import PropTypes from 'prop-types'
import { RiCloseFill } from 'react-icons/ri'

const ProductWrapper = (
    {
        style = "vertical",     // "vertical" || "horizontal" Orientation of the product card
        isOutStock = false,     // If true then out of stock overlay will be displayed
        isLoading = false,      // If true then card loader will be visible
        onClose,
        className,              // User provided class name
        children
    }) => {

    return (
        <div className={`${styles.wrapper} ${styles[style]} ${className ? className : ''}`}>

            {isOutStock && <div className={styles.overlay}><span> Out of stock</span></div>}
            {onClose && <span onClick={onClose} className={styles.remove}> <RiCloseFill /> </span>}
            {!isLoading && children}

            {isLoading &&
                <>
                    <div className={`${styles.skeleton_image} loader`}></div>
                    <div className={`${styles.skeleton_details} ${styles.content_wrap}`}>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                    </div>
                </>
            }
        </div>
    )
}

ProductWrapper.propTypes = {
    style: PropTypes.oneOf(["vertical", "horizontal"]),
    isOutStock: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
}
export default ProductWrapper