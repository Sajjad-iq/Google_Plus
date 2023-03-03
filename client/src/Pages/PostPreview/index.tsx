import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostPreviewWindow } from '../../Components/shared/PostPreviewWindow'
import { GlobalContext } from '../../Context/GlobalContext';
import { FetchSpecificPost } from '../../services/PostsServices/FetchSpecificPost';

export const PostPreview = () => {

    let post = JSON.parse(localStorage.getItem('SinglePost') || "love");
    const Navigate = useNavigate()
    const { FetchSpecificPostHandler, Response, Loading } = FetchSpecificPost()
    const { PostPreviewRefresh } = useContext(GlobalContext)

    useEffect(() => {
        FetchSpecificPostHandler(post._id)
    }, [PostPreviewRefresh])

    return (
        <PostPreviewWindow
            AsyncData={Response}
            StockData={post}
            BackHandler={() => Navigate("/")}
        />
    )
}
