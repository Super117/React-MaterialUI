import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
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
  StyledLabel,
  StyledTypography,
  StyledWrapper,
  StyledLink,
  StyledButton,
  StyledForm,
  StyleIconWrap
} from './styles'

const LoginForm = () => {
  const history = useHistory()
  const { formatMessage } = useIntl();
  const [passwordShown, setPasswordShown] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(formatMessage({
        id: 'auth.login.email.validation2',
        defaultMessage: 'Email is required',
      })).email(formatMessage({
        id: 'auth.login.email.validation1',
        defaultMessage: 'Enter a valid email',
      })),
    password: Yup.string()
      .required(formatMessage({
        id: 'auth.login.password.validation2',
        defaultMessage: 'Enter your password',
      })).min(8, formatMessage({
        id: 'auth.login.password.validation1',
        defaultMessage: 'Password must contain at least 8 characters',
      }))
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = () => {
    //  TODO: login stuff
  };

  const onForgotPassword = () => {
    // TODO: when forgot password page implemented, change route to forgot pass
    history.push(authRoutes.signup)
  }

  return (
    <StyledMain>
      <StyledRoot>
        <StyledLogo>
          <Link to={authRoutes.login}>
            <img src={logo} alt="" width="100%" height="100%" />
          </Link>
        </StyledLogo>
        <StyledTypography>
          {formatMessage({
            id: 'auth.login.title',
            defaultMessage: 'Log in to your account',
          })}
        </StyledTypography>
        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="email"
              type="email"
              label={formatMessage({
                id: 'auth.login.email',
                defaultMessage: 'Email Address',
              })}
              name='email'
              reference={register}
              inputError={errors.email && errors.email.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'envelope']} />}
            />

            <TextInput
              id="password"
              type={passwordShown ? "text" : "password"}
              label={formatMessage({
                id: 'auth.login.password',
                defaultMessage: 'Password',
              })}
              name='password'
              reference={register}
              inputError={errors.password && errors.password.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={<StyleIconWrap><FontAwesomeIcon onClick={() => setPasswordShown(!passwordShown)} icon={['far', passwordShown ? 'eye' : 'eye-slash']} /></StyleIconWrap>}
            />

            <StyledWrapper>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value={formatMessage({
                      id: 'auth.login.rememberMe',
                      defaultMessage: 'Remember Me',
                    })}
                    control={<Checkbox color="primary" />}
                    label={formatMessage({
                      id: 'auth.login.rememberMe',
                      defaultMessage: 'Remember Me',
                    })}
                  />
                </FormGroup>
              </FormControl>
              <StyledLabel>
                <LinkButton onClick={onForgotPassword} isButton>{formatMessage({
                  id: 'auth.login.forgotPassword',
                  defaultMessage: 'Forgot Your Password?',
                })}</LinkButton>
              </StyledLabel>
            </StyledWrapper>

            <StyledButton>
              <Button type="submit">
                {formatMessage({
                  id: 'auth.login.login',
                  defaultMessage: 'Login',
                })}
              </Button>
            </StyledButton>
          </form>
        </StyledForm>
        <StyledLink>
          {formatMessage({
            id: 'auth.login.account',
            defaultMessage: 'Don’t have an account yet?',
          })}
          <LinkButton href="https://www.facebook.com/zaphello.phello">Join ZapHello</LinkButton>
        </StyledLink>
      </StyledRoot>
    </StyledMain >
  );
}

export default LoginForm;
