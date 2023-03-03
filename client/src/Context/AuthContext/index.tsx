import { createContext, ReactNode, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const AuthContext = createContext<any>([])

const AuthContextProvider = ({ children }: ProviderChildrenType) => {

    // user name
    const [IsUserNameValid, setIsUserNameValid] = useState(true)
    const [UserNameInputValue, setUserNameInputValue] = useState("")

    // family name
    const [IsFamilyNameValid, setFamilyNameValid] = useState(true)
    const [FamilyNameInputValue, setFamilyNameInputValue] = useState("")

    //email
    const [IsEmailValid, setIsEmailValid] = useState(true)
    const [EmailInputValue, setEmailInputValue] = useState("")

    //password
    const [UserPasswordInputValue, setPasswordInputValue] = useState("")

    //password conform and validation boll
    const [IsConformPasswordValid, setIsConformPasswordValid] = useState(true)
    const [UserConformPasswordInputValue, setConformPasswordInputValue] = useState("")

    //signIn states
    const [SignInEmailInputValue, setSignInEmailInputValue] = useState("")
    const [SignInPasswordInputValue, setSignInPasswordInputValue] = useState("")
    const [SignInEmailAndPasswordValid, setSignInEmailAndPasswordValid] = useState(true)

    //signUpAllSectionsInputs
    const [IsAllSectionsFilled, setIsAllSectionsFilled] = useState(true)


    const data = {
        EmailInputValue, setEmailInputValue,
        FamilyNameInputValue, setFamilyNameInputValue,
        UserNameInputValue, setUserNameInputValue,
        UserPasswordInputValue, setPasswordInputValue,
        IsUserNameValid, setIsUserNameValid,
        IsFamilyNameValid, setFamilyNameValid,
        IsEmailValid, setIsEmailValid,
        UserConformPasswordInputValue, setConformPasswordInputValue,
        IsConformPasswordValid, setIsConformPasswordValid,
        SignInEmailInputValue, setSignInEmailInputValue,
        SignInPasswordInputValue, setSignInPasswordInputValue,
        SignInEmailAndPasswordValid, setSignInEmailAndPasswordValid,
        IsAllSectionsFilled, setIsAllSectionsFilled
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider