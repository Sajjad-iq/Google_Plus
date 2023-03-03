import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";

export const LOGO = styled.h1`
font-size: 1rem;
font-weight: 500;
color:${Colors.Secoundry.gray};
font-family: 'Mulish', sans-serif;
display:none;

@media ${device.laptop} {
  display:flex;
  font-size: 1.4rem;
  }
`