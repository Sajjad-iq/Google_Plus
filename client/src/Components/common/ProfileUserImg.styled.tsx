import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const ProfileUserImg = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  position: absolute;
  bottom:-55px;
  object-fit: cover;

  @media ${device.laptop} {
    width: 100px;
    height: 100px;

  }

`