import { ChangeEvent, useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export const AddEmailHandler = () => {

    const { IsEmailValid, setIsEmailValid, EmailInputValue, setEmailInputValue } = useContext(AuthContext)

    const OnEmailChange = (e: ChangeEvent<HTMLInputElement>) => {

        let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const Valid = Regex.test(e.target.value)
        setIsEmailValid(Valid)
        setEmailInputValue(e.target.value)
    }


    return { OnEmailChange, IsEmailValid, EmailInputValue }
}
