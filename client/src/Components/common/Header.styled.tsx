import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Header = styled.h1`
 font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  color:gray;
  padding:10px 1px;
  
  @media ${device.tablet} {
      font-size:1.8rem;
    }
  @media ${device.laptop} {
    font-size:1.2rem;
  }
    @media ${device.laptopL} {
    font-size:1.5rem;
  }

  @media ${device.desktop} {
    font-size:1.7rem;
  }

`