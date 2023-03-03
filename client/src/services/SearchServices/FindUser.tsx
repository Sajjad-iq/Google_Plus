import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'



export const FindUser = (SearchWord: any, setSearchWord: any, setIsValid: any) => {

    const [Response, setResponse] = useState<any>([])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)

        if (!Valid) {
            setSearchWord(e.target.value)
            setIsValid(true)
        } else setIsValid(false)
    }


    const FindUserHandler = async () => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Search/",
                headers: {},
                data: {
                    search_word: SearchWord
                }
            }
            ).then(res => {
                setResponse(res.data)
            })
        } catch (e) {
            console.log(e)
        }
    }
    return { onChange, FindUserHandler, Response }
}
