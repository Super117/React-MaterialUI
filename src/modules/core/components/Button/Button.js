import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ children, type, isSubmitting, ...restProps }) => {
  return (
    <StyledButton {...restProps} type={type} disabled={isSubmitting}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: '',
  isSubmitting: false,
};

Button.propTypes = {
  type: PropTypes.string,
  isSubmitting: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default Button;
