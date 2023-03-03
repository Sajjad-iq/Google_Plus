import React from 'react'
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { RedFlagComment } from '../../common/RedFlagComment.styled';
import { Label } from '../../common/Label.styled';

interface Props {
    display: string
    RedFlagMessage: string
}
export const RedFlag = (props: Props) => {
    return (
        <Label style={{ display: props.display }}>
            <FontAwesomeIcon className='fa-error' icon={faCircleExclamation} />
            <RedFlagComment>{props.RedFlagMessage}</RedFlagComment>
        </Label>
    )
}
