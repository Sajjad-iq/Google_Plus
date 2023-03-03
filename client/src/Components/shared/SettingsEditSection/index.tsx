import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Button } from './styled/Button.styled'
import "./styled/style.css"
import { MouseEventHandler } from 'react'
import { Row } from './styled/Row.styled'
import { Article } from './styled/Article.styled'

interface Props {
    SettingName: string
    EditClick: MouseEventHandler
}

export const SettingsEditSection = (props: Props) => {
    return (
        <Row >
            <Article>{props.SettingName}</Article>
            <Button onClick={props.EditClick}>
                <FontAwesomeIcon className='fa-setting-icon' icon={faPen} />
            </Button>
        </Row>
    )
}
