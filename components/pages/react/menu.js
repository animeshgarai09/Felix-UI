import { Menu, MenuButton, MenuList, MenuItem } from "@felix-ui"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { DiChrome } from "react-icons/Di"
const MenuUI = () => {
    return (
        <div>
            <Menu>
                <MenuButton rightIcon={<FiChevronDown />}>Menu</MenuButton>
                <MenuList>
                    <MenuItem leftIcon={<DiChrome />} > Save to playlist</MenuItem>
                    <MenuItem leftIcon={<DiChrome />} >Share</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default MenuUI
