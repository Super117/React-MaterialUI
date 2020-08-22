import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledMobileMenuHeader = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;

  @media ${mediaQueries.small} {
    width: 414px;
  }

  .core_MobileMenuHeader_head {
    width: 100vw;
    height: 72px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    padding: 26px 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${mediaQueries.small} {
      width: 414px;
    }
  }

  .core_MobileMenuHeader_leftButton {
    position: absolute;
    top: 50%;
    left: 12px;
    right: auto;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    line-height: 20px;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .core_MobileMenuHeader_title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  .core_MobileMenuHeader_rightElement {
    position: absolute;
    top: 50%;
    left: auto;
    right: 12px;
    transform: translateY(-50%);

    & > * {
      color: ${(props) => props.theme.colors.white};
    }
  }

  .core_MobileMenuHeader_content {
    background-color: ${(props) => props.theme.colors.white};
    padding-top: 72px;
  }
`
