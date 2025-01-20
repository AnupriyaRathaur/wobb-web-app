// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Text>© 2025 MyApp. All rights reserved.</Text>
      
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
   background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  position: relative;  /* Relative positioning */
  bottom: 0;           /* Sticks to the bottom */
  width: 100%;         /* Ensures it spans the entire width */
`;

const Text = styled.p`
  margin: 0.5rem 0;
`;