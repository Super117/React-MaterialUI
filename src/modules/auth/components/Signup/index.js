import React from "react";
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { Checkbox, FormGroup, FormControlLabel, FormControl } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'assets/images/main/logo.svg';

import { authRoutes } from 'modules/auth/routes/constants';

import { TextInput, Button, Link as LinkButton } from 'modules/core/components';

import {
  StyledMain,
  StyledRoot,
  StyledLogo,
  StyledTypography,
  StyledWrap,
  StyledFname,
  StyledLname,
  StyledForm,
  StyledAgree,
  StyledWrapper
} from './styles';

const SignUpForm = () => {
  const { formatMessage } = useIntl();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required(formatMessage({
        id: 'auth.signup.firstName.validation1',
        defaultMessage: 'First Name is required',
      })).matches(/^[A-Za-z]{3,}$/, formatMessage({
        id: 'auth.signup.firstName.validation2',
        defaultMessage: 'Please enter a valid name',
      })),
    lastName: Yup.string()
      .required(formatMessage({
        id: 'auth.signup.lastName.validation1',
        defaultMessage: 'Last Name is required',
      })).matches(/^[A-Za-z]{3,}$/, formatMessage({
        id: 'auth.signup.lastName.validation2',
        defaultMessage: 'Please enter a valid name',
      })),
    email: Yup.string()
      .required(formatMessage({
        id: 'auth.signup.email.validation2',
        defaultMessage: 'Email is required',
      })).email(formatMessage({
        id: 'auth.signup.email.validation1',
        defaultMessage: 'Please enter a valid email address',
      })),
    phone: Yup.string()
      .required(formatMessage({
        id: 'auth.signup.phone.validation2',
        defaultMessage: 'Phone number is required',
      })).matches(/^\d{10,12}$/, formatMessage({
        id: 'auth.signup.phone.validation1',
        defaultMessage: 'Please specify a valid phone number.',
      }))
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = () => {
    // TODO: signup stuff
  }

  return (
    <StyledMain>
      <StyledRoot>
        <StyledLogo>
          <Link to={authRoutes.signup}>
            <img src={logo} alt="" width="60px" height="60px" />
          </Link>
        </StyledLogo>
        <StyledTypography>
          {formatMessage({
            id: 'auth.signup.title',
            defaultMessage: 'Get your free trial account now',
          })}
        </StyledTypography>
        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledWrap>
              <StyledFname>
                <TextInput
                  id="firstName"
                  type="text"
                  label={formatMessage({
                    id: 'auth.signup.firstName',
                    defaultMessage: 'First Name',
                  })}
                  name="firstName"
                  reference={register}
                  IconStart={<FontAwesomeIcon icon={['fal', 'user']} />}
                  inputError={errors.firstName && errors.firstName.message}
                />
              </StyledFname>
              <StyledLname>
                <TextInput
                  id="lastName"
                  type="text"
                  label={formatMessage({
                    id: 'auth.signup.lastName',
                    defaultMessage: 'Last Name',
                  })}
                  name="lastName"
                  reference={register}
                  inputError={errors.lastName && errors.lastName.message}
                />
              </StyledLname>
            </StyledWrap>
            <TextInput
              id="email"
              type="email"
              label={formatMessage({
                id: 'auth.signup.email',
                defaultMessage: 'Email',
              })}
              name='email'
              reference={register}
              inputError={errors.email && errors.email.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'envelope']} />}
            />
            <TextInput
              id="phone"
              type="text"
              label={formatMessage({
                id: 'auth.signup.phone',
                defaultMessage: 'Phone Number',
              })}
              reference={register}
              name="phone"
              inputError={errors.phone && errors.phone.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'mobile-android-alt']} />}
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
            <Button type="submit">
              {formatMessage({
                id: 'Create Account',
                defaultMessage: 'Create Account',
              })}
            </Button>
          </form>
        </StyledForm>
      </StyledRoot>
    </StyledMain>
  );
}

export default SignUpForm;
