import styles from './input.module.scss'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const InputGroup = (
    {
        id,         // Id for label
        label,      // Label for the input
        errMsg,     // Error message for validation
        children    // Input element
    }) => {

    const classNames = classnames(
        styles.group,
        { [styles.error]: errMsg }
    )
    return (
        <div className={classNames}>
            <div className={styles.info}>
                <label htmlFor={id}>{label}</label>
                {errMsg && <span>{errMsg}</span>}
            </div>
            <div className={styles.row}>
                {children}
            </div>
        </div >
    )
}

InputGroup.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    errMsg: PropTypes.string,
    children: PropTypes.node
}
export default InputGroup