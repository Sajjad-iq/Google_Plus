import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from 'react-router-dom';

export const SignInSubmitHandler = () => {

    const { SignInEmailInputValue, SignInPasswordInputValue, setSignInEmailAndPasswordValid } = useContext(AuthContext)
    const Navigate = useNavigate()


    const SignInSubmit = async () => {
        if (SignInEmailInputValue !== "" && SignInPasswordInputValue !== "") {
            try {
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/SignIn",
                    headers: {},
                    data: {
                        Email: SignInEmailInputValue,
                        Password: SignInPasswordInputValue
                    }
                }
                ).then(res => {
                    Navigate('/')
                    localStorage.setItem('User', JSON.stringify(res.data.User) || "");
                })
            } catch (e) {
                console.log(e)
                setSignInEmailAndPasswordValid(false)
            }
        }

    }
    return SignInSubmit
}
