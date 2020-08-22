import React from 'react'
import PropTypes from 'prop-types'

import { Typography, IconButton, AppBar } from '@material-ui/core'

import { StyledMobileMenuHeader } from './styles'

const MobileMenuHeader = (props) => {
  const { children, leftIcon, onLeftIconClick, title, rightElement } = props

  return (
    <StyledMobileMenuHeader>
      <AppBar className="core_MobileMenuHeader_head">
        {leftIcon && (
          <IconButton
            className="core_MobileMenuHeader_leftButton"
            onClick={onLeftIconClick}
          >
            {leftIcon}
          </IconButton>
        )}

        {title && (
          <Typography
            variant="h1"
            className="core_MobileMenuHeader_title"
            unselectable="on"
          >
            {title}
          </Typography>
        )}

        {rightElement && (
          <div className="core_MobileMenuHeader_rightElement">
            {rightElement}
          </div>
        )}
      </AppBar>

      <div className="core_MobileMenuHeader_content">{children}</div>
    </StyledMobileMenuHeader>
  )
}

MobileMenuHeader.propTypes = {
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  onLeftIconClick: PropTypes.func,
  rightElement: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

MobileMenuHeader.defaultProps = {
  leftIcon: null,
  onLeftIconClick: () => {},
  rightElement: null,
  title: '',
}

export default MobileMenuHeader
