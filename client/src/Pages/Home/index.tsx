import { Wrapper } from "../../Components/shared/Wrapper"
import { ActiveToggle } from "../../services/PostsServices/PostsScreenToggle"
import { FetchPostsHandler } from "../../services/PostsServices/FetchPosts"
import { useContext, useEffect } from "react"
import { PopUpAddPostWindow } from "./Components/PopUpAddPostWindow"
import { Posts } from "../../Components/shared/Posts"
import { PreviewThePost } from "../../services/PostsServices/PreviewThePost"
import { GlobalContext } from "../../Context/GlobalContext"
export const Home = () => {

    const { IsPageActive, Toggle } = ActiveToggle()
    const { onClickOnPost } = PreviewThePost()
    const { FetchPosts, Loading, Response } = FetchPostsHandler()
    const { HomeReFresh } = useContext(GlobalContext)

    useEffect(() => {
        FetchPosts()
    }, [HomeReFresh])

    return (

        <Wrapper>
            <PopUpAddPostWindow CloseFunction={Toggle} Display={IsPageActive ? "flex" : "none"} />
            <Posts
                IsForProfile={false}
                ToggleAddPostComponent={Toggle}
                Loading={Loading}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />
        </Wrapper>

    )
}
