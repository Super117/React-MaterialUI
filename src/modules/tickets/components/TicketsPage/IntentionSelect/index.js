import React from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../FilterSelect'

const intents = [
  {
    name: 'intent 1',
  },
  {
    name: 'intent 2',
  },
]

const IntentionSelect = (props) => {
  const { formatMessage } = useIntl()
  const { intent, onSelect } = props

  return (
    <FilterSelect
      icon={<FontAwesomeIcon icon={['far', 'bullseye-arrow']} />}
      placeholder={formatMessage({
        id: 'tickets.any.intent',
        defaultMessage: 'any intent',
      })}
      value={intent}
    >
      {(closeDropdown) => (
        <div>
          <MenuItem
            text={formatMessage({
              id: 'tickets.any.intent',
              defaultMessage: 'any intent',
            })}
            selected={!intent}
            withSelectionIcon
            width={194}
            onClick={() => {
              onSelect(null)
              closeDropdown()
            }}
          />

          {intents.map((item) => {
            const isSelected = intent === item.name

            return (
              <MenuItem
                key={item.name}
                text={item.name}
                selected={isSelected}
                width={194}
                withSelectionIcon
                onClick={() => {
                  onSelect(item.name)
                  closeDropdown()
                }}
              />
            )
          })}
        </div>
      )}
    </FilterSelect>
  )
}

IntentionSelect.propTypes = {
  intent: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

IntentionSelect.defaultProps = {
  intent: null,
}

export default IntentionSelect
