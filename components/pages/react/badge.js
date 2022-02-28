import { Badge, IconBadge } from '@felix-ui'
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from 'components/footer'
import { HiBell } from 'react-icons/hi'
const BadgeUI = () => {
    return (
        <>
            <p className={styles.des}>Badges are used to highlight an item's status for quick recognition.</p>
            <h4>Import</h4>
            <p >Felix UI exports 2 badge-related components:</p>
            <ul >
                <li><code >Badge</code>: The tag to represent the status.</li>
                <li><code>IconBadge</code>: A wrapper to add badges to icons.</li>
            </ul>
            <Codeblock lang="jsx">
                {`import { Badge, IconBadge } from '@felix-ui'`}
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
                <Badge options={{ color: 'primary' }}>new</Badge>
                <Badge options={{ color: 'green' }}>Added</Badge>
                <Badge options={{ color: 'red' }}>removed</Badge>
                <Badge options={{ color: 'yellow' }}>changed</Badge>
            </div>

            <Codeblock lang="jsx">
                {`<Badge options={{ color: 'primary' }}>new</Badge>
<Badge options={{ color: 'green' }}>Added</Badge>
<Badge options={{ color: 'red' }}>removed</Badge>
<Badge options={{ color: 'yellow' }}>changed</Badge>`}
            </Codeblock>
            <h4>Badge variant</h4>
            <p>Badge component comes with 3 different variant. Solid is set to default. pass <code>outline</code>, <code>rounded</code> or both in a array via <code>variant</code> prop.</p>
            {/* <Badge options={{ color: 'primary', variant: 'outline' }}>out of stock</Badge> */}
            <div className={`${styles.element_container} ${styles.block}`}>
                <Badge options={{ color: 'primary', variant: 'outline' }}>new</Badge>
                <Badge options={{ color: 'green', variant: 'rounded' }}>Added</Badge>
                <Badge options={{ color: 'red', variant: ['outline', 'rounded'] }}>removed</Badge>
            </div>
            <Codeblock lang="jsx">
                {`<Badge options={{ color: 'primary', variant: 'outline' }}>new</Badge>
<Badge options={{ color: 'green', variant: 'rounded' }}>Added</Badge>
<Badge options={{ color: 'red', variant: ['outline', 'rounded'] }}>removed</Badge>`}
            </Codeblock>
            <h4>Icon badge</h4>
            <p>Icon badge component can be used for showing number for any action. pass int number to <code>number</code> prop.</p>
            <div className={`${styles.element_container} ${styles.block}`}>
                <IconBadge options={{ icon: <HiBell /> }} />
                <IconBadge options={{ icon: <HiBell />, number: 10 }} />
                <IconBadge options={{ icon: <HiBell />, number: 248 }} />
            </div>

            <Codeblock lang="jsx">
                {`<IconBadge options={{ icon: <HiBell /> }} />
<IconBadge options={{ icon: <HiBell />, number: 10 }} />
<IconBadge options={{ icon: <HiBell />, number: 248 }} />`}
            </Codeblock>
            <Footer currentPage='Badge' />

        </>
    )
}

export default BadgeUI
