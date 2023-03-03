import React from 'react'
import { CyanButton } from '../../Components/common/CyanButton.styled'
import { H2 } from '../../Components/common/H1.styled'
import { Column } from '../../Components/shared/Column.styled'
import { Label } from '../../Components/shared/Label'
import { Row } from '../../Components/shared/Row.styled'
import { EditDescription } from './Components/EditDescription'
import { EditTheEmail } from './Components/EditTheEmail'
import { EditThePassword } from './Components/EditThePassword'
import { EditUserNameAndFamilyName } from './Components/EditUserNameAndFamilyName'
import { SettingsWrapper } from './styled/SettingsWrapper'
import { SaveChanges } from '../../services/SettingsServices/SaveChanges'
import { BackButton } from '../../Components/shared/BackButton'
import { useNavigate } from 'react-router-dom'
import { FloatRow } from '../../Components/shared/FloatRow.styled'
import { EditProfileImage } from './Components/EditProfileImage'
import { EditProfileCover } from './Components/EditProfileCover'


export const Settings = () => {

    const { Save } = SaveChanges()
    const Navigate = useNavigate()

    const LogOut = async () => {
        let User = await JSON.parse(localStorage.getItem('User') || "");
        User.Email = ""
        User.Password = ""
        localStorage.setItem('User', JSON.stringify(User) || "");
        Navigate("/SignIn")

    }

    return (
        <SettingsWrapper>
            <FloatRow width='100%' padding='10px' align='flex-start'>
                <BackButton onClick={() => Navigate("/")} />
            </FloatRow>
            <Label ForSignIn={false} Header='Edit your Account' />

            <Column width='100%' padding='20px 0' align='flex-start'>
                <H2>Profile Settings</H2>
                <Row width='100%' padding='0' align='space-between'>
                    <EditProfileImage />
                    <EditProfileCover />
                </Row>
                <EditDescription />
            </Column>

            <Column width='100%' padding='20px 0' align='flex-start'>
                <H2>Accounts Settings</H2>
                <EditUserNameAndFamilyName />
                <EditTheEmail />
                <EditThePassword />
            </Column>

            <Row width='100%' padding='10px 0' align='space-between'>
                <CyanButton onClick={LogOut} >Log Out</CyanButton>
                <CyanButton onClick={Save} >Save</CyanButton>

            </Row>
        </SettingsWrapper>
    )
}

