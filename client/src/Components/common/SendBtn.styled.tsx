import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

interface Props {
    padding: string
}
export const SendBtn = styled.button<Props>`
 color:black;
 font-size:1rem;
 border:none;
 background-color: ${Colors.Primary.Lightgray};
 color:${Colors.Secoundry.gray};
 padding:${p => p.padding};
 border-radius: 4px;
 font-family: 'Raleway', sans-serif;
 font-weight:600 ;
 box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 
 :active{
    opacity:0.8 ;
  }

  @media ${device.tablet} {
    font-size:1.3rem;
  }
 `