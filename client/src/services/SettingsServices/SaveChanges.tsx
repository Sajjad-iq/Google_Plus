import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const SaveChanges = () => {

    const Navigate = useNavigate()

    const Save = async () => {
        const User = await JSON.parse(localStorage.getItem('User') || "");

        try {
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Profile/${User._id}`,
                headers: {},
                data: {
                    User
                }
            }
            ).then(() => Navigate("/"))

        } catch (e) {
            console.log(e)
        }

    }

    return { Save }
}
