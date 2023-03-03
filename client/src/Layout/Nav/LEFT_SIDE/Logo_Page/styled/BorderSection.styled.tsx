import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

interface Props {
  borderLeft: string
}
export const BorderSection = styled.section<Props>`
 display: flex;
 justify-content: center;
 align-items: center;
 border-left: ${p => p.borderLeft};
 padding:0 ;

 @media (min-width:320px) and (max-width:1024px) {
    border-left:unset;
  }
  @media(${device.laptop}){
     padding:0 10px  ;
  }
  
`