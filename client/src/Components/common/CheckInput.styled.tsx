import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";


export const CheckInput = styled.input`
 margin:10px 0;
 font-size:1.1rem;
 border:1px solid gray;

&:active{
  outline:1px solid ${Colors.Secoundry.Cyan};
  border:none;
}

@media ${device.tablet} {
 height: 20px;
 width: 20px;
}
@media ${device.laptop} {
 height: 15px;
 width: 15px;
}

 @media ${device.desktop} {
  height: 20px;
  width: 20px;
  }
`
