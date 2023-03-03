import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const P = styled.section`
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:0.8rem;
 margin-right:15px;
 margin-left:5px;

  @media ${device.tablet} {
    font-size:0.9rem;
  }
`