import { Formik, Form, Field, ErrorMessage } from 'formik'
import Router from 'next/router'
import React from 'react'
import Layout from '../components/Layout'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import withApollo from '../lib/apollo'

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
    }
  }
`

const LoginPage: React.FunctionComponent = () => {
  //   const { loading, error, data } = useMutation(LOGIN_MUTATION)
  const [login, { data }] = useMutation(LOGIN_MUTATION)

  console.log(data)
  return (
    <Layout title="Login page">
      <Formik
        initialValues={{ email: '', password: '' }}
        // validate={values => {
        //   const errors = {}
        //   if (!values.email) {
        //     //   errors.email = 'Required'
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     //   errors.email = 'Invalid email address'
        //   }
        //   return errors
        // }}
        onSubmit={async values => {
          console.log('submitting')
          const response = await login({
            variables: values
          })
          console.log(response)

          Router.push('/')
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default withApollo(LoginPage)
