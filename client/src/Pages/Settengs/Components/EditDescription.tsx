import React, { useContext, useState } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { DescriptionTextField } from '../../../Components/shared/DescriptionTextField'
import { SettingsEditSection } from '../../../Components/shared/SettingsEditSection'
import { SettingsSaveChanges } from '../../../Components/shared/SettingsSaveChanges'
import { GlobalContext } from '../../../Context/GlobalContext'
import { ChangeDescriptionHandler } from '../../../services/SettingsServices/ChangeDescriptionHandler'
import { SingleSectionWrapper } from '../styled/SingleSectionWrapper'

export const EditDescription = () => {
    let User = JSON.parse(localStorage.getItem('User') || "");
    const [isActive, setIsActive] = useState(false)
    const { onSave, OnDescriptionChange } = ChangeDescriptionHandler(setIsActive)

    return (
        <SingleSectionWrapper>
            <SettingsEditSection EditClick={() => setIsActive(!isActive)} SettingName={User.Description === "" ? "Description:" : User.Description} />

            <Column width='100%' padding='0' align='center' style={{ display: isActive ? "flex" : "none" }}>
                <DescriptionTextField
                    IsValidValue={true}
                    onChange={OnDescriptionChange}
                    Rows={3}
                />
                <SettingsSaveChanges
                    OnCloseClick={() => setIsActive(false)}
                    OnSaveClick={onSave}
                />
            </Column>
        </SingleSectionWrapper>
    )
}
