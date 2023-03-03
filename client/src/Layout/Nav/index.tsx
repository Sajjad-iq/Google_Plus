import { SearchFiled } from "./CENTER_SIDE/SearchFiled"
import { LogoAndPage } from "./LEFT_SIDE/Logo_Page"
import { MenuButton } from "./LEFT_SIDE/MenuButton"
import { NavigationButtons } from "./RIGHT_SIDE/NavigationButtons"
import { Section } from "./Section.styled"
import { NavWrapper } from "./NavWrapper"
import React, { MouseEventHandler, useState } from "react"

interface Props {
    MenuButtonHandler: MouseEventHandler
}

export const Nav = React.memo((props: Props) => {
    const [isActive, setISActive] = useState(false)
    const Toggle = () => setISActive(!isActive)

    return (
        <NavWrapper >
            <Section style={{ display: isActive ? "none" : "flex" }} >
                <MenuButton onClick={props.MenuButtonHandler} />
                <LogoAndPage />
            </Section>
            <NavigationButtons SearchButtonOnClick={Toggle} SearchButtonDisplay={isActive ? "none" : "flex"} />

            <SearchFiled setIsActive={setISActive} isActive={isActive} />
        </NavWrapper>
    )
})
