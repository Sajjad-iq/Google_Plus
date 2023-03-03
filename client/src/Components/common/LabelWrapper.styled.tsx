import styled from "styled-components";
import { device } from "../../assets/breackPoints";

interface Props {
    forSignIn: boolean
}
export const LabelWrapper = styled.section<Props>`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: flex-start;
 background-color: white;
 flex-direction: column;

 @media ${device.tablet} {
     align-items: center;
     margin-bottom:50px;
}

 @media ${device.laptop} {
    ${p => p.forSignIn ?
        `align-items: center;`
        :
        `align-items: flex-start;`
    }
     margin-bottom:15px;
}

`