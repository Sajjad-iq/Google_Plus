import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

interface Props {
  display: string;
  width: string
  align: string
  padding: string
}

export const ToggleRow = styled.section<Props>`
 display: ${p => p.display};
 width: ${p => p.width};
 justify-content: ${p => p.align};
 align-items: center;
 padding:${p => p.padding};
 background-color: white;
 margin:5px 0;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

@media ${device.laptop} {
   width: 95%;
   margin: 10px;
  }
`