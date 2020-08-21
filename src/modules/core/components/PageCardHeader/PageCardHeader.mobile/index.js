import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import {
    StyledAppBar,
    StyledToolbar,
    StyledTypography,
    StyledLink,
    StyledAnchorToolbar
} from './styles';

const MobilePageCardHeader = (props) => {
    const {children} = props;

    return (
    <>
        <StyledAppBar >
            <StyledToolbar>
                <StyledLink href="#">
                    <FontAwesomeIcon icon={['fal', 'arrow-left']}></FontAwesomeIcon>
                </StyledLink>
                <StyledTypography>{children}</StyledTypography>
            </StyledToolbar>
        </StyledAppBar>
        <StyledAnchorToolbar />
    </>
    )
}

MobilePageCardHeader.propTypes = {
    children: PropTypes.string.isRequired
}

export default MobilePageCardHeader