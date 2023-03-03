import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const SignUpSection = styled.section`
 width: 90%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;

 @media ${device.tablet} {
   width: 65%;
}
@media ${device.laptop} {
   width: 50%;
}

`