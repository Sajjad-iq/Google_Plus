import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"

export const AddFamilyNameHandler = () => {

    const { IsFamilyNameValid, setFamilyNameValid, setFamilyNameInputValue } = useContext(AuthContext)


    const OnFamilyNameChange = (e: ChangeEvent<HTMLInputElement>) => {

        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)

        if (!Valid) {
            setFamilyNameInputValue(e.target.value)
            setFamilyNameValid(true)
        } else setFamilyNameValid(false)

    }


    return { OnFamilyNameChange, IsFamilyNameValid }
}
