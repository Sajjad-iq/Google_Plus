import { Wrapper } from "../../Components/shared/Wrapper"
import { CoverImages } from "../../Components/shared/CoverImages"
import CoverIMG from "../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import UserIMG from "../../assets/ICONS/ProfileImg.jpg"
import { UserInfo } from "../../Components/shared/UserInfo"
import { Posts } from "../../Components/shared/Posts"
import { useNavigate } from "react-router-dom"
import { PreviewThePost } from "../../services/PostsServices/PreviewThePost"
import { useEffect } from "react"
import { FetchProfilePosts } from "../../services/PostsServices/FetchProfilePosts"

function Profile() {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const { onClickOnPost } = PreviewThePost()
    const { FetchProfilePostsHandler, Loading, Response } = FetchProfilePosts()
    const Navigate = useNavigate()


    useEffect(() => {
        FetchProfilePostsHandler()
    }, [])

    return (
        <Wrapper>
            <CoverImages CoverImg={User.CoverPicture !== "" ? User.CoverPicture : CoverIMG} UserImg={User.ProfilePicture !== "" ? User.ProfilePicture : UserIMG} />
            <UserInfo
                UserName={`${User.UserName} ${User.FamilyName}`}
                UserDescription={User.Description}
                UserFollowers={User.Followers.length || "0"}
                ProfileButtonClick={() => Navigate("/Settings")}
                ProfileButtonName={"Edit Profile"}
            />
            <Posts
                IsForProfile={true}
                ToggleAddPostComponent={() => ""}
                Loading={Loading}
                Response={Response}
                OnClickOnPost={onClickOnPost}
            />
        </Wrapper>
    )
}

export default Profile