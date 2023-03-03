import styled from "styled-components";
import { device } from "../../../../../../assets/breackPoints";

export const TextAreaComponent = styled.textarea`
 width: 100%;
 background-color: none;
 border-radius: 10px;
 padding: 0 15px;
 margin:20px 0;
 font-size:1rem;
 font-family: 'Raleway', sans-serif;
 font-weight:600 ;
 border:none;

 &:focus {
   outline: none;
 }

 @media ${device.tablet} {
 font-size:1.4rem;
  }
`