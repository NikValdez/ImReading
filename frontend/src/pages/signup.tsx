import { Formik, Form, Field } from 'formik';
import Router from 'next/router';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import cookie from 'js-cookie';
import { NextPage } from 'next';
import { Title } from '../styles/Title';
import * as Yup from 'yup';

const SIGNUP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

interface SignupValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const SignupPage: NextPage = () => {
  //   const { loading, error, data } = useMutation(LOGIN_MUTATION)
  const [signup, { data }] = useMutation(SIGNUP_MUTATION);
  const initialValues: SignupValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  console.log(data);
  return (
    <div>
      <Title>Signup</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const response = await signup({
            variables: values,
          });
          cookie.set('token', response.data.signup.token, { expires: 365 });

          Router.push('/me');
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="name" name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <div>
              <div>
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <Field
                  type="passwordConfirmation"
                  name="passwordConfirmation"
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <div>{errors.passwordConfirmation}</div>
                ) : null}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Signup
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage;
