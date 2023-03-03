import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";

export const PageName = styled.h1`
font-size: 1.1rem;
font-weight: 500;
color:${Colors.Secoundry.gray};
font-family: 'Raleway', sans-serif;

       @media ${device.tablet} {
         font-size: 1.2rem;
        }
`