import axios from 'axios'
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export const AddLike = () => {

    const { PostPreviewRefresh, setPostPreviewRefresh } = useContext(GlobalContext)
    let User = JSON.parse(localStorage.getItem('User') || "");

    const AddLikeHandler = async (e: any) => {
        try {
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddLike",
                headers: {},
                data: {
                    UserId: User._id,
                    PostId: e._id
                }
            }
            ).then(() => setPostPreviewRefresh(!PostPreviewRefresh))
        } catch (e) {
            console.log(e)
        }
    }

    return { AddLikeHandler }
}
