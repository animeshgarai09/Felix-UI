import styles from '../../styles/documentation.module.scss'
import { Avatar, AvatarGroup } from '@felix-ui'
import { Codeblock } from '../utils'
import Footer from '../footer/footer'
const AvatarUI = () => {
    return (
        <>
            <h1 >Avatar</h1>
            <p>The <code>Avatar</code> component is used to represent a user, and displays the profile
                picture, initials or fallback icon.</p>

            <h4>Import</h4>
            <p >Felix UI exports 2 avatar-related components:</p>
            <ul >
                <li ><code >Avatar</code>: The image that represents the user.</li>
                <li ><code>AvatarGroup</code>: A wrapper to stack multiple Avatars together.</li>
            </ul>

            < Codeblock>

                {`import { Avatar, AvatarGroup } from '@felix-ui'`}
            </ Codeblock>

            <h4>Usage</h4>


            <div className={styles.element_container}>
                <Avatar options={{ name: 'Dan Abrahmov', src: '/images/1.jpeg' }} />
                <Avatar options={{ name: 'Kola Tioluwani', src: '/images/2.jpeg' }} />
                <Avatar options={{ name: 'Kent Dodds' }} />
                <Avatar options={{ name: 'Ryan Florence', src: '/images/3.jpg' }} />
                <Avatar options={{ name: 'Christian Nwamba', src: '/images/4.jpg' }} />
                <Avatar options={{ name: 'Segun Adebayo', src: '/images/5.jpeg' }} />

            </div>

            < Codeblock>

                {`<Avatar options={{ name: 'Dan Abrahmov', src: '/images/1.jpeg' }} />
<Avatar options={{ name: 'Kola Tioluwani', src: '/images/2.jpeg' }} />
<Avatar options={{ name: 'Kent Dodds' }} />
<Avatar options={{ name: 'Ryan Florence', src: '/images/3.jpg' }} />
<Avatar options={{ name: 'Christian Nwamba', src: '/images/4.jpg' }} />
<Avatar options={{ name: 'Segun Adebayo', src: '/images/5.jpeg' }} />`}
            </ Codeblock>

            <h4>Avatar Sizes</h4>
            <p >The <code >Avatar</code> component comes in 6 sizes.</p>

            <div className={styles.element_container}>
                <Avatar options={{
                    name: 'Dan Abrahmov',
                    src: '/images/1.jpeg',
                    size: 'xs'
                }} />
                <Avatar options={{
                    name: 'Kola Tioluwani',
                    src: '/images/2.jpeg',
                    size: 'sm'
                }} />
                <Avatar options={{
                    name: 'Kent Dodds',
                    size: 'md'
                }} />
                <Avatar options={{
                    name: 'Ryan Florence',
                    src: '/images/3.jpg',
                    size: 'lg'
                }} />
                <Avatar options={{
                    name: 'Christian Nwamba',
                    src: '/images/4.jpg',
                    size: 'xl'
                }} />
                <Avatar options={{
                    name: 'Segun Adebayo',
                    src: '/images/5.jpeg',
                    size: 'xxl'
                }} />

            </div>

            < Codeblock>

                {`<Avatar options={{
    name: 'Dan Abrahmov',
    src: '/images/1.jpeg',
    size: 'xs'
}} />
<Avatar options={{
    name: 'Kola Tioluwani',
    src: '/images/2.jpeg',
    size: 'sm'
}} />
<Avatar options={{
    name: 'Kent Dodds',
    size: 'md'
}} />
<Avatar options={{
    name: 'Ryan Florence',
    src: '/images/3.jpg',
    size: 'lg'
}} />
<Avatar options={{
    name: 'Christian Nwamba',
    src: '/images/4.jpg',
    size: 'xl'
}} />
<Avatar options={{
    name: 'Segun Adebayo',
    src: '/images/5.jpeg',
    size: 'xxl'
}} />`}
            </ Codeblock>


            <h4>Avatar with badge</h4>
            <p >In some products, you might need to show a badge on the right corner of the
                avatar. We call this a <strong >badge</strong>. Here's an example that shows if the user is
                online:</p>

            <div className={styles.element_container}>
                <Avatar options={{
                    name: 'Dan Abrahmov',
                    src: '/images/1.jpeg',
                    badge: 'green'
                }} />
                <Avatar options={{
                    name: 'Kola Tioluwani',
                    src: '/images/2.jpeg',
                    badge: 'red'
                }} />
                <Avatar options={{
                    name: 'Kola Tioluwani',
                    src: '/images/2.jpeg',
                    badge: 'yellow'
                }} />
            </div>

            < Codeblock>
                {`<Avatar options={{
    name: 'Dan Abrahmov',
    src: '/images/1.jpeg',
    badge: 'green'
}} />
<Avatar options={{
    name: 'Kola Tioluwani',
    src: '/images/2.jpeg',
    badge: 'red'
}} />
<Avatar options={{
    name: 'Kola Tioluwani',
    src: '/images/2.jpeg',
    badge: 'yellow'
}} />`}
            </ Codeblock>
            <h4>Avatar Group</h4>
            <p >In some cases, you might need to stack avatars as a group. Use the <code >AvatarGroup</code> component.</p>
            <ul>
                <li>To limit the amount of avatars to show, use the <code>show</code> prop. It'll truncate the
                    avatars and show a "+X" label (where X is the remaining avatars).</li>
                <li>To size all the avatars equally, pass the <code>size</code> prop.</li>
                <li>To show a maximum number without rendering the <code> Avatar</code> component use <code>max</code> key.</li>
            </ul>

            <div className={styles.element_container}>
                <AvatarGroup options={{
                    size: 'md',
                    show: 5,
                    max: 76,
                }}>
                    <Avatar options={{ name: 'Dan Abrahmov', src: '/images/1.jpeg' }} />
                    <Avatar options={{ name: 'Kola Tioluwani', src: '/images/2.jpeg' }} />
                    <Avatar options={{ name: 'Kent Dodds' }} />
                    <Avatar options={{ name: 'Ryan Florence', src: '/images/3.jpg' }} />
                    <Avatar options={{ name: 'Christian Nwamba', src: '/images/4.jpg' }} />
                    <Avatar options={{ name: 'Segun Adebayo', src: '/images/5.jpeg' }} />

                </AvatarGroup>
            </div>
            < Codeblock>
                {`<AvatarGroup options={{
    size: 'md',
    show: 4,
    max:100
}}>
    <Avatar options={{ name: 'Dan Abrahmov', src: '/images/1.jpeg' }} />
    <Avatar options={{ name: 'Kola Tioluwani', src: '/images/2.jpeg' }} />
    <Avatar options={{ name: 'Kent Dodds' }} />
    <Avatar options={{ name: 'Ryan Florence', src: '/images/3.jpg' }} />
    <Avatar options={{ name: 'Christian Nwamba', src: '/images/4.jpg' }} />
    <Avatar options={{ name: 'Segun Adebayo', src: '/images/5.jpeg' }} />

</AvatarGroup>`}
            </ Codeblock>

            <Footer previous={['Alert', '/documentation/alert']} next={['Badge', '/documentation/badge']} />
        </>
    )
}

export default AvatarUI
