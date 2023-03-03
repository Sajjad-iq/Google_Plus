import axios from 'axios'
import { ChangeEvent, useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export const AddPost = (WindowClosing: any) => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const [Photo, setPhoto] = useState<any>("")
    const [Textfield, setTextFelid] = useState<string>("")
    const { HomeReFresh, setHomeReFresh } = useContext(GlobalContext)


    const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)

    const handleImageUpload = async (e: ChangeEvent<any>) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPhoto(base64)
    }

    const AddPostHandler = async () => {
        if (Textfield !== "") {
            try {
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Posts",
                    headers: {},
                    data: {
                        PostBody: Textfield,
                        PostOwnerId: User._id,
                        PostOwnerName: `${User.UserName} ${User.FamilyName}`,
                        PostImage: Photo,
                        PostOwnerImage: User.ProfilePicture
                    }
                }
                ).then(() => {
                    WindowClosing()
                    setHomeReFresh(!HomeReFresh)
                })
            } catch (e) {
                console.log(e)
            }
        }


    }

    return { AddPostHandler, Photo, handleImageUpload, TextChange }
}


function convertToBase64(file: any) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })

}
