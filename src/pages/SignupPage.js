import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const AuthForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;

const LinkText = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #ff6f61;
  text-decoration: none;
`;

const SignupPage = () => {
  return (
    <AuthContainer>
      <AuthForm>
        <h2>Sign Up</h2>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Sign Up</Button>
        <LinkText to="/login">Already have an account? Login</LinkText>
      </AuthForm>
    </AuthContainer>
  );
};

export default SignupPage;