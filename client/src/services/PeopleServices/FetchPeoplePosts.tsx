import axios from "axios"
import { useContext, useState } from "react"
import { GlobalContext, def } from "../../Context/GlobalContext";

export const FetchPeoplePosts = () => {

    const [Loading, setLoading] = useState(false)
    let { FindUser } = useContext(GlobalContext)
    const [Response, setResponse] = useState([def])


    const FetchPeoplePostsHandler = async () => {
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
                    if (e.PostOwnerId === FindUser._id) return posts.push(e)
                })
                setResponse(posts.reverse())
            })

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return { FetchPeoplePostsHandler, Loading, Response }
}
