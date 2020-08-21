import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { 
    StyledDesktopPageCardHeader,
    StyledLink,
    StyledTypography
} from './styles';

const DesktopPageCardHeader = (props) => {
    const {children} = props;

    return (
        <StyledDesktopPageCardHeader>
            <StyledLink href="#">
                <FontAwesomeIcon icon={['fal', 'arrow-left']}></FontAwesomeIcon>
            </StyledLink>
            <StyledTypography>{children}</StyledTypography>
        </StyledDesktopPageCardHeader>

    )
}

DesktopPageCardHeader.propTypes = {
    children: PropTypes.string.isRequired
}

export default DesktopPageCardHeader