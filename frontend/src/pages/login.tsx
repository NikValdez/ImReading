import { Formik, Form, Field } from 'formik';
import Router from 'next/router';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import cookie from 'js-cookie';
import { NextPage } from 'next';
// import { Title } from '../styles/Title';
import * as Yup from 'yup';
import {
  PageWrapper,
  Title,
  Label,
  Input,
  ErrorMessageStyles,
  SubmitButton,
  CodeWrapper,
} from '../styles/Form';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

interface LoginValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const LoginPage: NextPage = () => {
  const [login, { data }] = useMutation(LOGIN_MUTATION);
  const initialValues: LoginValues = { email: '', password: '' };

  return (
    <PageWrapper>
      <Title>Login</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const response = await login({
            variables: values,
          });
          cookie.set('token', response.data.login.token, { expires: 365 });

          Router.push('/home');
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Label htmlFor="email">
              Email
              <Field type="email" name="email" as={Input} />
              {errors.email && touched.email ? (
                <ErrorMessageStyles>{errors.email}</ErrorMessageStyles>
              ) : null}
            </Label>
            <Label htmlFor="password">
              Password
              <Field type="password" name="password" as={Input} />
              {errors.password && touched.password ? (
                <ErrorMessageStyles>{errors.password}</ErrorMessageStyles>
              ) : null}
            </Label>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Login
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </PageWrapper>
  );
};

export default LoginPage;
