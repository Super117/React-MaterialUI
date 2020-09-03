import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { times, TimesEnum } from 'modules/tickets/utils/timeSelectHelpers'

import MobileMenuHeader from 'modules/core/components/MobileMenuHeader'
import MobileSelectItem from 'modules/core/components/MobileSelectItem'
import DatePicker from './DatePicker'

import { StyledSubmitButton } from './styles'

const { CUSTOM_RANGE } = TimesEnum

const TimeMenu = (props) => {
  const {
    time,
    startDate,
    endDate,
    setTime,
    setStartDate,
    setEndDate,
    onBackClick,
  } = props

  const [isDatePickerVisible, showDatePicker] = useState(false)

  const { formatMessage } = useIntl()

  const changeHandler = useCallback(
    (newTime, newStartDate, newEndDate) => {
      setTime(newTime)
      setStartDate(newStartDate)
      setEndDate(newEndDate)
    },
    [setEndDate, setStartDate, setTime]
  )

  return (
    <MobileMenuHeader
      leftIcon={<FontAwesomeIcon icon={['far', 'arrow-left']} />}
      onLeftIconClick={onBackClick}
      title="Time"
      rightElement={
        isDatePickerVisible && (
          <StyledSubmitButton
            variant="contained"
            color="primary"
            onClick={() => {
              changeHandler(CUSTOM_RANGE, startDate, endDate)
              onBackClick()
            }}
          >
            {formatMessage({
              id: 'tickets.apply',
              defaultMessage: 'apply',
            })}
          </StyledSubmitButton>
        )
      }
    >
      {isDatePickerVisible ? (
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      ) : (
        <>
          <MobileSelectItem
            title={formatMessage({
              id: 'tickets.any.time',
              defaultMessage: 'any time',
            })}
            isSelected={!time}
            onClick={() => {
              changeHandler(null)
              onBackClick()
            }}
          />

          {times.map((item) => (
            <MobileSelectItem
              key={item.id}
              title={item.name}
              isSelected={time === item.id}
              onClick={() => {
                changeHandler(item.id)
                onBackClick()
              }}
            />
          ))}

          <MobileSelectItem
            title={`${formatMessage({
              id: 'tickets.custom.range',
              defaultMessage: 'custom range',
            })}...`}
            isSelected={time === CUSTOM_RANGE}
            onClick={() => {
              showDatePicker(true)
              window.scrollTo({ top: 0 })
            }}
          />
        </>
      )}
    </MobileMenuHeader>
  )
}

TimeMenu.propTypes = {
  time: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setTime: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
}

TimeMenu.defaultProps = {
  startDate: null,
  endDate: null,
}

export default TimeMenu
