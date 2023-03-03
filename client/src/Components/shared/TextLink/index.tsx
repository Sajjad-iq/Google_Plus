import { Link } from "react-router-dom";
import './style.css'
interface Props {
    To: string
    Text: string
}
export const TextLink = (props: Props) => {
    return (
        <Link className="text-link" to={props.To}>{props.Text}</Link>
    )
}
