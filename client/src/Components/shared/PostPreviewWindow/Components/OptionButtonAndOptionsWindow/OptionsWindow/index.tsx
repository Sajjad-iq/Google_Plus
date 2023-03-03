import React from 'react'
import { DeletePost } from '../../../../../../services/PostsServices/DeletePost'
import { Button } from '../styled/Button.styled'
import { ToggleColumn } from '../styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
    data: any
}
export const OptionsWindow = (props: Props) => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const { DeletePostHandler } = DeletePost()

    return (
        <ToggleColumn display={props.IsActive ? "none" : "flex"} width='fit-content' align='center' padding='unset'>

            <Button style={{ display: props.data.PostOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { DeletePostHandler(props.data) }}
                isLastOne={false}>
                Delete
            </Button>

            <Button isLastOne={false}>Mute</Button>
            <Button style={{ display: props.data.PostOwnerId == User._id ? "none" : "flex" }} isLastOne={true}>Report</Button>
        </ToggleColumn>

    )
}
