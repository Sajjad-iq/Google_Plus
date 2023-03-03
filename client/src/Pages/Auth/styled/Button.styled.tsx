import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";

export const Button = styled.button`
border: none;
background: ${Colors.Secoundry.Cyan};
color: ${Colors.Primary.white};
padding:5px 10px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-size:1.1rem;
font-family: 'Raleway', sans-serif;
font-weight: 600;

@media ${device.laptop} {
 padding:5px 12px;
 font-size:1rem;
}

 @media ${device.desktop} {
  padding:8px 15px;
  font-size:1.2rem;
  }
`