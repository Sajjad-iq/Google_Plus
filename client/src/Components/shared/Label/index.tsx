import React from 'react'
import { Header } from '../../common/Header.styled'
import { LabelWrapper } from '../../common/LabelWrapper.styled'
import { LOGO } from '../../common/LOGO.styled'


interface Props {
    Header: string
    ForSignIn: boolean
}
export const Label = (props: Props) => {
    return (
        <LabelWrapper forSignIn={props.ForSignIn}>
            <LOGO>Google Plus</LOGO>
            <Header>
                {props.Header}
            </Header>
        </LabelWrapper>
    )
}
