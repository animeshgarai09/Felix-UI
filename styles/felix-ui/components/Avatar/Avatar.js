import Img from '../Img'
import styles from './avatar.module.scss'


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
const Avatar = ({ options, className }) => {
    /*
        options:{
            name: name,
            src: link,
            size: 'xs' || 'sm' || 'md' || 'lg' || 'xl' || '2xl',
            badge: 'green' || 'red' || 'blue',
        }
    */
    const { name, src, num, size = 'md', badge } = options ? options : {}
    const shortName = name && name.split(' ')[0][0].toUpperCase() + name.split(' ')[1][0].toUpperCase()
    return (
        <div className={`${styles.container} ${className ? className : ''}`}>
            {src && <Img className={styles[size]} options={{
                src: src,
                alt: name,
                imageClass: styles.circle,
            }} />}

            {!src && name &&
                <div style={{ background: gradientColors[randomNumberGen(9)] }} className={`${styles.text} ${styles[size]} ${styles.circle}`}>
                    <span>{shortName}</span>
                </div>
            }

            {!src && !name &&
                <div className={`${styles.info} ${styles.circle}`}>
                    <span>{'+' + num}</span>
                </div>
            }

            {badge &&
                <span className={`${styles.badge} ${styles[badge]} `}>
                </span>
            }
        </div>
    )
}

export default Avatar