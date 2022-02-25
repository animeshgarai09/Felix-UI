import styles from './ProductCard.module.scss'
import A from '../A'
import Image from '../Image'
import Rating from '../Rating'
import Button from '../Button/Button'
import Badge from '../Badge/Badge'
import { MdAddShoppingCart } from 'react-icons/md'
const ProductCard = ({ product, category, vendor, rating, price, oldPrice, type, className }) => {
    /*
        product={
            name: 'product name',
            description: 'description',
            img:'src',
            link: 'link'
        }
        category={
            name:'category name',
            link:'link'
        }
        vendor={
            name:"vendor name",
            link:'link',
        }
        rating= float (1-5)
        price= int
        oldPrice= int
        type="vertical" || "horizontal"
    */
    let { name, description, img, link } = product
    type = type || "vertical"
    return (
        <div className={`${styles.wrapper} ${styles[type]}`}>
            {img && <div className={styles.image}>
                <Badge className={styles.badge} options={{ color: 'red' }}>Sale</Badge>
                <A href={link}>
                    <Image options={{ src: img }} />
                </A>
            </div>}
            <div className={styles.content_wrap}>
                {category?.name && <A className={styles.category} href={category.link || "#"}>{category.name}</A>}
                <A className={styles.name} href={link}>{name}</A>
                {description && <p>{description}</p>}
                {rating && <Rating points={rating} text={true} className={styles.rating} />}
                {vendor?.name && <span className={styles.vendor}>By <A href={vendor.link || '#'}>{vendor.name}</A></span>}
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        <span >Rs. {price}</span>
                        {oldPrice && <span>Rs. {oldPrice}</span>}
                    </div>
                    <div className={styles.button_con}>
                        <Button options={{ variant: "ghost", icon: <MdAddShoppingCart /> }}>Add</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
