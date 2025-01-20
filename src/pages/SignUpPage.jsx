import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../components/FormInput'; // Ensure FormInput is correctly implemented

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert(`Sign Up Successful\nName: ${formData.name}\nEmail: ${formData.email}`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Title>Sign Up</Title>
        <FormInput
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          name="name"
        />
        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          name="password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
        <FooterText>
          Already have an account? <a href="/signin">Sign In</a>
        </FooterText>
      </Form>
    </Container>
    
  );
};

export default SignUpPage;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const FooterText = styled.p`
  margin-top: 1rem;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;