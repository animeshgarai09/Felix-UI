import { Badge } from '@felix-ui'
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from 'components/footer'
import { HiBell } from 'react-icons/hi'
const BadgeUI = () => {
    return (
        <>
            <p className={styles.des}>Badges are used to highlight an item's status for quick recognition.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { Badge } from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <div className={`${styles.element_container} ${styles.block}`}>
                <Badge>default</Badge>
            </div>
            <Codeblock lang="jsx">
                {`<Badge>default</Badge>`}
            </Codeblock>
            <h4>Badge Color</h4>
            <p>Badge comes with 5 different colors. default is set to gray.</p>
            <div className={`${styles.element_container} ${styles.block}`}>
                <Badge>default</Badge>
                <Badge color='primary'>new</Badge>
                <Badge color='green'>Added</Badge>
                <Badge color='red'>removed</Badge>
                <Badge color='yellow'>changed</Badge>
            </div>

            <Codeblock lang="jsx">
                {`<Badge>default</Badge>
<Badge color='primary'>new</Badge>
<Badge color='green'>Added</Badge>
<Badge color='red'>removed</Badge>
<Badge color='yellow'>changed</Badge>`}
            </Codeblock>
            <h4>Badge variant</h4>
            <p>Badge component comes with 3 different variant. Solid is set to default. pass <code>outline</code>, <code>rounded</code> or both in a array via <code>variant</code> prop.</p>
            {/* <Badge options={{ color: 'primary', variant: 'outline' }}>out of stock</Badge> */}
            <div className={`${styles.element_container} ${styles.block}`}>
                <Badge color='primary' variant='outline'>new</Badge>
                <Badge color='green' variant='round'>Added</Badge>
                <Badge color='red' variant={['outline', 'round']}>removed</Badge>
            </div>
            <Codeblock lang="jsx">
                {`<Badge color= 'primary' variant= 'outline'>new</Badge>
<Badge color= 'green' variant= 'rounded'>Added</Badge>
<Badge color= 'red' variant= {['outline', 'rounded'] }>removed</Badge>`}
            </Codeblock>
            <Footer currentPage='Badge' />

        </>
    )
}

export default BadgeUI
