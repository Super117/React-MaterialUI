import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledSelect = styled.div`
  height: 56px;
  color: #486581;
  background-color: #F5F5F5;
  width: 100%;
  
  & .MuiButton-root {
      width: 100%;
      height: 56px;
    }

  & .MuiButtonBase-root {
    background-color: #F5F5F5;
  }

  & .tickets_FilterSelect_arrow {
    position: absolute;
    right: 3%;
  }

  & .MuiButton-label {
      display: flex;
      justify-content: flex-start;
      margin-left: 2.5%;
  }

  & .tickets_FilterSelect_icon {
    & .fa-globe {
        color: #9E9E9E;
        font-size: 20px;
        @media ${mediaQueries.small}{
          font-size: 16px;
        }

    }  
  }

  & .hTVegH {
    height: 60px;
    @media ${mediaQueries.small}{
      height: 56px;
    }
  }
  


`
