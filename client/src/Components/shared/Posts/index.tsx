import React, { MouseEventHandler, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { PostToggleSection } from '../../../Pages/Home/styled/PostsToggleSection.styled'
import { AddLike } from '../../../services/PostsServices/AddLike'
import { AddPostComponent } from '../AddPostComponent'
import { Post } from '../Post'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { SetFindUser } from '../../../services/PeopleServices/SetFindUser'


interface Props {
    ToggleAddPostComponent: MouseEventHandler
    Loading: boolean
    OnClickOnPost: MouseEventHandler
    Response: any
    IsForProfile: boolean
}

export const Posts = React.memo((props: Props) => {


    const { AddLikeHandler } = AddLike()
    let User = JSON.parse(localStorage.getItem('User') || "");
    const { SetFindUserHandler } = SetFindUser()


    return (
        <PostToggleSection display={"block"}>
            < ResponsiveMasonry
                columnsCountBreakPoints={{ 768: 1, 1023: 2, 1919: 3 }}
            >
                <Masonry >
                    <AddPostComponent IsActive={!props.IsForProfile} OpenFunction={props.ToggleAddPostComponent} />
                    {props.Loading ? <h1>Loading...</h1> :
                        props.Response?.map((e: any) => {
                            return <Post
                                onClickOnLogo={() => SetFindUserHandler(e.PostOwnerId)}
                                CreatedAt={e.createdAt}
                                IsForPreviewWindow={false}
                                key={e._id}
                                onClick={() => props.OnClickOnPost(e)}
                                PostBody={e.PostBody}
                                PostImage={e.PostImage}
                                LikesCount={e.Likes.length}
                                CommentsCount={e.Comments.length}
                                onHitLike={() => AddLikeHandler(e)}
                                IsUserHitLike={e.Likes.includes(User._id)}
                                PostOwnerName={e.PostOwnerName}
                                PostOwnerImage={e.PostOwnerImage !== "" ? e.PostOwnerImage : UserIMG}
                            />
                        })
                    }
                </Masonry>
            </ResponsiveMasonry >
        </PostToggleSection>
    )
}
)