import React, { MouseEventHandler } from 'react'
import { Button } from '../../common/Button.styled'
import { Row } from '../Row.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

interface Props {
  OnSaveClick: MouseEventHandler
  OnCloseClick: MouseEventHandler
}
export const SettingsSaveChanges = (props: Props) => {
  return (

    <Row width='100%' padding='0' align='flex-end' style={{ background: "none" }}>
      <Button style={{ color: "black" }} onClick={props.OnSaveClick}>
        <FontAwesomeIcon className='fa-change-setting-icon' icon={faCheck} />
      </Button>

      <Button style={{ color: "black", margin: "10px" }} onClick={props.OnCloseClick}>
        <FontAwesomeIcon className='fa-change-setting-icon' icon={faXmark} />
      </Button>
    </Row>
  )
}
