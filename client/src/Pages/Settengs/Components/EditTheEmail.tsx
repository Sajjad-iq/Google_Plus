import React, { useContext, useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { EmailInput } from '../../../Components/shared/EmailInput'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { GlobalContext } from '../../../Context/GlobalContext'
import { ChangeEmailHandler } from '../../../services/SettingsServices/ChangeEmailHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'

export const EditTheEmail = () => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const [isActive, setIsActive] = useState(false)
    const { OnEmailChange, IsEmailValid, onSave } = ChangeEmailHandler(setIsActive)

    return (

        <SingleSectionWrapper>

            <SettingsEditSection EditClick={() => setIsActive(!isActive)} SettingName={`Email:  ${User.Email}`} />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <EmailInput
                    OnEmailChange={OnEmailChange}
                    IsEmailValid={IsEmailValid}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>

        </SingleSectionWrapper>
    )
}
