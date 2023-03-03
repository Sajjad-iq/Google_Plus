import { useRef } from 'react'
import Image from '../../../../../assets/ICONS/ProfileImg.jpg'
import { SetFindUser } from '../../../../../services/PeopleServices/SetFindUser'
import { AddCommentServices } from '../../../../../services/PostsServices/AddCommentServices'
import { AddComment } from '../../../AddComment'
import { SingleComment } from '../../../SingleCommint'
import { Column } from './Column.styled'

interface Props {
    Response: { Comments: [] }
}

export const PostComments = (props: Props) => {

    let User = JSON.parse(localStorage.getItem('User') || "");
    const Ref = useRef<any>(null)
    const RestTextFelidValueReload = () => Ref ? Ref.current.value = "" : ""
    const { onChange, CommentSubmitHandler } = AddCommentServices(RestTextFelidValueReload)
    const { SetFindUserHandler } = SetFindUser()

    return (
        <Column width='100%' align='center' padding='unset'>
            {props.Response.Comments.map((e: any, i: number) => {
                return <SingleComment
                    onClickOnLogo={() => SetFindUserHandler(e.CommentOwnerId)}
                    CreatedAt={e.createdAt}
                    key={i}
                    UserImage={e.CommentOwnerImage !== "" ? e.CommentOwnerImage : Image}
                    UserName={e.CommentOwnerName}
                    CommentBody={e.CommentBody}
                />
            })}
            <AddComment Ref={Ref} UserImage={User.ProfilePicture !== "" ? User.ProfilePicture : Image} onSubmit={() => CommentSubmitHandler(props.Response)} onChange={onChange} />
        </Column>
    )
}
