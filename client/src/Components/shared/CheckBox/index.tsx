import { CheckInput } from "../../common/CheckInput.styled"
import { Label } from "../../common/Label.styled"
import { P } from "../Post/styled/P.styled"

interface Props {
    IsChecked: boolean
    setIsChecked: any
}
export const CheckBox = (props: Props) => {
    return (
        <Label>
            <CheckInput type={"checkbox"} onChange={() => props.setIsChecked(!props.IsChecked)} />
            <P>Show Password</P>
        </Label>
    )
}
