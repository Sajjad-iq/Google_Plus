import { SearchResultsWrapper } from "../../styled/SearchResultsWrapper"

interface Props {
    response: []
}
export const SearchResults = (props: Props) => {

    return (
        <SearchResultsWrapper>
            {props.response.map((e: any) => {
                return <h1>{e.UserName}</h1>
            }
            )}
        </SearchResultsWrapper>
    )
}
