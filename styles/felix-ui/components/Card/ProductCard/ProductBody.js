import styles from './ProductCard.module.scss'
import PropTypes from 'prop-types'
import Rating from '../../Rating'
import Button from '../../Button/Button'
import { MdAdd } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'

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
        onWishlist,     // Event on wishlist button click
        onAdd,          // Event on add button click
        className,      // User provided class name
    }) => {

    return (
        <div className={`${styles.content_wrap} ${className ? className : ''}`}>
            {category?.name && <a className={styles.category} href={category.link || "#"}>{category.name}</a>}
            <a className={styles.name} href={link}>{title}</a>
            {description && <p>{description}</p>}
            {rating && <Rating points={rating} text={true} className={styles.rating} />}
            {vendor?.name && <span className={styles.vendor}>By <a href={vendor.link || '#'}>{vendor.name}</a></span>}
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <span >Rs. {price}</span>
                    {currentPrice && <span>Rs. {currentPrice}</span>}
                </div>
                <div className={styles.action_con}>
                    <Button size="sm" variant="ghost" theme='gray' leftIcon={<AiOutlineHeart />}></Button>
                    <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                </div>
            </div>
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
    onWishlist: PropTypes.func,
    onAdd: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
}
export default ProductBody