import { PostBody } from "./styled/PostBody.styled"
import { WindowWrapper } from "./styled/WindowWrapper"
import { Form } from "./styled/Form.styled"
import { ProfileImageAndPostState } from "./Components/ProfileImageAndPostState"
import { SendButton } from './Components/SendButton'
import { TextArea } from "./Components/TextArea"
import { Exit } from "./Components/Exit"
import { AddPost } from "../../../../services/PostsServices/AddPost"
import { Row } from "../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled"
import { AddImage } from "./Components/AddImage"
import { SmallImage } from "./styled/small_Image.styled"

interface Props {
    Display: string
    CloseFunction: any
}

export const PopUpAddPostWindow = (props: Props) => {

    const { AddPostHandler, Photo, handleImageUpload, TextChange } = AddPost(props.CloseFunction)

    return (
        <WindowWrapper display={props.Display}>
            <PostBody>
                <Row padding="10px" align="space-between" width="100%">
                    <ProfileImageAndPostState />
                    <Exit onClick={props.CloseFunction} />
                </Row>

                <Form>
                    <TextArea onChange={TextChange} />
                </Form>

                <Row padding="10px" align="space-between" width="100%">
                    <Row padding="0" align="center" width="fit-content">
                        <AddImage onChange={handleImageUpload} />
                        <SmallImage src={Photo !== "" ? Photo : ""} alt="image uploaded" style={{ display: Photo !== "" ? "flex" : "none" }} />
                    </Row>
                    <SendButton Click={AddPostHandler} />
                </Row>
            </PostBody>
        </WindowWrapper>
    )
}
