import React, { ChangeEvent, useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export const EmailAndPasswordStateHandlers = () => {
    const { setSignInEmailInputValue, setSignInPasswordInputValue, SignInEmailAndPasswordValid } = useContext(AuthContext)

    const OnEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => setSignInEmailInputValue(e.target.value)
    const OnPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => setSignInPasswordInputValue(e.target.value)

    return { OnEmailInputChange, OnPasswordInputChange, SignInEmailAndPasswordValid }
}
