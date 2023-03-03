import React, { ChangeEventHandler } from 'react'
import { TextField } from '../../common/TextField.styled'

interface Props {
    IsValidValue: boolean
    onChange: ChangeEventHandler
    Rows: number
}

export const DescriptionTextField = (props: Props) => {
    return (
        <TextField IsValidValue={props.IsValidValue} onChange={props.onChange} placeholder="Write something.." rows={props.Rows} />
    )
}
