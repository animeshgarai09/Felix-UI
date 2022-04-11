import Image from '../Image/Image'
import styles from './avatar.module.scss'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

const gradientColors = [
    'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
    'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
    'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
    'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)',
    'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)',
    'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    'linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)',
    'linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)',
    'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
    'linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)'
]

function randomNumberGen(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) << 0;
}

const Avatar = (
    {
        name,           // Avatar name
        src,            // link for the Avatar image
        size = 'md',    // 'xs' || 'sm' || 'md' || 'lg' || 'xl' || '2xl' Size of the avatar
        status,        // 'green' || 'red' || 'yellow' || 'gray' status symbol for avatar
        num,            // applied for avatar group to show max number of avatar
        className       // User defined class name
    }) => {

    const shortName = name && name.split(' ')[0][0].toUpperCase() + name.split(' ')[1][0].toUpperCase()
    const [gradient, setGradient] = useState(null)
    useEffect(() => {
        setGradient(gradientColors[randomNumberGen(9)])
    }, [])
    return (
        <div className={`${styles.container} ${className ? className : ''}`}>
            {src && <Image className={`${styles[size]} ${styles.circle}`} src={src} alt={name} quality={20} />}

            {!src && name &&
                <div style={{ background: gradient }} className={`${styles.text} ${styles[size]} ${styles.circle}`}>
                    <span>{shortName}</span>
                </div>
            }

            {!src && !name &&
                <div className={`${styles.info} ${styles.circle}`}>
                    <span>{'+' + num}</span>
                </div>
            }

            {status &&
                <span className={`${styles.badge} ${styles[status]} `}>
                </span>
            }
        </div>
    )
}

Avatar.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
    status: PropTypes.oneOf(['green', 'red', 'yellow', 'gray']),
    num: PropTypes.number,
    className: PropTypes.string,
}

export default Avatar