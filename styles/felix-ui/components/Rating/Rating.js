import styles from './rating.module.scss'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import classnames from 'classnames'

const Rating = (
    {
        points,
        text,
        className
    }) => {

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

    const classNames = classnames(
        styles.container,
        className
    )
    return (
        <span className={classNames}>
            {arr}
            {text && points}
        </span>
    )
}

export default Rating