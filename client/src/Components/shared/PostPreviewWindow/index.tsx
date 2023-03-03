import { MouseEventHandler } from 'react'
import { AddLike } from '../../../services/PostsServices/AddLike'
import { BackButton } from '../BackButton'
import { PostComments } from './Components/Commints'
import { OptionButtonAndOptionsWindow } from './Components/OptionButtonAndOptionsWindow'
import { Row } from './Components/OptionButtonAndOptionsWindow/styled/Row.styled'
import { Wrapper } from './styled/Wrapper.styled'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { Post } from '../Post'
import { SetFindUser } from '../../../services/PeopleServices/SetFindUser'

interface Props {
    BackHandler: MouseEventHandler
    StockData: any
    AsyncData: any
}

export const PostPreviewWindow = (props: Props) => {

    const { AddLikeHandler } = AddLike()
    const { SetFindUserHandler } = SetFindUser()
    let User = JSON.parse(localStorage.getItem('User') || "");

    return (
        <Wrapper>
            <Row width='100%' align='space-between' padding='10px'>
                <BackButton onClick={props.BackHandler} />
                <OptionButtonAndOptionsWindow Data={props.StockData} />
            </Row>
            <Post
                onClickOnLogo={() => SetFindUserHandler(props.StockData.PostOwnerId)}
                CreatedAt={props.StockData.createdAt}
                IsForPreviewWindow={true}
                onClick={() => ""}
                key={props.StockData._id}
                PostBody={props.StockData.PostBody}
                PostImage={props.StockData.PostImage}
                LikesCount={props.StockData.Likes.length}
                CommentsCount={props.AsyncData.Comments.length}
                onHitLike={() => AddLikeHandler(props.StockData)}
                IsUserHitLike={props.AsyncData.Likes.includes(User._id)}
                PostOwnerName={props.StockData.PostOwnerName}
                PostOwnerImage={props.StockData.PostOwnerImage !== "" ? props.StockData.PostOwnerImage : UserIMG}
            />
            <PostComments Response={props.AsyncData} />
        </Wrapper>
    )
}
