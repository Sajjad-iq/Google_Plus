import { LOGO } from './styled/LOGO.styled'
import { PageName } from './styled/PageName.styled'
import { BorderSection } from './styled/BorderSection.styled'
import { Wrapper } from './styled/Wrapper'

export const LogoAndPage = () => {

    return (
        <Wrapper>
            <BorderSection borderLeft='unset'>
                <LOGO>Google +</LOGO>
            </BorderSection>

            <BorderSection borderLeft='1px solid black'>
                <PageName>Home</PageName>
            </BorderSection>
        </Wrapper>
    )
}
