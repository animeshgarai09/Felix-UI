import { MdOpenInNew } from 'react-icons/md'

const A = ({ href, newTab, className, ...props }) => {
    return (
        // <Link href={href}>
        <a href={href} className={className} target={newTab && '_blank'} >{props.children} {newTab && <MdOpenInNew />}</a>
        // </Link>
    )
}

export default A