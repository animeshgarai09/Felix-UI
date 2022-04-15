import { Menu, MenuButton, MenuList, MenuItem } from "@felix-ui"
import { useState } from "react"

const MenuUI = () => {
    return (
        <div>
            <Menu>
                <MenuButton>Menu</MenuButton>
                <MenuList>
                    <MenuItem> Save to playlist</MenuItem>
                    <MenuItem>Share</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default MenuUI
