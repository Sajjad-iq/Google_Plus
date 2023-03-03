import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { Aside } from '../Layout/Aside'
import { FooterNav } from '../Layout/Footer'
import { Nav } from '../Layout/Nav'
import { ActiveToggle } from '../services/PostsServices/PostsScreenToggle'

import { Footer } from './styled/footer'
import { Header } from './styled/Header'
import { LeftSide } from './styled/LeftSide'
import { RightSide } from './styled/RightSide'
import { Row } from './styled/Row'
import { SplitWrapper } from './styled/SplitWrapper'


export const SplitScreen = () => {

    const { IsPageActive, Toggle } = ActiveToggle()

    return (
        <SplitWrapper >

            <Header>
                <Nav MenuButtonHandler={Toggle} />
            </Header>

            <Row>
                <LeftSide>
                    <Aside IsPageActive={IsPageActive} />
                </LeftSide>

                <RightSide>
                    <Outlet />
                </RightSide>
            </Row>

            <Footer>
                <FooterNav />
            </Footer>
        </SplitWrapper>
    )
}
