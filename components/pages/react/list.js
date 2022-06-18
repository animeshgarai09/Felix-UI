import { List, ListItem } from "@felix-ui"

import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from "components/footer"
const ListUI = () => {
    return (
        <>
            <p> <code>List</code>  component is used to display list items. It renders a <code>ul</code> element by default.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { List, ListItem } from "react-felix-ui"`}
            </Codeblock>
            <h4>Unordered list</h4>
            <div className={styles.element_container}>
                <List>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </List>
            </div>
            <Codeblock lang="jsx">
                {`<List>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>`}
            </Codeblock>

            <h4>Ordered List</h4>
            <div className={styles.element_container}>
                <List style="number">
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </List>
            </div>
            <Codeblock lang="jsx">
                {`<List style="number">
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>`}
            </Codeblock>
            <Footer currentPage="List" />

        </>
    )
}

export default ListUI
