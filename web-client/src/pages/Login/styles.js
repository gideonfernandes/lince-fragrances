import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 4rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div`
    font-size: 4rem;
    color: #FFF;
    margin: 3rem auto;

    p {
    	font-style: italic;
    	font-weight: 400;
    }

    p > span{
    	font-family: Srisakdi, sans-serif;
    	font-weight: 300;
    }
`;

export const FormContainer = styled.section`
    flex: 1;
    align-self: center;
    background-color: #fff;
    margin: 0 8px;
    padding: 30px;
    border-radius: 5px;

  h1 {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 30px;
      font-weight: 400;
  }

  h1 > strong {
      font-weight: 700;
      color: #333;
  }

  form {
      display: flex;
      flex-direction: column;
  }

  form label {
      font-size: 14px;
      font-weight: 700;
      color: #444;
      margin-bottom: 8px;
  }

  form label span {
      font-weight: normal;
      font-size: 12px;
      color: #999;
      margin-left: 8px;
  }

  form input {
      font-size: 16px;
      margin-bottom: 20px;
      padding: 0 15px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 45px;
  }

  button.btn {
      border: 0;
      border-radius: 2px;
      width: 100%;
      height: 42px;
      padding: 0 20px;
      font-size: 18px;
      color: #fff;
      background-color: #AA6C39;
      cursor: pointer;
  }

  button.btn:hover {
      background-color: #e14f50;
  }
`;
