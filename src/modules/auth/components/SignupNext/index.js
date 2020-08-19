import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { Checkbox, FormGroup, FormControlLabel, FormControl } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'assets/images/main/logo.svg'

import { authRoutes } from 'modules/auth/routes/constants';

import { TextInput, Button, Link as LinkButton} from 'modules/core/components'

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
  StyledAgree
} from './styles'

const SignupNext = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordVisible, showConfirmPassword] = useState(false);
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
      }))
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
          <Link to={authRoutes.signupNext}>
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
              IconEnd={<StyledDomain>{formatMessage({
                id: 'auth.signup2.auth.signup2.domain',
                defaultMessage: '.zaphello.com',
              })}</StyledDomain>}
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
                defaultMessage: 'Optional',
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
              type={confirmPasswordVisible ? "text" : "password"}
              label={formatMessage({
                id: 'auth.signup2.confirmPassword',
                defaultMessage: 'Confirm Password',
              })}
              name='confirmPassword'
              reference={register}
              inputError={errors.confirmPassword && errors.confirmPassword.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={<StyledIcon><FontAwesomeIcon onClick={() => showConfirmPassword(!confirmPasswordVisible)} icon={['far', confirmPasswordVisible ? 'eye' : 'eye-slash']} /></StyledIcon>}
            />
            <StyledWrapper>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
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

export default SignupNext;
