import { MouseEventHandler } from 'react'
import { SendBtn } from '../../../../../../Components/common/SendBtn.styled'
interface Props {
    onClick: MouseEventHandler
}
export const Exit = (props: Props) => {
    return (
        <SendBtn padding='2px' onClick={props.onClick}>X</SendBtn>
    )
}
