import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  max-width: 280px;
  width: 100%;
  background: #2b2b2b;
  padding: 40px 20px;
  min-height: 100vh;
  height: auto;

  p{
    color: #f2f2f2;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 20px;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input{
    padding: 10px 20px;
    background: #000;
    -webkit-box-shadow: inset 0px 0px 23px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 23px 5px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 23px 5px rgba(0,0,0,0.75);
    border: 0;
    color: #f2f2f2;

    & + input {
      margin-top: 15px;
    }
  }

  button {
      padding: 5px 20px;
      color: #f2f2f2;
      background: #02aaff;
      border: 0;
      border-radius: 5px;
      margin-top: 15px;
      font-size: 18px;

      &:hover {
        background: ${shade(0.1, '#02aaff')};
      }
    }

`;

export const Content = styled.div`
  flex: 1;
`;

export const ContentHeader = styled.div`
    padding: 20px 40px;
    background: #ccc;
    height: 20vh;
    max-height: 117px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
      font-family: Roboto, sans-serif;
      font-weight: 300;
      font-size: 35px;
    }

    button{
      background: #0072ac;
      color: #f2f2f2;
      border: 0;
      font-size: 16px;
      padding: 10px 15px;

      &:hover {
        background: ${shade(0.1, '#0072ac')};
      }
    }
`;

export const ContentText = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p + p {
    margin-top: 15px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 120px;
      height: 120px;
      color: #2b2b2b;
    }

    p {
      font-size: 18px;
      font-family: Roboto, sans-serif;
    }
  }
`;