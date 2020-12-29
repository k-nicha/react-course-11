import React from 'react'
import { Form, FormControl, FormGroup,
  FormLabel, Col, Row, Button } from 'react-bootstrap'

const Login = () => {
  return <Form>
    <Row>
      <FormGroup as={Col} lg={4}>
        {/* username */}
        <FormLabel>Username</FormLabel>
        <FormControl type='text' />
      </FormGroup>

      <FormGroup as={Col} lg={4}>
        {/* password */}
        <FormLabel>Password</FormLabel>
        <FormControl type='password' />
      </FormGroup>

      <FormGroup as={Col} lg={4}>
        {/* password */}
        <Button>Sign In</Button>
      </FormGroup>
    </Row>
  </Form>
}

export default Login