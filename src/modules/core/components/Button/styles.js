import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
    width: 100%;
    height: 48px;
    border-radius: 0px;
    text-transform: none;
    background: ${(props) => props.theme.colors.primary} !important;
    & .MuiButton-label{
        color: ${(props) => props.theme.colors.white};
        font-size: 15px;
    }
`
