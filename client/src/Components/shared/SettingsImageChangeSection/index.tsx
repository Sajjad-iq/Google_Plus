import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Button } from './styled/Button.styled'
import { Image } from './styled/Image.styled'
import "./styled/style.css"
import { Row } from './styled/Row.styled'
import { InputLabel } from '../../common/InputLabel.styled'

interface Props {
    ImageSrc: string
    FileChange: any
    id: string
}

export const SettingsImageChangeSection = (props: Props) => {
    return (
        <Row >
            <Image key={props.id} src={props.ImageSrc} alt="profile img" />

            <InputLabel onChange={props.FileChange} htmlFor={props.id}>
                <FontAwesomeIcon className='fa-setting-icon' icon={faPen} />
                <input
                    id={props.id}
                    accept='.jpeg, .png, .jpg'
                    style={{ display: "none" }}
                    type="file"
                />
            </InputLabel>
        </Row>
    )
}
