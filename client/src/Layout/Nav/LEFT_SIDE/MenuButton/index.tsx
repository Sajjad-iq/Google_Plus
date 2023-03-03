import { Button } from "../../../../Components/common/Button.styled"
import { MouseEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const MenuButton = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <FontAwesomeIcon className='fa-icon' icon={faBars} />
        </Button>
    )
}
