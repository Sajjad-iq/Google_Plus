import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../../../assets/GlobalStyles/style.css"
import { OptionsWindow } from './OptionsWindow'
import { useState } from 'react'
import { Button } from '../../../../Components/common/Button.styled'
import { FloatRow } from '../../../../Components/shared/FloatRow.styled'

export const OptionButtonAndOptionsWindow = () => {
    const [IsActive, setIsActive] = useState(false)
    return (
        <FloatRow width='fit-content' align='flex-start' padding='10px'>
            <Button onClick={() => setIsActive(!IsActive)}>
                <FontAwesomeIcon className='post-fa-icon' icon={faEllipsisVertical} />
            </Button>
            <OptionsWindow IsActive={IsActive} />
        </FloatRow>
    )
}
