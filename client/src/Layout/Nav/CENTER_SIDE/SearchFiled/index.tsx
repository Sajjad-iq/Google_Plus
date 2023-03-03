import { useEffect, useState } from "react"
import { Row } from "../../../../Components/shared/Row.styled"
import { FindUser } from "../../../../services/SearchServices/FindUser"
import { SearchResults } from "./Components/SearchResults"
import { Button } from "./styled/Button.styled"
import { Column } from "./styled/Column.styled"
import { Input } from "./styled/Input.styled"
import { SearchWrapper } from "./styled/SearchWrapper.styled"

interface Props {
    isActive: boolean
    setIsActive: any
}

export const SearchFiled = (props: Props) => {

    const [SearchWord, setSearchWord] = useState("")
    const [IsValid, setIsValid] = useState(true)

    const { onChange, FindUserHandler, Response } = FindUser(SearchWord, setSearchWord, setIsValid)

    useEffect(() => {
        FindUserHandler()
        console.log(Response)
    }, [SearchWord])

    return (
        <SearchWrapper style={{ display: props.isActive ? "flex" : "none" }}>
            <Column >
                <Row width="100%" padding="0" align="center" style={{ position: "relative" }}>
                    <Input IsValidValue={IsValid} onChange={onChange} placeholder="Search.." />
                    <Button onClick={() => props.setIsActive(!props.isActive)}>X</Button>
                </Row>

                <SearchResults response={Response} />
            </Column>
        </SearchWrapper>
    )
}
