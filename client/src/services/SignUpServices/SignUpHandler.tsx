import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

export const SignUpHandler = () => {

    const {
        EmailInputValue,
        FamilyNameInputValue,
        UserNameInputValue,
        UserPasswordInputValue,
        IsUserNameValid,
        IsFamilyNameValid,
        IsEmailValid,
        IsConformPasswordValid,
        setIsEmailValid,
        setIsAllSectionsFilled
    } = useContext(AuthContext)

    const Navigate = useNavigate()


    const SignUpSubmit = async () => {
        if (IsUserNameValid && IsFamilyNameValid && IsEmailValid && IsConformPasswordValid) {

            if (UserNameInputValue !== "" && FamilyNameInputValue !== "" && EmailInputValue !== "" && UserPasswordInputValue !== "") {
                try {
                    await axios({
                        method: 'post',
                        url: import.meta.env.VITE_BACKEND_URL + "/api/SignUp",
                        headers: {},
                        data: {
                            UserName: UserNameInputValue,
                            FamilyName: FamilyNameInputValue,
                            Email: EmailInputValue,
                            Password: UserPasswordInputValue,
                        }
                    }
                    ).then(() => Navigate("/SignIn"))

                } catch (e) {
                    console.log(e)
                    setIsEmailValid(false)
                }

            } else setIsAllSectionsFilled(false)
        }
    }


    return SignUpSubmit
}
