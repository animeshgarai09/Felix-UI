import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@felix-ui"

import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { HiMenu } from "react-icons/hi"
import { MdPowerSettingsNew } from "react-icons/md"
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from "components/footer"

const MenuUI = () => {
    return (
        <>
            <p>An accessible dropdown menu for the common dropdown menu button design pattern. <code>Menu</code> uses roving tabIndex for focus management.</p>
            <h4>Import</h4>
            <p>Felix UI exports 4 components for rendering menus:</p>
            <ul>
                <li><code>Menu</code>: The wrapper component provides context and state.</li>
                <li><code>MenuList</code>: The wrapper for the menu items.Must be a direct child of <code>Menu</code>.</li>
                <li><code>MenuButton</code>: The trigger for the menu list. Must be a direct child of <code>Menu</code>.</li>
                <li><code>MenuItem</code>: The trigger that handles menu selection. Must be a direct child of a <code>MenuList</code>.</li>
            </ul>
            <Codeblock lang="jsx">
                {`import { 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem 
} from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Menu>
                    <MenuButton>Menu</MenuButton>
                    <MenuList>
                        <MenuItem> Save to playlist</MenuItem>
                        <MenuItem>Share</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <Codeblock lang="jsx">
                {`<Menu>
    <MenuButton>Menu</MenuButton>
    <MenuList>
        <MenuItem> Save to playlist</MenuItem>
        <MenuItem>Share</MenuItem>
    </MenuList>
</Menu>`}
            </Codeblock>
            <h4>Menu placement</h4>
            <p>You can configure placement of <code>MenuList</code> as required through <code>menuPlacement</code> props.</p>
            <p>Below is the list of position which can be configured:</p>
            <p>
                <code>auto</code>, <code>auto-start</code>, <code>auto-end</code>, <code>top</code>, <code>top-start</code>, <code>top-bottom</code>, <code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>right</code>, <code>right-start</code>, <code>right-end</code>, <code>left</code>, <code>left-start</code>, <code>left-end</code>
            </p>
            <div className={styles.element_container}>
                <Menu menuPlacement="top-start">
                    <MenuButton>Menu</MenuButton>
                    <MenuList>
                        <MenuItem> Save to playlist</MenuItem>
                        <MenuItem>Share</MenuItem>
                    </MenuList>
                </Menu>
                <Menu menuPlacement="bottom-start">
                    <MenuButton>Menu</MenuButton>
                    <MenuList>
                        <MenuItem> Save to playlist</MenuItem>
                        <MenuItem>Share</MenuItem>
                    </MenuList>
                </Menu>
                <Menu menuPlacement="left-start">
                    <MenuButton>Menu</MenuButton>
                    <MenuList>
                        <MenuItem> Save to playlist</MenuItem>
                        <MenuItem>Share</MenuItem>
                    </MenuList>
                </Menu>
                <Menu menuPlacement="right-start">
                    <MenuButton>Menu</MenuButton>
                    <MenuList>
                        <MenuItem> Save to playlist</MenuItem>
                        <MenuItem>Share</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <Codeblock lang="jsx">
                {`<Menu menuPlacement="top-start">
    <MenuButton>Menu</MenuButton>
    <MenuList>
        ...
    </MenuList>
</Menu>
<Menu menuPlacement="bottom-start">
    <MenuButton>Menu</MenuButton>
    <MenuList>
        ...
    </MenuList>
</Menu>
<Menu menuPlacement="left-start">
    <MenuButton>Menu</MenuButton>
    <MenuList>
        ...
    </MenuList>
</Menu>
<Menu menuPlacement="right-start">
    <MenuButton>Menu</MenuButton>
    <MenuList>
        ...
    </MenuList>
</Menu>`}
            </Codeblock>
            <h4>Add icons</h4>
            <p>Icons can be easily added with <code>rightIcon</code>, <code>leftIcon</code> respectively for right and left. Icons should be render able component.</p>
            <div className={styles.element_container}>
                <Menu>
                    <MenuButton rightIcon={<FiChevronDown />}>Menu</MenuButton>
                    <MenuList>
                        <MenuItem leftIcon={<MdPowerSettingsNew />} > Save to playlist</MenuItem>
                        <MenuItem leftIcon={<MdPowerSettingsNew />} >Share</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <Codeblock lang="jsx">
                {`<Menu>
    <MenuButton rightIcon={<FiChevronDown />}>Menu</MenuButton>
    <MenuList>
        <MenuItem leftIcon={<MdPowerSettingsNew />} > Save to playlist</MenuItem>
        <MenuItem leftIcon={<MdPowerSettingsNew />} >Share</MenuItem>
    </MenuList>
</Menu>`}
            </Codeblock>

            <h4>Icon Button</h4>
            <p><code>MenuButton</code> component can be rendered as <code>IconButton</code> with <code>as</code> prop. If <code>MenuButton</code> rendered as IconButton it will accept all the props from <code>IconButton</code>.</p>
            <div className={styles.element_container}>
                <Menu>
                    <MenuButton as="IconButton" icon={<HiMenu />} />
                    <MenuList>
                        <MenuItem leftIcon={<MdPowerSettingsNew />} > Save to playlist</MenuItem>
                        <MenuItem leftIcon={<MdPowerSettingsNew />} >Share</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <Codeblock lang="jsx">
                {`<Menu>
    <MenuButton as="IconButton" icon={<HiMenu />} />
    <MenuList>
        <MenuItem leftIcon={<MdPowerSettingsNew />} > Save to playlist</MenuItem>
        <MenuItem leftIcon={<MdPowerSettingsNew />} >Share</MenuItem>
    </MenuList>
</Menu>`}
            </Codeblock>
            <Footer currentPage="Menu" />
        </>
    )
}

export default MenuUI
