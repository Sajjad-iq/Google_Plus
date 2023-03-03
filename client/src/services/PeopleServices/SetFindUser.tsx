import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

export const SetFindUser = () => {

    const Navigate = useNavigate()
    let { setFindUser } = useContext(GlobalContext)
    let User = JSON.parse(localStorage.getItem('User') || "");

    const SetFindUserHandler = async (UserId: string) => {

        if (UserId && UserId !== User._id) {
            try {
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/People",
                    headers: {},
                    data: {
                        id: UserId
                    }
                }
                ).then(res => {
                    setFindUser(res.data)
                    Navigate("/People")
                })
            } catch (e) {
                console.log(e)
            }

        } else Navigate("/Profile")

    }
    return { SetFindUserHandler }

}
