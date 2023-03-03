import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./faStyled.css"
import { InputLabel } from '../../../../../../Components/common/InputLabel.styled';
import { ChangeEventHandler } from 'react';

interface Props {
    onChange: ChangeEventHandler
}

export const AddImage = (props: Props) => {
    return (
        <InputLabel htmlFor="post-image-upload">
            <FontAwesomeIcon className='add-post-fa-icon' icon={faImage} />
            <input
                style={{ display: "none" }}
                type="file"
                id="post-image-upload"
                accept='.jpeg, .png, .jpg'
                onChange={props.onChange}
            />
        </InputLabel>
    )
}
