import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import NavMain from './NavMain';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

export default class HomePage extends React.Component {
  render() {
return(
<div>
<NavMain activePage="home" />
<div>
<form>
<FormGroup controlId="formControlsText">
      <ControlLabel>Text</ControlLabel>
      <FormControl type="text" placeholder="Enter text" />
    </FormGroup>
</form>
</div>
</div>
); }
}
