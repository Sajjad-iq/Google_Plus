import React, { ChangeEvent, useContext, useState } from 'react'

export const ChangeDescriptionHandler = (setIsActive: any) => {

    const [DescriptionInputValue, setDescriptionInputValue] = useState("")

    const OnDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescriptionInputValue(e.target.value)
    }

    const onSave = async () => {
        let User = await JSON.parse(localStorage.getItem('User') || "");
        User.Description = DescriptionInputValue
        localStorage.setItem('User', JSON.stringify(User) || "");
        setIsActive(false)
    }
    return { onSave, OnDescriptionChange }
}


