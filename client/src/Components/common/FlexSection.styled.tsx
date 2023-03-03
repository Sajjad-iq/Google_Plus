import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const FlexSection = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: flex-start;
 flex-direction: column;

 @media ${device.laptop} {
    flex-direction: row;
 }
`
