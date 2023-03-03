import { MouseEventHandler } from "react"
import UserIcon from "../../../assets/ICONS/ProfileImg.jpg"
import { UserLogo } from "../../common/UserLogo.styled"
import { Row } from "../Row.styled"
import { ImageButton } from "./ImageButton"
import { PostInputComponent } from "./PostInput"
import { ToggleRow } from "./ToggleRow.styled"

interface Props {
    OpenFunction: MouseEventHandler<HTMLButtonElement>
    IsActive: boolean
}

export const AddPostComponent = (props: Props) => {
    let User = JSON.parse(localStorage.getItem('User') || "");

    return (
        <ToggleRow display={props.IsActive ? "flex" : "none"} width="100%" align="space-between" padding="10px">

            <Row padding="0" width="80%" align="flex-start">
                <UserLogo src={User.ProfilePicture === "" ? UserIcon : User.ProfilePicture} alt="user" />
                <PostInputComponent onFocus={props.OpenFunction} />
            </Row>

            <ImageButton onClick={props.OpenFunction} />
        </ToggleRow>

    )
}
