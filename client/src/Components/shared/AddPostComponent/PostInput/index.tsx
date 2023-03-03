import { Input } from "./styled/Input.styled"

interface Props {
    onFocus: any
}

export const PostInputComponent = (props: Props) => {

    return (
        <Input
            onFocus={props.onFocus}
            placeholder="Whats New About you.."
        />
    )
}
