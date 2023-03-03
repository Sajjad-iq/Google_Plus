import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const SmallImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  margin:0 10px;
  
  @media ${device.laptop} {
    width: 60px;
    height: 60px;
    
  }

`