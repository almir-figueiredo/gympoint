import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from '@rocketseat/unform';
import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #dcdcdc;
  }
  body, input, button {
    font:  14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  background: #fff;
  border-radius: 4px;
`;

export const Table = styled.table`
  flex: 1;
  display: table;
  border-collapse: separate;

  thead th {
    text-align: left;
    color: #444;
    font-weight: bold;
    font-size: 16px;
    padding: 20px 10px;
    border-bottom: 1px solid #eee;

    &:nth-child(n + 2) {
      text-align: center;
    }
  }

  tbody td {
    padding: 20px 10px;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #eee;

    &:nth-child(n + 2) {
      text-align: center;
    }

    &:nth-child(4) {
    }

    button {
      margin: 0 10px;
      border: 0;
      background-color: #fff;
    }

    .edit {
      color: ${colors.btnPrimary};
    }
    .delete {
      color: ${colors.btnSecondary};
    }
  }
`;

export const Unform = styled(Form)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 30px 30px 10px 14px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-bottom: 20px;
  }

  strong {
    font-size: 14px;
    color: #444444;
    margin-bottom: 5px;
  }

  span {
    color: red;
  }

  input {
    background: #ffffff;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #dddddd;

    font-size: 16px;
    color: #666666;
    padding-left: 15px;

    &:focus {
      border-color: #7159c1 !important;
    }

    &:disabled {
      background-color: #dcdcdc;
    }
  }

  .fullSize {
    grid-column: 1/4;
  }
`;
