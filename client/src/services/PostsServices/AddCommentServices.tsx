import axios from 'axios';
import React, { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { FetchPostsHandler } from './FetchPosts';

export const AddCommentServices = (RestTextFelidValueReload: any) => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const [TextFieldValue, setTextFieldValue] = useState("")
    const { PostPreviewRefresh, setPostPreviewRefresh } = useContext(GlobalContext)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFieldValue(e.target.value)




    const CommentSubmitHandler = async (data: any) => {

        try {
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddComment",
                headers: {},
                data: {
                    PostId: data._id,
                    CommentBody: TextFieldValue,
                    CommentOwnerName: `${User.UserName} ${User.FamilyName}`,
                    CommentOwnerId: User._id,
                    CommentOwnerImage: User.ProfilePicture,
                }
            }
            ).then(() => {
                RestTextFelidValueReload()
                setPostPreviewRefresh(!PostPreviewRefresh)
            })
        } catch (e) {
            console.log(e)
        }

    }
    return { onChange, CommentSubmitHandler }
}
