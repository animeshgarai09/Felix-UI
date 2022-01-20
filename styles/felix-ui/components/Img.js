import Image from 'next/image'
import styles from '../utils/system.module.scss'

const Img = ({ options, className }) => {
    /* 
        options={
            src: path,  //!required,
            alt: text,
            priority: 
            quality:
            containerClass:
            imageClass:
            blur:
        }
    */
    let { src, alt, width, priority, quality, imageClass, blur } = options ? options : {}
    return (
        <div style={{ width: width }} className={`${styles.image__con} ${className ? className : ''}`}>
            <Image
                src={src}
                alt={alt}
                priority={priority}
                layout="fill"
                quality={quality}
                placeholder={blur && 'blur'}
                className={`${styles.image} ${imageClass}`}
            />
        </div>
    )
}

export default Img