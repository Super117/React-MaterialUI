import React from "react";
import { useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery} from '@material-ui/core'

import CountrySelect from 'modules/settings/components/CountrySelect';
import Breadcrumbs from 'modules/core/components/Breadcrumbs';
import PageCardHeader from 'modules/core/components/PageCardHeader';
import { TextInput, Button } from 'modules/core/components'

import { 
    StyledMain, 
    StyledRoot,
    StyledContainer,
    StyledForm,
    StyledWrap,
    StyledCName,
    StyledAName,
    StyledIcon,
    StyledCardWrap,
    StyledZipeCode,
    StyledState,
    StyledCity,
    StyledButton
 } from './styles';

const EditBillingInfo = (props) => {
    const { formatMessage } = useIntl()
    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const breadcrumbs = [
        {
            text: "SETTINGS",
            disabled: false
        },
        {
            text: "BILLING AND PLANDS",
            disabled: false
        }
    ];

    return (
        <StyledMain>
            <StyledRoot>
                {!isMobileScreen && 
                    <Breadcrumbs 
                        breadcrumbs={breadcrumbs} 
                        children={`${formatMessage({
                            id: 'settings.edit.billing.info',
                            defaultMessage: 'EDIT BILLING INFO',
                        })}`}
                    />
                }
                <StyledContainer>
                    <PageCardHeader 
                        children={`${formatMessage({
                            id: 'settings.edit.billing.infoLower',
                            defaultMessage: 'Edit Billing Info',
                        })}`}                            
                        ></PageCardHeader>
                    <StyledForm>
                        <form onSubmit={() => {}}>
                            <StyledWrap>
                                <StyledCName>
                                    <TextInput
                                        id="companyName"
                                        type="text"
                                        name='companyName'
                                        label={`${formatMessage({
                                            id: 'settings.edit.companyName',
                                            defaultMessage: 'company Name',
                                        })}`}
                                        IconStart={<FontAwesomeIcon icon={['far', 'building']} />}

                                    />
                                </StyledCName>
                                <StyledAName>
                                    <TextInput
                                        id="attName"
                                        type="text"
                                        name='attnName'
                                        label={`${formatMessage({
                                            id: 'settings.edit.attnName',
                                            defaultMessage: 'Attn Name',
                                        })}`}
                                        IconStart={<FontAwesomeIcon icon={['fal', 'user']} />}
                                        IconEnd={<StyledIcon>({formatMessage({
                                            id: 'settings.edit.optional',
                                            defaultMessage: 'optional',
                                          })})</StyledIcon>}
                                    />
                                </StyledAName>
                            </StyledWrap>
                            <StyledWrap>
                                <StyledCName>
                                    <TextInput
                                        id="billingEmail"
                                        type="text"
                                        name='billingEmail'
                                        label={`${formatMessage({
                                            id: 'settings.edit.billingEmail',
                                            defaultMessage: 'Billing Email',
                                        })}`}
                                        IconStart={<FontAwesomeIcon icon={['fal', 'envelope']} />}

                                    />
                                </StyledCName>
                                <StyledAName>
                                    <TextInput
                                        id="phoneNumber"
                                        type="text"
                                        name='phoneNumber'
                                        label={`${formatMessage({
                                            id: 'settings.edit.phoneNumber',
                                            defaultMessage: 'Phone Number',
                                        })}`}
                                        IconStart={<FontAwesomeIcon icon={['fal', 'mobile-android-alt']} />}

                                    />
                                </StyledAName>
                            </StyledWrap>
                            <TextInput
                                id="address1"
                                type="text"
                                name='address1'
                                label={`${formatMessage({
                                    id: 'settings.edit.address1',
                                    defaultMessage: 'Address(line1)',
                                })}`}
                                IconStart={<FontAwesomeIcon icon={['fas', 'map-marker-alt']} />}
                                
                                />
                            <TextInput
                                id="address2"
                                type="text"
                                name='address2'
                                label={`${formatMessage({
                                    id: 'settings.edit.address2',
                                    defaultMessage: 'Address(line2)',
                                })}`}
                                IconStart={<FontAwesomeIcon icon={['fas', 'map-marker-alt']} />}

                            />
                            <CountrySelect />
                            <StyledCardWrap>
                                <StyledZipeCode>
                                    <TextInput
                                        id="zipeCode"
                                        type="text"
                                        label={formatMessage({
                                        id: 'settings.edit.zipeCode',
                                        defaultMessage: 'Zipe Code',
                                        })}
                                        isDisplayError={false}
                                        inputError=""   
                                        IconStart={<FontAwesomeIcon icon={['fas', 'credit-card-front']} />}
                                        name='zipeCode'
                                    />
                                </StyledZipeCode>
                                <StyledState>
                                    <TextInput
                                        id="state"
                                        type="text" 
                                        label={formatMessage({
                                        id: 'settings.edit.state',
                                        defaultMessage: 'State',
                                        })}
                                        isDisplayError={false}
                                        inputError=""   
                                        name='state'
                                    />
                                </StyledState>
                                <StyledCity>
                                    <TextInput
                                        id="city"
                                        type="text"
                                        label={formatMessage({
                                        id: 'settings.edit.city',
                                        defaultMessage: 'City',
                                        })}
                                        isDisplayError={false}
                                        inputError=""  
                                        name='city'
                                    />
                                </StyledCity>
                            </StyledCardWrap>
                            <StyledButton>
                                <Button type="submit">
                                    {formatMessage({
                                    id: 'setting.edit.saveChanges',
                                    defaultMessage: 'Save Changes',
                                    })}
                                </Button>
                            </StyledButton>
                        </form>
                    </StyledForm>
                </StyledContainer>
            </StyledRoot>
        </StyledMain>
    )
}

export default EditBillingInfo;