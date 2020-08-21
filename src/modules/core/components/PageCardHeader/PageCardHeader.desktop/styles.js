import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export const StyledDesktopPageCardHeader = styled.div`
    height: 92px;
    padding: 34px 32px;
    display: flex;
    border-bottom: 1px solid #e0dfe3;
`;

export const StyledLink = styled(Link)`
    width: 18px;
    height: 20px;
    color: #9FB3C8;
    font-size: 20px;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
`;

export const StyledTypography = styled(Typography)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    margin-left: 16px;
`;

