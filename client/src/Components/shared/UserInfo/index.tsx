import { MouseEventHandler } from 'react'
import { ProfileButton } from '../../common/ProfileButton.styled'
import { ProfileFollowers } from '../../common/ProfileFollowers.styled'
import { ProfileUserDescription } from '../../common/ProfileUserDecription.styled'
import { ProfileUserName } from '../../common/ProfileUserName.styled'
import { Column } from '../Column.styled'

interface Props {
    UserName: string
    UserDescription: string
    UserFollowers: string
    ProfileButtonName: any
    ProfileButtonClick: any
}
export const UserInfo = (props: Props) => {
    return (
        <Column width='100%' padding='75px 0' align='center'>
            <ProfileUserName>{props.UserName}</ProfileUserName>
            <ProfileUserDescription>{props.UserDescription}</ProfileUserDescription>
            <ProfileFollowers>{`${props.UserFollowers} followers`}</ProfileFollowers>
            <ProfileButton onClick={props.ProfileButtonClick}>{props.ProfileButtonName}</ProfileButton>
        </Column>
    )
}
