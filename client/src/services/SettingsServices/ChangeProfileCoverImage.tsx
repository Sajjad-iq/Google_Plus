import React, { ChangeEvent, useState } from 'react'

export const ChangeProfileCoverImage = () => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const [Photo, setPhoto] = useState<any>(User.CoverPicture)

    const handleFileUpload = async (e: ChangeEvent<any>) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);

        User.CoverPicture = base64
        setPhoto(base64)
        localStorage.setItem('User', JSON.stringify(User) || "");

    }
    return { handleFileUpload, Photo }
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

