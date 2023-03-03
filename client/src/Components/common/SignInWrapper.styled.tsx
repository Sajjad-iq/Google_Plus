import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const SignInWrapper = styled.section`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;

 @media ${device.tablet} {
   padding:20px;
}

`