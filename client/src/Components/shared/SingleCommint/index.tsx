import { UserLogo } from '../../common/UserLogo.styled'
import { Row } from '../Row.styled'
import { UserName } from '../../common/UserName.styled'
import { Column } from '../Column.styled'
import { CommentBody } from './CommentBody.styled'
import { P } from './P.styled'
import { MouseEventHandler } from 'react'

interface Props {
    UserImage: string
    UserName: string
    CommentBody: string
    CreatedAt: string
    onClickOnLogo: MouseEventHandler
}
export const SingleComment = (props: Props) => {

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
        <Row width='100%' padding='10px' align='flex-start'>
            <UserLogo onClick={props.onClickOnLogo} src={props.UserImage} loading={"lazy"} alt='comment image label' />
            <Column width='100%' padding='3px' align='flex-start'>
                <UserName onClick={props.onClickOnLogo} IsCommentUserName={true} >{props.UserName}</UserName>
                <CommentBody>{props.CommentBody}</CommentBody>
            </Column>
            <P>{DateCalculator()}</P>
        </Row>
    )
}
