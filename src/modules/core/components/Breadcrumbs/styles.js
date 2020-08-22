import styled from 'styled-components'
import { Breadcrumbs, Typography } from '@material-ui/core';
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledBreadcrumbs = styled(Breadcrumbs)`
    padding: 24px 0;
    display:flex;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    @media ${mediaQueries.small} { 
        font-size: 13px;
    }
    & .MuiBreadcrumbs-separator{
        color: #E0E0E0;

    }
    & .MuiLink-root{
        line-height: 19px;
        text-align: right; 
        font-size: 16px;
        color: ${(props) => props.theme.colors.grey_blue};
        @media ${mediaQueries.small} { 
            font-size: 13px;
        }
    }
    
`;

export const StyledTypography = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    color: #BDBDBD;
    @media ${mediaQueries.small} { 
        font-size: 13px;
    }
`;
