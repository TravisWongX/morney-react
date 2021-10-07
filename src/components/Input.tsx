import styled from 'styled-components';
import React from 'react';

const Label = styled.label`
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px; white-space: nowrap;
    }
    > input {
    display: block;
    height: 44px;
    width: 100%;
    background: none;
    border: none;
  }
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest} />
    </Label>
  );
};
export {Input};