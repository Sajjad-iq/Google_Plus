import styled from "styled-components";

interface Props {
    isLastOne: boolean
}
export const Button = styled.button<Props>`
background: none;
color: gray;
padding:5px 10px;
display: flex;
justify-content: center;
align-items: center;
width:100px;
border:none;
font-family: 'Raleway', sans-serif;
font-weight: 600;
${p => p.isLastOne ?
        `border:unset;`
        :
        `border-bottom: 1px solid gray;`
    }

    &:active{
          opacity: 0.8;
    }
`