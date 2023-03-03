import styled from "styled-components";
interface Props {
    border: string
}
export const Section = styled.section<Props>`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 flex-direction: column;
 border-bottom:${p => p.border};
 padding:10px 0;

`