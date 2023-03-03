import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const SplitWrapper = styled.section`
 width: 100%;
 height:100vh;
 display: flex;
 flex-direction: column;
 position: relative;
 padding-top:60px;
 padding-bottom:60px;
 background-color:${Colors.Primary.white} ;

  @media ${device.tablet} {
  padding-bottom:65px;
  }

  @media ${device.laptop} {
  padding-top:65px;
  padding-bottom:0px;
  }
`
