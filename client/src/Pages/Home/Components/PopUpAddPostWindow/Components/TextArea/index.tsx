import { ChangeEventHandler } from "react"
import { TextAreaComponent } from "./TextArea.styled"
interface Props {
    onChange: ChangeEventHandler
}
export const TextArea = (props: Props) => {
    return (
        <TextAreaComponent onChange={props.onChange} placeholder="Write something.." rows={8} required />
    )
}
