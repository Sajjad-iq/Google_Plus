import { ChangeEvent, useState } from "react"


export const ChangeUserNameHandler = (setIsActive: any) => {

    const [UserNameInputValue, setUserNameInputValue] = useState("")
    const [IsUserNameValid, setIsUserNameValid] = useState(true)
    const [FamilyNameInputValue, setFamilyNameInputValue] = useState("")
    const [IsFamilyNameValid, setIsFamilyNameValid] = useState(true)

    const OnUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)
        setUserNameInputValue(e.target.value)

        if (!Valid) {
            setIsUserNameValid(true)
        } else setIsUserNameValid(false)
    }


    const OnFamilyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)
        setFamilyNameInputValue(e.target.value)

        if (!Valid) {
            setIsFamilyNameValid(true)
        } else setIsFamilyNameValid(false)
    }

    const onSave = async () => {

        let User = await JSON.parse(localStorage.getItem('User') || "");

        if (IsUserNameValid && IsFamilyNameValid) {
            if (UserNameInputValue !== "" && FamilyNameInputValue !== "") {
                User.UserName = UserNameInputValue
                User.FamilyName = FamilyNameInputValue
                localStorage.setItem('User', JSON.stringify(User) || "");
                setIsActive(false)
            }
            else if (UserNameInputValue !== "") {
                User.UserName = UserNameInputValue
                localStorage.setItem('User', JSON.stringify(User) || "");
                setIsActive(false)
            }
            else if (FamilyNameInputValue !== "") {
                User.FamilyName = FamilyNameInputValue
                localStorage.setItem('User', JSON.stringify(User) || "");
                setIsActive(false)
            }
        } else {
            setIsUserNameValid(false)
            setIsFamilyNameValid(false)
        }

    }

    return { OnUserNameChange, IsUserNameValid, OnFamilyNameChange, IsFamilyNameValid, onSave }
}
