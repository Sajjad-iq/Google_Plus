import { AsideWrapper } from './styled/AsideWrapper'
import { Section } from './styled/Section.styled'
import { faHouse, faUser, faUsers, faGear, faTriangleExclamation, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { NavButton } from '../../Components/shared/NavButton';

interface Props {
    IsPageActive: boolean
}
export const Aside = React.memo((props: Props) => {
    return (
        <AsideWrapper display={props.IsPageActive ? "flex" : "none"}>

            <Section border='1px solid rgb(211, 210, 210)'>
                <NavButton CLass='' Name='Home' To='/' ICON={faHouse} />
                <NavButton CLass='' Name='Profile' To='/Profile' ICON={faUser} />
                <NavButton CLass='' Name='People' To='/People' ICON={faUsers} />
            </Section>

            <Section border='unset'>
                <NavButton CLass='' Name='Settings' To='/Settings' ICON={faGear} />
                <NavButton CLass='' Name='Send Feedback' To='/Feedback' ICON={faTriangleExclamation} />
                <NavButton CLass='' Name='Help' To='/Help' ICON={faCircleQuestion} />
            </Section>

        </AsideWrapper>
    )
})
