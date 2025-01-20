import React from 'react';
import styled from 'styled-components';

const FormInput = ({ label, type, value, onChange, placeholder, name }) => {
  return (
    <InputContainer>
      <Label>{label}</Label> {/* Using the styled Label component */}
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      /> {/* Using the styled Input component */}
    </InputContainer>
  );
};

export default FormInput;

// Styled Components
const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;