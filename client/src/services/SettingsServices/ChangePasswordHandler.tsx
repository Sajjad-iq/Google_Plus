import React, { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangePasswordHandler = (setIsActive: any) => {

    const [IsPasswordValid, setIsPasswordValid] = useState(true)
    const [IsAllSectionsFilled, setIsAllSectionsFilled] = useState(true)
    const [PasswordInputValue, setPasswordInputValue] = useState("")
    const [ConformPasswordInputValue, setConformPasswordInputValue] = useState("")

    const OnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordInputValue(e.target.value)
    }
    const OnConformPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConformPasswordInputValue(e.target.value)
    }

    const onSave = async () => {
        let User = await JSON.parse(localStorage.getItem('User') || "");

        if (IsPasswordValid && PasswordInputValue !== "") {
            User.Password = PasswordInputValue
            localStorage.setItem('User', JSON.stringify(User) || "");
            setIsActive(false)
        } else {
            setIsAllSectionsFilled(false)
        }
    }
    return { ConformPasswordInputValue, PasswordInputValue, setIsPasswordValid, OnPasswordChange, OnConformPasswordChange, onSave, IsPasswordValid, IsAllSectionsFilled }
}
