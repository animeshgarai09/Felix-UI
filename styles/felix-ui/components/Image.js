import styles from '../utils/system.module.scss'

const Image = (
    {
        src,
        alt,
        width,
        loading,
        className
    }) => {
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

    return (
        <div style={{ width: width }} className={`${styles.image__con} ${className ? className : ''}`}>
            <img
                src={src}
                alt={alt}
                loading={loading}
                layout="fill"
                className={styles.image}
            />
        </div>
    )
}

export default Image