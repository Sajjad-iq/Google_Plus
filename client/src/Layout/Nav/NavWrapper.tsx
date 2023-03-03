import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const NavWrapper = styled.nav`
 width: 100%;
 height: 60px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color:${Colors.Primary.white} ;
 border:1px solid gray;

 @media ${device.laptop} {
  height: 65px;
  }
`