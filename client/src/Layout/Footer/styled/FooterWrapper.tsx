import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const FooterWrapper = styled.footer`
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 background-color:white ;
 padding:5px;
 border-top:1px solid gray;
 
   @media ${device.tablet} {
    width: 90%;
    }
    @media(${device.laptop}){
    display: none;
  }

`