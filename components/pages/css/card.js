// import { ProductCard } from "@felix-ui"
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'

const CardUI = () => {
    return (
        <>
            <p className={styles.des}>Felix UI comes with easy to use highly customizable card component for product and profile view.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { ProductCard } from "@felix-ui"`}
            </Codeblock>

        </>
    )
}

export default CardUI
