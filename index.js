import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Example AuroraButton component
const AuroraButtonStyled = styled(motion.button)`
  background: linear-gradient(45deg, #89f7fe, #66a6ff);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const AuroraButton = ({ children, ...props }) => {
  return (
    <AuroraButtonStyled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} {...props}>
      {children}
    </AuroraButtonStyled>
  );
};

export { AuroraButton };
