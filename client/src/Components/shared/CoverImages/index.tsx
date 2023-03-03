import React from 'react'
import { CoverImg } from '../../common/CoverImg.styled'
import { ProfileUserImg } from '../../common/ProfileUserImg.styled'
import { Wrapper } from '../Wrapper'

interface Props {
    CoverImg: string
    UserImg: string
}
export const CoverImages = (props: Props) => {
    return (
        <Wrapper>
            <CoverImg src={props.CoverImg} alt='cover image' />
            <ProfileUserImg src={props.UserImg} alt="user image" />
        </Wrapper>
    )
}
