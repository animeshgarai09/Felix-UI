import styles from './ProductCard.module.scss'
import PropTypes from 'prop-types'
import Rating from '../../Rating'

const ProductBody = (
    {
        title,          // Product name which will be passed to ProductImage and ProductDetails Component
        description,    // Product description
        link,           // Product full page link
        category,       // Category name and link of the product
        vendor,         // Vendor name and link of the product
        rating,         // Rating for the product
        currentPrice,   // Current price of the product
        price,          // Original Price of the product. if provided the discount will be calculated automatically
        className,      // User provided class name
        children
    }) => {

    const discount = (((price - currentPrice) / price) * 100).toFixed(1)
    return (
        <div className={`${styles.content_wrap} ${className ? className : ''}`}>
            {category?.name && <a className={styles.category} href={category.link || "#"}>{category.name}</a>}
            <a className={styles.name} href={link}>{title}</a>
            {description && <p>{description}</p>}
            <div className={styles.row}>
                {vendor?.name && <span className={styles.vendor}>By <a href={vendor.link || '#'}>{vendor.name}</a></span>}
                {rating && <Rating points={rating} text={true} className={styles.rating} />}
            </div>
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <span >Rs. {currentPrice}</span>
                    {price &&
                        <div className={styles.discount}>
                            <span>Rs. {price}</span>
                            <span>-{discount}%</span>
                        </div>
                    }
                </div>
                {children}
            </div>
        </div>
    )
}


const ProductActions = (
    {
        leftAlign = false,     // If true align actions to left else right
        newLine = false,       // If true put all action to new row
        className,           // User provided class name
        children
    }) => {
    return (
        <div className={`${styles.action_con} ${leftAlign && styles["left_align"]} ${newLine && styles["new_line"]} ${className ? className : ''}`}>
            {children}
        </div>
    )
}


ProductBody.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    category: PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string
    }),
    vendor: PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string
    }),
    rating: PropTypes.number,
    currentPrice: PropTypes.number,
    price: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node
}

ProductActions.propTypes = {
    leftAlign: PropTypes.bool,
    newLine: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}


export { ProductBody, ProductActions }