import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const Text = styled.article`
 width:100%;
 color:black;
 font-size:1rem;
 width: 100%;
 text-align: start;
 padding:10px 15px;
  word-wrap: break-word; 

 
  @media ${device.tablet} {
    font-size:1.3rem;
    line-height: 23px;
  }
  @media ${device.laptop} {
    font-size:1rem;
    line-height: 23px;
  }
`