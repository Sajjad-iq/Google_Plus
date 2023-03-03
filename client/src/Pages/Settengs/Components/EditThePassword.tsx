import React, { useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { PasswordInputs } from '../../../Components/shared/PasswordInputs'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { ChangePasswordHandler } from '../../../services/SettingsServices/ChangePasswordHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'

export const EditThePassword = () => {

    const [isActive, setIsActive] = useState(false)
    const { ConformPasswordInputValue, PasswordInputValue, setIsPasswordValid, OnPasswordChange, OnConformPasswordChange, onSave, IsPasswordValid, IsAllSectionsFilled } = ChangePasswordHandler(setIsActive)

    return (
        <SingleSectionWrapper>
            <SettingsEditSection EditClick={() => setIsActive(!isActive)} SettingName={`Password: `} />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <PasswordInputs
                    OnPasswordChange={OnPasswordChange}
                    OnConformPasswordChange={OnConformPasswordChange}
                    IsAllSectionsFilled={IsAllSectionsFilled}
                    IsConformPasswordValid={IsPasswordValid}
                    UserConformPasswordInputValue={ConformPasswordInputValue}
                    UserPasswordInputValue={PasswordInputValue}
                    setIsConformPasswordValid={setIsPasswordValid}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>
        </SingleSectionWrapper>
    )
}
