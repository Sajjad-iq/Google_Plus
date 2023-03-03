import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";



export const P = styled.p`
  white-space: nowrap;
font-size: 1rem;
font-weight: 600;
color:${Colors.Secoundry.gray};
display:flex;

@media ${device.tablet} {
 font-size: 1.1rem;
}
@media ${device.tablet} {
 font-size: 0.9rem;
}
 @media ${device.desktop} {
  font-size: 1.1rem;

  }
`