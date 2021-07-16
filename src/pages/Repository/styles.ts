import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 2s;
    &:hover{
      color: #666;
    }
    svg{
      margin: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header{
    display: flex;
    align-items: center;
    
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      @media (max-width: 800px){
        width: 80px;
        height: 80px;
      }
    }
    div{
      margin-left: 24px;

      strong{
        font-size: 36px;
        color: #3d3d4d;
        @media (max-width: 800px){
          font-size: 26px;
        }
      }

      p{
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;
    @media (max-width: 800px){
      li{
        max-width: 50px;
      }
    }
    li{
      & + li{
        margin-left: 80px;
      }
      strong{
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span{
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        text-align: center;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 30px;
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