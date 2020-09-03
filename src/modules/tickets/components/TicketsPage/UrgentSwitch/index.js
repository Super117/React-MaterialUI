import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FormattedMessage } from 'react-intl'
import { StyledSelectButton } from './style'

const UrgentSwitch = (props) => {
  const { isActive, onChange } = props

  return (
    <StyledSelectButton variant="text" $isActive={isActive} onClick={onChange}>
      <div className="tickets_UrgentSwitch_icon">
        {isActive ? (
          <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} />
        ) : (
          <FontAwesomeIcon icon={['far', 'exclamation-triangle']} />
        )}
      </div>

      <div className="tickets_UrgentSwitch_text">
        <FormattedMessage id="tickets.urgent" defaultMessage="urgent" />
      </div>
    </StyledSelectButton>
  )
}

UrgentSwitch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default UrgentSwitch
