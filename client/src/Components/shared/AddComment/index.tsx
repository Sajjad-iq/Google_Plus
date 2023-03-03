import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import { CyanButton } from '../../common/CyanButton.styled'
import { TextField } from '../../common/TextField.styled'
import { UserLogo } from '../../common/UserLogo.styled'
import { Column } from '../Column.styled'
import { Row } from '../Row.styled'

interface Props {
    onChange: ChangeEventHandler
    onSubmit: MouseEventHandler
    UserImage: string
    Ref: any
}

export const AddComment = (props: Props) => {
    const [IsActive, setIsActive] = useState(false)
    return (
        <Column width='100%' align='flex-end' padding='5px 10px' style={{ border: "1px solid gray" }}>
            <Row width='100%' padding='10px 0' align='center' >
                <UserLogo src={props.UserImage} loading={"lazy"} alt='comment image label' />

                <TextField ref={props.Ref} onFocus={() => setIsActive(true)} IsValidValue={true} onChange={props.onChange} placeholder="Add Comment..." rows={IsActive ? 2 : 1} style={{ margin: "0", border: "none" }} />
            </Row>

            <CyanButton style={{ display: IsActive ? "flex" : "none" }} onClick={props.onSubmit}>Submit</CyanButton>
        </Column>
    )
}
