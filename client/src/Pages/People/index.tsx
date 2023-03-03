import React, { useContext, useEffect, useState } from 'react'
import { CoverImages } from '../../Components/shared/CoverImages'
import { Posts } from '../../Components/shared/Posts'
import { UserInfo } from '../../Components/shared/UserInfo'
import { Wrapper } from '../../Components/shared/Wrapper'
import { PreviewThePost } from '../../services/PostsServices/PreviewThePost'
import CoverIMG from "../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import UserIMG from "../../assets/ICONS/ProfileImg.jpg"
import { FetchPeoplePosts } from '../../services/PeopleServices/FetchPeoplePosts'
import { AddOrRemoveFollow } from '../../services/PeopleServices/AddOrRemoveFollow'
import { GlobalContext } from '../../Context/GlobalContext'


export const People = () => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    let { FindUser } = useContext(GlobalContext)
    let [IsFollow, setIsFollow] = useState(true)
    const { onClickOnPost } = PreviewThePost()
    const { FetchPeoplePostsHandler, Loading, Response } = FetchPeoplePosts()
    const AddOrRemoveFollowHandler = AddOrRemoveFollow(setIsFollow)


    useEffect(() => {
        FetchPeoplePostsHandler()
    }, [])



    return (
        <Wrapper>
            <CoverImages CoverImg={FindUser.CoverPicture !== "" ? FindUser.CoverPicture : CoverIMG} UserImg={FindUser.ProfilePicture !== "" ? FindUser.ProfilePicture : UserIMG} />
            <UserInfo
                UserName={`${FindUser.UserName} ${FindUser.FamilyName}`}
                UserDescription={FindUser.Description}
                UserFollowers={FindUser.Followers.length || "0"}
                ProfileButtonClick={AddOrRemoveFollowHandler}
                ProfileButtonName={FindUser.Followers.includes(User._id) && IsFollow ? "UnFollow" : "Follow"}
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
