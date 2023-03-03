import { useContext, useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { UserNameInput } from '../../../Components/shared/UserNameInputs'
import { GlobalContext } from '../../../Context/GlobalContext'
import { ChangeUserNameHandler } from '../../../services/SettingsServices/ChangeUserNameHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'

export const EditUserNameAndFamilyName = () => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const [isActive, setIsActive] = useState(false)
    const { OnUserNameChange, IsUserNameValid, OnFamilyNameChange, IsFamilyNameValid, onSave } = ChangeUserNameHandler(setIsActive)

    return (
        <SingleSectionWrapper>
            <SettingsEditSection EditClick={() => setIsActive(!isActive)} SettingName={`User Name:  ${User.UserName} ${User.FamilyName}`} />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <UserNameInput
                    OnUserNameChange={OnUserNameChange}
                    IsUserNameValid={IsUserNameValid}
                    OnFamilyNameChange={OnFamilyNameChange}
                    IsFamilyNameValid={IsFamilyNameValid}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>


        </SingleSectionWrapper>
    )
}
