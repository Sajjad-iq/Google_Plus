import styled from "styled-components";

interface Props {
    display: string;
}
export const PostToggleSection = styled.section<Props>`
 width: 100%;
 height: 100%;
 display: ${p => p.display};
`