import React from 'react'

import {
  useTicketsFilters,
  FiltersEnum,
} from 'modules/tickets/hooks/useTicketsFilters'

import CheckboxDropdown from '../CheckboxDropdown'
import ActionsDropdown from '../ActionsDropdown'
import MoodSelect from '../MoodSelect'
import UrgentSwitch from '../UrgentSwitch'
import IntentionSelect from '../IntentionSelect'
import TimeSelect from '../TimeSelect'

import { StyledTicketsFiltersHeader, StyledDivider } from './styles'

const { Urgent, Mood, Intent, Time, Start_Date, End_Date } = FiltersEnum

const TicketsFiltersHeader = () => {
  const { filters, setFilter } = useTicketsFilters({
    applyFiltersOnChange: true,
  })

  return (
    <StyledTicketsFiltersHeader>
      <div className="tickets_filtersHeader_list-actions">
        <CheckboxDropdown borderedCheckbox />

        <StyledDivider orientation="vertical" />

        <div className="tickets_filtersHeader_actions-dropdown">
          <ActionsDropdown />
        </div>

        <StyledDivider orientation="vertical" />
      </div>

      <div className="tickets_filtersHeader_list-filters">
        <div className="tickets_filtersHeader_mood-select">
          <MoodSelect
            mood={filters[Mood]}
            onSelect={(mood) => setFilter(Mood, mood)}
          />
        </div>

        <div className="tickets_filtersHeader_urgent-select">
          <UrgentSwitch
            isActive={filters[Urgent]}
            onChange={() => setFilter(Urgent, !filters[Urgent])}
          />
        </div>

        <div className="tickets_filtersHeader_intent-select">
          <IntentionSelect
            intent={filters[Intent]}
            onSelect={(intent) => setFilter(Intent, intent)}
          />
        </div>

        <div className="tickets_filtersHeader_time-select">
          <TimeSelect
            time={filters[Time]}
            startDate={filters[Start_Date]}
            endDate={filters[End_Date]}
            setTime={(time) => setFilter(Time, time)}
            setStartDate={(startDate) => setFilter(Start_Date, startDate)}
            setEndDate={(endDate) => setFilter(End_Date, endDate)}
          />
        </div>
      </div>
    </StyledTicketsFiltersHeader>
  )
}

export default TicketsFiltersHeader
