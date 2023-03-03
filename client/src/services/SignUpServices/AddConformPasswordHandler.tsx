import { ChangeEvent, useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export const AddConformPasswordHandler = () => {

    const { setConformPasswordInputValue } = useContext(AuthContext)
    const OnConformPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setConformPasswordInputValue(e.target.value)

    return { OnConformPasswordChange }
}
