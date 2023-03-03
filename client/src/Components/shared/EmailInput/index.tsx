import { ChangeEventHandler } from 'react'
import { FlexSection } from '../../common/FlexSection.styled'
import { Input } from '../../common/Input.styled'
import { RedFlag } from '../RedFlag'

interface Props {
    OnEmailChange: ChangeEventHandler<HTMLInputElement>
    IsEmailValid: boolean
}
export const EmailInput = (props: Props) => {

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <FlexSection>
                <Input onChange={props.OnEmailChange} name='add-email' IsValidValue={props.IsEmailValid} type={"email"} placeholder="Email" required />
            </FlexSection>
            <RedFlag display={props.IsEmailValid ? "none" : "flex"} RedFlagMessage={'you might be using an existing email or an invalid email'} />
        </div>

    )
}
