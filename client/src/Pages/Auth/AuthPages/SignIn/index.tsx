import { SignInSection } from '../../../../Components/common/SignInSection.styled'
import { SignInWrapper } from '../../../../Components/common/SignInWrapper.styled'
import { Label } from '../../../../Components/shared/Label'
import { AddEmailAndPassword } from '../../../../Components/shared/SginIn_addEmail_Password'
import { SubmitSection } from '../../../../Components/shared/SubmitSection'
import { SignInSubmitHandler } from '../../../../services/SignInServices/SignInSubmitHandler'

export const SignIn = () => {

    const SignInSubmit = SignInSubmitHandler()

    return (
        <SignInWrapper>
            <SignInSection>
                <Label ForSignIn={true} Header='SignIn with your account' />
                <AddEmailAndPassword />
                <SubmitSection
                    SubmitButtonName='Submit'
                    SubmitButtonClick={SignInSubmit}
                    TextLinkName={"You don't have an account?"}
                    TextLinkPath={'/SignUp'}
                />
            </SignInSection>
        </SignInWrapper>
    )
}
