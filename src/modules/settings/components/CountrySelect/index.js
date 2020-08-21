import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import qs from 'query-string'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterSelect from 'modules/tickets/components/TicketsPage/FilterSelect'

import MenuItem from 'modules/core/components/MenuItem'
import {
    StyledSelect
} from './styles';
import Countries from 'modules/settings/locale/countries';

const countries = Countries;

const CountrySelect = () => {
  const { formatMessage } = useIntl()

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { country } = parsedQueryStrings

  const changeCountry = (newCountry) => {
    const newQueryStrings = {
      ...parsedQueryStrings,
      country: newCountry,
    }

    if (!newCountry) {
      delete newQueryStrings.Country
    }

    history.push({
      search: qs.stringify(newQueryStrings),
    })
  }

  return (
      <StyledSelect>

        <FilterSelect
        icon={<FontAwesomeIcon icon={['far', 'globe']} />}
        placeholder={formatMessage({
            id: 'settings.edit.country',
            defaultMessage: 'Country',
        })}
        value={country}
        >
        {(closeDropdown) => (
            <div>
            <MenuItem
                text={formatMessage({
                id: 'settings.edit.country',
                defaultMessage: 'Country',
                })}
                selected={!country}
                withSelectionIcon
                onClick={() => {
                changeCountry(null)
                closeDropdown()
                }}
            />

            {countries.map((item) => {
                const isSelected = country === item.name

                return (
                <MenuItem
                    key={item.name}
                    text={item.name}
                    selected={isSelected}
                    withSelectionIcon
                    onClick={() => {
                    changeCountry(item.name)
                    closeDropdown()
                    }}
                />
                )
            })}
            </div>
        )}
        </FilterSelect>
      </StyledSelect>
  )
}

export default CountrySelect
