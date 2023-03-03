import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"

export const AddPasswordHandler = () => {

    const { setPasswordInputValue } = useContext(AuthContext)

    const OnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordInputValue(e.target.value)
    }


    return { OnPasswordChange }
}
