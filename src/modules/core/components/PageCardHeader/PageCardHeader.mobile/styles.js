import styled from 'styled-components';

import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';

export const StyledToolbar = styled(Toolbar)`
    height: 72px;
`;

export const StyledAppBar = styled(AppBar)`
    background-color: #495C90;
`;

export const StyledLink = styled(Link)`
    width: 18px;
    height: 20px;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
`;

export const StyledTypography = styled(Typography)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    color: #fff;
    font-size: 21px;
    line-height: 21px;
    margin-left: 16px;
`;

export const StyledAnchorToolbar = styled(Toolbar)`
    margin-top: 16px;
`;