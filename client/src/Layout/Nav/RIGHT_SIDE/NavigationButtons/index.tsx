import { SearchButton } from "./SearchButton"
import { Wrapper } from "./Wrapper.styled"
import { NavButton } from "../../../../Components/shared/NavButton";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface Props {
    SearchButtonDisplay: string
    SearchButtonOnClick: MouseEventHandler
}

export const NavigationButtons = (props: Props) => {
    return (
        <Wrapper>
            <SearchButton onClick={props.SearchButtonOnClick} display={props.SearchButtonDisplay} />
            <div style={{ display: window.innerWidth >= 1024 ? "flex" : "none" }}>
                <NavButton CLass='NAV' Name='' To='/Notifications' ICON={faBell} />
            </div>
        </Wrapper>
    )
}
