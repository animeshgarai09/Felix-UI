import React from 'react'
import styles from './image.module.scss'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Image = (
    {
        src,            // path to the image
        alt,            // alt value for the image
        width,          // Image outer container width
        loading,        // "Lazy" for lazy loading, works on <img> tag only
        blur = true,    // blue before loads image. works in next js project
        priority,       // When true, the image will be considered high priority and preload
        quality,        //The quality of the optimized image, an integer between 1 and 100 where 100 is the best quality. Defaults to 75.
        className
    }) => {

    const classNames = classnames(
        styles.container,
        className
    )
    const loadImage = () => {
        try {
            return React.createElement(require.resolve("next/image").default, {
                src: typeof src === "string" ? src : src.src,
                alt,
                width,
                layout: 'fill',
                placeholder: blur,
                priority,
                quality,
                className: `${styles.image}`
            });
        } catch {
            return React.createElement("img", {
                src,
                alt,
                width,
                loading,
                className: `${styles.image}`
            });
        }
    }

    return (
        <div style={{ width: width }} className={classNames}>
            {loadImage()}
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string,
    loading: PropTypes.oneOf(["lazy"]),
    blur: PropTypes.bool,
    priority: PropTypes.bool,
    quality: PropTypes.oneOf([...(new Array(100))].map((_, i) => i + 1)),
    className: PropTypes.string
}

export default Image