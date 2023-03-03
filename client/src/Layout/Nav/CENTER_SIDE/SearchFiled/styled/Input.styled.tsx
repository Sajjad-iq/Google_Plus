import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";

interface Props {
  IsValidValue: boolean
}
export const Input = styled.input<Props>`
  width: 100%;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  background-color: ${Colors.Primary.Lightgray};
  font-family: 'Raleway', sans-serif;
 

${p => p.IsValidValue ?
    `
    border:1px solid gray;
      &:focus{
      outline:1px solid black};
      border:none;
      }
     `
    :
    `border:1px solid ${Colors.Primary.red};
      &:focus{
      outline:none;
      }
     `
  }


  
  @media(${device.laptop}){
    width:55%;
  }
`