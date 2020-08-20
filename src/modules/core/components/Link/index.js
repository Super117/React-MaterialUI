import React  from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './styles';

const Link = ({ onClick, children, isButton, href }) => {
    return (
      <StyledLink
        id="link"
        onClick={onClick}
        {...(isButton
          ? { component: 'button' }
          : { href, target: '_blank', rel: 'noopener' })}
      >
        {children}
      </StyledLink>
    )
  }

Link.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  isButton: PropTypes.bool,
  href: PropTypes.string
}

Link.defaultProps = {
  onClick: () => {},
  children: <></>,
  isButton: false,
  href: '',
}

export default Link;
