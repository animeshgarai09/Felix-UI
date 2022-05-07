import { Menu, MenuButton, MenuList, MenuItem } from "@felix-ui"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { MdPowerSettingsNew } from "react-icons/md"
const MenuUI = () => {
    return (
        <div>
            <Menu>
                <MenuButton rightIcon={<FiChevronDown />}>Menu</MenuButton>
                <MenuList>
                    <MenuItem leftIcon={<MdPowerSettingsNew />} > Save to playlist</MenuItem>
                    <MenuItem leftIcon={<MdPowerSettingsNew />} >Share</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default MenuUI
