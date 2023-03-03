import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'

export const SetUserInfoAndRedirect = () => {

    const { IsUserSignIn, setIsUserSignIn } = useContext(GlobalContext)
    const Navigate = useNavigate()
    let User = JSON.parse(localStorage.getItem('User') || "");

    const RefreshUserAccount = async () => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/SignIn/Refresh",
                headers: {},
                data: {
                    Email: User.Email,
                    Password: User.Password
                }
            }
            ).then(res => {
                setIsUserSignIn(true)
                localStorage.setItem('User', JSON.stringify(res.data.User) || "");
                Navigate("/")
            })
        } catch (e) {
            setIsUserSignIn(false)
            Navigate("/SignIn")
        }

    }


    return { IsUserSignIn, RefreshUserAccount }
}
