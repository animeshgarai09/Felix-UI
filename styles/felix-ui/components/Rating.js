import styles from '../utils/system.module.scss'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const Rating = ({ points, text, className }) => {
    /*
            points: number,//(0-5)
            text: false || true //default true
    */
    // let { points, text } = options ? options : {}
    let [first, second] = points.toString().split('.')
    let blank = second ? 4 - parseInt(first) : 5 - parseInt(first)
    let arr = []
    let i = 0;
    while (i < first) {
        arr.push(<FaStar key={i} />)
        i++
    }
    if (second) {
        arr.push(<FaStarHalfAlt key={7} />)
    }
    i = 0
    while (i < blank) {
        arr.push(<FaRegStar key={10 + i} />)
        i++
    }

    return (
        <span className={`${styles.rating} ${className ? className : ''}`}>
            {arr}
            {text && points}
        </span>
    )
}

export default Rating