import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";


export const SignInSection = styled.section`
 width: 90%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;

 @media ${device.tablet} {
   width: 65%;
   border-radius: 10px;
   border: 1px solid ${Colors.Primary.Lightgray};
   padding:20px;

}
@media ${device.laptop} {
   width: 40%;
}

`