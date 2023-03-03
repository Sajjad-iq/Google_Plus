import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'
import { Colors } from '../../../../assets/Colors'
import { PostButton } from '../../../common/PostButton.styled'


interface Props {
    onClick: MouseEventHandler
}
export const ImageButton = (props: Props) => {
    return (
        <PostButton
            color={Colors.Secoundry.gray}
            backgroundColor={Colors.Primary.Lightgray}
            onClick={props.onClick}
        >
            <FontAwesomeIcon className='fa-Post-icon' icon={faCamera} />
        </PostButton>)
}
