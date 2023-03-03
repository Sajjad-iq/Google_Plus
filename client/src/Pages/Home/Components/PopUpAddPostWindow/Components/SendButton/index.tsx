import { MouseEventHandler } from 'react'
import { SendBtn } from '../../../../../../Components/common/SendBtn.styled'

interface Props {
    Click: MouseEventHandler<HTMLButtonElement>
}
export const SendButton = (props: Props) => {
    return (
        <SendBtn onClick={props.Click} padding='7px 12px'>Post</SendBtn>
    )
}
