import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const Password = ({ password, onChange }) => (
  <FormGroup controlId='password'>
    <ControlLabel>Password</ControlLabel>
    <FormControl
      type='password'
      value={password}
      onChange={(event) => onChange(event.target.value)}
    />
  </FormGroup>
);

export default Password;