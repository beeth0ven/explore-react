import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Email = ({ email, onChange }) => (
  <FormGroup controlId='email'>
    <ControlLabel>E-mail</ControlLabel>
    <FormControl
      autoFocus value={email}
      onChange={(event) => onChange(event.target.value)}
    />
  </FormGroup>
);

export default Email;
