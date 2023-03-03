import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Count = styled.p`
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:1.2rem;
 margin:5px;

 @media ${device.tablet} {
    font-size:1.7rem;
    margin:10px;

  }
  @media ${device.tablet} {
    font-size:1.4rem;
  }
`