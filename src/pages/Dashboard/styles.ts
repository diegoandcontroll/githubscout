import styled, {css} from 'styled-components';
import {shade} from 'polished';
interface FormProps {
  hasError: boolean;
}
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 50px;
  max-width: 450px;
  margin-top: 80px;
`;
export const Image = styled.img`
  @media (max-width: 800px){
    margin-top: 40px;
  }
`;
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    ${(props) => props.hasError && css`
      border-color: #c53030;
    `};
    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 70px;
    background: #4A4063;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    text-align: center;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover{
      background: ${shade(0.2, '#4A4063')}
    }
    i{
      text-align: center;
      margin-right: 5px;
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
export const Repositories = styled.div`
  margin-top: 30px;
  max-width: 700px;
  @media (max-width: 800px){
    max-width: 400px;
  }
  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    & + a{
      margin-top: 16px;
    }
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover{
      transform: translateX(15px);
    }

    img{
      width: 86px;
      height: 86px;
      border-radius: 50%    
    }

    div{
      margin-left:0 16px;
      flex: 1;

      strong{
        margin-left: 12px;
        font-size: 20px;
        color: #3d3d4d;
        text-align: center;
      }

      p{
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
        margin-left: 12px;
      }
    }
    svg{
      margin-left: auto;
    }
  }
`;