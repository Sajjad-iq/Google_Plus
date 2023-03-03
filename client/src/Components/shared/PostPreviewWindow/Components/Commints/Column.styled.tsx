import styled from "styled-components";
interface Props {
  width: string
  align: string
  padding: string
}
export const Column = styled.section<Props>`
 width: ${p => p.width};
 display: flex;
 justify-content: center;
 align-items: ${p => p.align};
 flex-direction: column;
 padding:${p => p.padding};
`