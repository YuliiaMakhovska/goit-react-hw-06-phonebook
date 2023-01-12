import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: black;
  font-size: 18px;
  cursor: pointer;
  p {
    margin: 10px;
  }
`;
export const FieldStyled = styled(Field)`
  margin: 10px;
  height: 25px;
  width: 220px;
  border: 1px solid #030e1845;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  heigth: 25px;
  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  &:hover,
  &:focus {
    outline: 0;
    background: #f4e603;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }
`;
