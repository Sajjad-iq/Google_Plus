import { ChangeEvent, useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export const AddUserNameHandler = () => {

    const { IsUserNameValid, setIsUserNameValid, setUserNameInputValue } = useContext(AuthContext)

    const OnUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)

        if (!Valid) {
            setUserNameInputValue(e.target.value)
            setIsUserNameValid(true)
        } else setIsUserNameValid(false)
    }


    return { OnUserNameChange, IsUserNameValid }
}
