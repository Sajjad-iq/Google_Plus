import { MouseEventHandler } from 'react'
import { Button } from '../../../Pages/Auth/styled/Button.styled'
import { Row } from '../Row.styled'
import { TextLink } from '../TextLink'

interface Props {
    SubmitButtonName: string
    SubmitButtonClick: MouseEventHandler
    TextLinkName: string
    TextLinkPath: string
}
export const SubmitSection = (props: Props) => {
    return (
        <Row align='space-between' padding='0' width='100%'>
            <TextLink To={props.TextLinkPath} Text={props.TextLinkName} />
            <Button onClick={props.SubmitButtonClick}>{props.SubmitButtonName}</Button>
        </Row>
    )
}
