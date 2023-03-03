import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export const AddOrRemoveFollow = (setIsFollow: any) => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    let { FindUser, setFindUser } = useContext(GlobalContext)


    const AddOrRemoveFollowHandler = async (UserId: string) => {

        if (UserId) {
            try {
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/People/AddFollow",
                    headers: {},
                    data: {
                        FindUser: FindUser._id,
                        OwnerId: User._id
                    }
                }
                ).then(res => {
                    setFindUser(res.data.FindUser)
                    setIsFollow(res.data.IsFollow)
                })
            } catch (e) {
                console.log(e)
            }

        }

    }
    return AddOrRemoveFollowHandler
}
