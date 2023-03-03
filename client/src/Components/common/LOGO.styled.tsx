import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const LOGO = styled.h1`
font-size: 1.7rem;
font-weight: 500;
color:${Colors.Primary.red};
font-family: 'Mulish', sans-serif;
display:flex;
margin-bottom:25px;

 @media ${device.tablet} {
    font-size:2.8rem;
 }
 @media ${device.laptop} {
    font-size:2.2rem;
  }
  @media ${device.laptopL} {
    font-size:2.8rem;
  }

  @media ${device.desktop} {
    font-size:3.3rem;
  }
`