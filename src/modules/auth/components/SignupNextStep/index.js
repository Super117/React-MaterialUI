import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { Checkbox, FormGroup, FormControlLabel, FormControl } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'assets/images/main/logo.svg'

import { authRoutes } from 'modules/auth/routes/constants';

import { TextInput, Button, Link as LinkButton } from 'modules/core/components'

import {
  StyledMain,
  StyledRoot,
  StyledLogo,
  StyledTypography,
  StyledWrapper,
  StyledIcon,
  StyledButton,
  StyledForm,
  StyledDomain,
  StyledAgree,
  StyledCardTemplate,
  StyledCardWrap,
  StyledCvvText,
  StyledDateText,
  StyledZipText,
  StyledCardText,
  StyledFreeTrialWrap,
  StyledTextWrap,
  StyledBoxWrap,
  StyledFeature,
  StyledFreeTrial,
  StyledWrapCardDetail,
  StyledSpanChargeText,
  StyledSpanPerMonth,
  StyledValidationWrapper,
  StyledValidation
} from './styles'


const mask = userInput => {
  const numbers = userInput.match(/\d/g)
  const numberLength = (numbers && numbers.join('').length) || 0
  return numberLength > 0 ? [/[0-9]/,/[0-9]/,'/',/[0-9]/,/[0-9]/] : []
}

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const SignupNextStep = () => {
  const [isAgreed, setAgreed] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const { formatMessage } = useIntl();

  const validationSchema = Yup.object().shape({
    deskURL: Yup.string()
      .required(formatMessage({
        id: 'auth.signup2.deskURL.validation2',
        defaultMessage: 'URL is required',
      })),

    password: Yup.string()
      .required(formatMessage({
        id: 'auth.signup2.password.validation1',
        defaultMessage: 'Password is required',
      })).min(8, formatMessage({
        id: 'auth.login.password.validation1',
        defaultMessage: 'Password must contain at least 8 characters',
      })),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], formatMessage({
        id: 'auth.signup2.cpassword.validation2',
        defaultMessage: 'Confirm password should match with password',
      })),

    card: Yup.string()
      .required(formatMessage({
        id: 'auth.signup2.card.validation1',
        defaultMessage: 'Enter your card number',
      })).matches(/^\d{16}$/, formatMessage({
        id: 'auth.signup2.card.validation2',
        defaultMessage: 'Verify your card number',
      })),

    date: Yup.string()
      .required(formatMessage({
        id: 'auth.signup2.date.validation',
        defaultMessage: 'Enter a valid expiration date',
      })).matches(/^[0-1][0-9]\/[0-9][0-9]$/, formatMessage({
        id: 'auth.signup2.date.validation',
        defaultMessage: 'Enter a valid expiration date',
      })),

    cvc: Yup.string()
      .required(formatMessage({
        id: 'auth.signup2.cvc.validation1',
        defaultMessage: 'Enter your CVC',
      })).matches(/^\d{3}$/, formatMessage({
        id: 'auth.signup2.cvc.validation2',
        defaultMessage: 'Verify your CVC',
      })),

    zipcode: Yup.string()
      .required(formatMessage({
        id: 'auth.signup2.zipcode.validation1',
        defaultMessage: 'Enter your zip-code',
      })).matches(/^\d{5,6}$/, formatMessage({
        id: 'auth.signup2.zipcode.validation2',
        defaultMessage: 'Enter a valid zip code',
      })),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = () => {
    // TODO: signup step2 stuff
  }

  return (
    <StyledMain>
      <StyledRoot>
        <StyledLogo>
          <Link to={authRoutes.signupNextStep}>
            <img src={logo} alt="" width="100%" height="100%" />
          </Link>
        </StyledLogo>
        <StyledTypography>
          {formatMessage({
            id: 'auth.signup.title',
            defaultMessage: 'Get your free trial account now ',
          })}
        </StyledTypography>
        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="deskURL"
              type="text"
              label={formatMessage({
                id: 'auth.signup2.deskURL',
                defaultMessage: 'Choose Your Help Desk URL',
              })}
              name='deskURL'
              reference={register}
              inputError={errors.deskURL && errors.deskURL.message}
              IconStart={<FontAwesomeIcon icon={['far', 'globe']} />}
              IconEnd={<StyledDomain>.zaphello.com</StyledDomain>}
            />

            <TextInput
              id="companyName"
              type="text"
              label={formatMessage({
                id: 'auth.signup2.companyName',
                defaultMessage: 'Company Name',
              })}
              name='companyName'
              IconStart={<FontAwesomeIcon icon={['far', 'building']} />}
              IconEnd={<StyledIcon>({formatMessage({
                id: 'auth.signup2.optionalField',
                defaultMessage: 'optional',
              })})</StyledIcon>}
            />

            <TextInput
              id="password"
              type={passwordShown ? "text" : "password"}
              label={formatMessage({
                id: 'auth.signup2.password',
                defaultMessage: 'Choose a Password',
              })}
              name='password'
              reference={register}
              inputError={errors.password && errors.password.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={<StyledIcon><FontAwesomeIcon onClick={() => setPasswordShown(!passwordShown)} icon={['far', passwordShown ? 'eye' : 'eye-slash']} /></StyledIcon>}
            />

            <TextInput
              id="confirmPassword"
              type={confirmPasswordShown ? "text" : "password"}
              label={formatMessage({
                id: 'auth.signup2.confirmPassword',
                defaultMessage: 'Confirm Password',
              })}
              name='confirmPassword'
              reference={register}
              inputError={errors.confirmPassword && errors.confirmPassword.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={<StyledIcon><FontAwesomeIcon onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} icon={['far', confirmPasswordShown ? 'eye' : 'eye-slash']} /></StyledIcon>}
            />

            <StyledCardTemplate>
              <StyledBoxWrap>
                <StyledFreeTrialWrap>
                  <StyledFreeTrial>Start Your 2-week Free Trial</StyledFreeTrial>
                  <StyledFeature><FontAwesomeIcon icon={['fas', 'check-circle']} />All Features Included </StyledFeature>
                </StyledFreeTrialWrap>
                <StyledTextWrap>
                  <StyledSpanChargeText>You won’t be charged today</StyledSpanChargeText>
                  <StyledSpanPerMonth>$29 per agent/month if you don’t cancel in 2 weeks</StyledSpanPerMonth>
                </StyledTextWrap>
              </StyledBoxWrap>
              <StyledCardWrap error={errors.card || errors.date || errors.cvc || errors.zipcode}>
                <StyledCardText error={errors.card}>
                  <TextInput
                    id="card"
                    type="text"
                    label={formatMessage({
                      id: 'auth.signup2.cardno',
                      defaultMessage: 'Card Number',
                    })}
                    isDisplayError={false}
                    inputError={errors.card && errors.card.message}
                    name='card'
                    reference={register}
                    IconStart={<FontAwesomeIcon icon={['fas', 'credit-card-front']} />}
                  />
                </StyledCardText>
                <StyledWrapCardDetail>
                  <StyledDateText error={errors.date}>
                    <TextInput
                      id="date"
                      type="text"
                      label={formatMessage({
                        id: 'auth.signup2.date',
                        defaultMessage: 'MM/YY',
                      })}
                      isDisplayError={false}
                      inputError={errors.date && errors.date.message}
                      name='date'
                      reference={register}
                      InputProps={{inputComponent: TextMaskCustom}}
                    />
                  </StyledDateText>
                  <StyledCvvText error={errors.cvc}>
                    <TextInput
                      id="cvc"
                      type="text"
                      label={formatMessage({
                        id: 'auth.signup2.cvc',
                        defaultMessage: 'CVC',
                      })}
                      isDisplayError={false}
                      inputError={errors.cvc && errors.cvc.message}
                      name='cvc'
                      reference={register}
                    />
                  </StyledCvvText>
                  <StyledZipText error={errors.zipcode}>
                    <TextInput
                      id="zipcode"
                      type="text"
                      label={formatMessage({
                        id: 'auth.signup2.zipcode',
                        defaultMessage: 'Zip Code',
                      })}
                      isDisplayError={false}
                      inputError={errors.zipcode && errors.zipcode.message}
                      name='zipcode'
                      reference={register}
                    />
                  </StyledZipText>
                </StyledWrapCardDetail>
              </StyledCardWrap>
            </StyledCardTemplate>

            <StyledValidationWrapper>
              <StyledValidation>{errors.card && errors.card.message}</StyledValidation>
              <StyledValidation>{errors.date && errors.date.message}</StyledValidation>
              <StyledValidation>{errors.cvc && errors.cvc.message}</StyledValidation>
              <StyledValidation>{errors.zipcode && errors.zipcode.message}</StyledValidation>
            </StyledValidationWrapper>

            <StyledWrapper>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={isAgreed} onClick={() => setAgreed(!isAgreed)} />}
                  />
                </FormGroup>
              </FormControl>

              <StyledAgree>{formatMessage({
                id: 'auth.signup2.agree',
                defaultMessage: 'I agree to the',
              })}
              </StyledAgree>

              <LinkButton href="https://www.facebook.com/zaphello.phello">
                {formatMessage({
                  id: 'auth.signup2.term',
                  defaultMessage: 'Terms and Conditions',
                })}
              </LinkButton>
            </StyledWrapper>

            <StyledButton>
              <Button type="submit">
                {formatMessage({
                  id: 'auth.signup.signup',
                  defaultMessage: 'Create Account',
                })}
              </Button>
            </StyledButton>
          </form>
        </StyledForm>
      </StyledRoot>
    </StyledMain >
  );
}

export default SignupNextStep;
