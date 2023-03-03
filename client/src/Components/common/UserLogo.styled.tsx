import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const UserLogo = styled.img`
  width: 42px;
  height: 42px;
  margin-right:10px;
  border-radius: 50%;
    object-fit: cover;


@media ${device.tablet} {
    width: 55px;
    height: 55px;

  }
  @media ${device.laptop} {
    width: 45px;
    height: 45px;

  }
`