import { Row } from "../Row.styled"
import { PostWrapper } from "./styled/PostWrapper.styled"
import { P } from "./styled/P.styled"
import { PostBody } from "./styled/PostBody.styled"
import { Text } from "./styled/Text.styled"
import { PostImg } from "./styled/PostImg.styled"
import { Like } from "./Like"
import { CommentsButton } from "./Comments"
import { Share } from "./Share"
import { UserName } from "../../common/UserName.styled"
import { UserLogo } from "../../common/UserLogo.styled"
import { MouseEventHandler } from "react"
import { SetFindUser } from "../../../services/PeopleServices/SetFindUser"


interface Props {
    onClick: any
    PostBody: string
    PostImage: string
    LikesCount: number
    CommentsCount: number
    onHitLike: any
    PostOwnerName: string
    IsUserHitLike: boolean,
    PostOwnerImage: string
    IsForPreviewWindow: boolean
    CreatedAt: string
    onClickOnLogo: MouseEventHandler
}

export const Post = (props: Props) => {

    const DateCalculator = () => {
        var CreatedAt = new Date(props.CreatedAt);
        var NowDate = new Date(Date.now());
        var Difference = NowDate.getTime() - CreatedAt.getTime();
        var Difference_In_Days = Difference / (1000 * 3600 * 24);
        var Difference_In_Hours = Difference / (1000 * 3600);
        var Difference_In_Minutes = Difference / (1000 * 60);

        if (Difference_In_Minutes < 60) return `${Difference_In_Minutes.toFixed()} min`
        else if (Difference_In_Hours < 24 && Difference_In_Minutes > 60) return `${Difference_In_Hours.toFixed()} hour`
        else return `${Difference_In_Days.toFixed()} day`
    }


    return (
        <PostWrapper IsForPreview={props.IsForPreviewWindow}>
            <Row padding="10px" align="space-between" width="100%">
                <Row padding="0" align="center" width="auto">
                    <UserLogo onClick={props.onClickOnLogo} src={props.PostOwnerImage} alt="User Photo" />
                    <UserName onClick={props.onClickOnLogo} IsCommentUserName={false}>{props.PostOwnerName}</UserName>
                    <P>Public</P>
                </Row>
                <P>{DateCalculator()}</P>
            </Row>

            <PostBody onClick={props.onClick}>
                <Text>{props.PostBody}</Text>
                <PostImg loading={"lazy"} src={props.PostImage} />
            </PostBody>

            <Row padding="10px" align="space-between" width="100%">

                <Like IsUserHitLike={props.IsUserHitLike} onHitLike={props.onHitLike} LikesCount={props.LikesCount} />

                <Row padding="0" align="center" width="auto">
                    <CommentsButton CommentsCount={props.CommentsCount} onClick={props.onClick} />
                    <Share />
                </Row>
            </Row>
        </PostWrapper>
    )
}
