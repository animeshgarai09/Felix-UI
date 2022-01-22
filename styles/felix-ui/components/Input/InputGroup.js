import styles from './input.module.scss'
const InputGroup = ({ options, children }) => {
    /* 
        options={
            label: 'label',
            id: id,
            err_msg: 'error message for an input'
        }
    */
    const { label, id, err_msg } = options
    return (
        <div className={`${styles.group} ${err_msg ? styles.error : ''}`}>
            {
                <div className={styles.row}>
                    {children}
                </div>
            }

            <div className={styles.info}>
                <label htmlFor={id}>{label}</label>
                {err_msg && <span>{err_msg}</span>}
            </div>
        </div >
    )
}
export default InputGroup