import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

interface Props {
  IsForPreview: boolean
}
export const PostWrapper = styled.section<Props>`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;
 transform: 3s;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 margin:1px 0;
 ${p => p.IsForPreview ?
    `@media ${device.laptop} {
   width: 100%;
   margin:0;
  }`
    :
    `@media ${device.laptop} {
   width: 95%;
   margin:10px;
  }`
  }
 `