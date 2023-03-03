import styled from "styled-components";
import { device } from "../../../assets/breackPoints";


export const SettingsWrapper = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 padding:50px 10px;

 @media ${device.tablet} {
   width: 75%;
}
@media ${device.laptop} {
   width: 65%;
}
`