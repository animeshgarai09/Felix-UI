import styles from './ProductCard.module.scss'
import PropTypes from 'prop-types'
import Image from '../../Image'
import Badge from '../../Badge/Badge'

const ProductImage = (
    {
        src,            // Source path for the image
        alt,            // Details of the image for screen reader
        productLink,    // Link of the product
        badge,          // Props for badge component   
        className,      // User defined class name     
    }) => {

    return (
        <div className={`${styles.image} ${className ? className : ''}`}>
            {/* Badge component rendered based on the props */}
            {badge &&
                <Badge
                    className={`${styles.badge} ${badge?.className}`}
                    color={badge?.color}
                    variant={badge?.variant}
                >
                    {badge?.text}
                </Badge>
            }
            <a href={productLink}>
                <Image src={src} alt={alt} quality={50} />
            </a>
        </div>
    )
}

ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    productLink: PropTypes.string.isRequired,
    badge: PropTypes.shape({
        text: PropTypes.string.isRequired,
        color: PropTypes.oneOf(['green', 'red', 'yellow', 'primary']),
        variant: PropTypes.oneOfType([
            PropTypes.oneOf(['outline', 'round']),
            PropTypes.arrayOf(PropTypes.oneOf(['outline', 'round']))
        ]),
        className: PropTypes.string,
    }),
    className: PropTypes.string,
}
export default ProductImage