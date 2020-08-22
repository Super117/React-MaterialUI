import React from 'react';
import PropTypes from 'prop-types';

import { Link as LinkButton } from 'modules/core/components';
import { StyledTypography, StyledBreadcrumbs } from './styles';

const Breadcrumbs = (props) => {
    const { breadcrumbs, children } = props;

    return (
        <StyledBreadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((breadcrumb) => (
                <LinkButton href="/" key={breadcrumb.text} >
                    {breadcrumb.text}
                </LinkButton>
            ))}
            <StyledTypography >{children}</StyledTypography>
        </StyledBreadcrumbs>

    )
}

Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.string.isRequired
}

export default Breadcrumbs;