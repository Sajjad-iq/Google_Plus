import { ChangeEventHandler } from "react"
import { FlexSection } from "../../common/FlexSection.styled"
import { Input } from "../../common/Input.styled"
import { Column } from "../Column.styled"
import { RedFlag } from "../RedFlag"

interface Props {
    OnUserNameChange: ChangeEventHandler<HTMLInputElement>
    IsUserNameValid: boolean
    OnFamilyNameChange: ChangeEventHandler<HTMLInputElement>
    IsFamilyNameValid: boolean
}

export const UserNameInput = (props: Props) => {

    return (
        <Column width='100%' padding='0' align='flex-start'>
            <FlexSection >
                <Input name="user-name" IsValidValue={props.IsUserNameValid} onChange={props.OnUserNameChange} placeholder="User Name" required />
                <Input name="family-name" IsValidValue={props.IsFamilyNameValid} onChange={props.OnFamilyNameChange} placeholder="Family Name" required />
            </FlexSection>

            <RedFlag RedFlagMessage="Make sure not to add any symbols" display={props.IsUserNameValid && props.IsFamilyNameValid ? "none" : "flex"} />
        </Column>
    )
}
