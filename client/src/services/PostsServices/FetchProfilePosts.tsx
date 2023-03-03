import axios from "axios"
import { useState } from "react"
import { def } from "../../Context/GlobalContext";

export const FetchProfilePosts = () => {

    const [Loading, setLoading] = useState(false)
    let User = JSON.parse(localStorage.getItem('User') || "");
    const [Response, setResponse] = useState([def])


    const FetchProfilePostsHandler = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'get',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts",
                headers: {},
            }
            ).then(async (e: any) => {
                let posts: any = [];
                await e.data.map((e: any) => {
                    if (e.PostOwnerId === User._id) return posts.push(e)
                })
                setResponse(posts.reverse())
            })

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return { FetchProfilePostsHandler, Loading, Response }
}
