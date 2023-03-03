import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colors } from '../../../../assets/Colors'
import { Count } from '../../../../Components/common/Count.styled'
import { PostButton } from '../../../../Components/common/PostButton.styled'
import { Row } from '../../../../Components/shared/Row.styled'

export const Share = () => {
    return (
        <Row padding='0' width='auto' align='center'>
            <PostButton
                color={Colors.Secoundry.gray}
                backgroundColor={Colors.Primary.Lightgray}
            >
                <FontAwesomeIcon className='fa-Post-icon' icon={faShareNodes} />
            </PostButton>

            <Count>0</Count>
        </Row>
    )
}
