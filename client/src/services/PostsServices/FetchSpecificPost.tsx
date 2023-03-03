import axios from 'axios'
import React, { useState } from 'react'
import { def } from '../../Context/GlobalContext'

export const FetchSpecificPost = () => {

    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState(def)


    const FetchSpecificPostHandler = async (id: string) => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Post",
                headers: {},
                data: {
                    PostId: id
                }
            }
            ).then((e: any) => setResponse(e.data))
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    return { FetchSpecificPostHandler, Response, Loading }
}
