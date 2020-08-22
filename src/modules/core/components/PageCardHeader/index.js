import React from 'react';
import { useMediaQuery } from '@material-ui/core'

import DesktopPageCardHeader from 'modules/core/components/PageCardHeader/PageCardHeader.desktop';
import MobilePageCardHeader from 'modules/core/components/PageCardHeader/PageCardHeader.mobile';

const PageCardHeader = ({ children }) => {
    
    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return !isMobileScreen ? <DesktopPageCardHeader children = {children} /> : <MobilePageCardHeader children = {children} />

}

export default PageCardHeader