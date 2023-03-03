import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { InputLabel } from '../../common/InputLabel.styled';
import "./faStyled.css"
export const AddImage = () => {
    return (
        <InputLabel htmlFor="file">
            <FontAwesomeIcon className='add-post-fa-icon' icon={faImage} />
            <input style={{ display: "none" }} type="file" id="file" />
        </InputLabel>
    )
}
