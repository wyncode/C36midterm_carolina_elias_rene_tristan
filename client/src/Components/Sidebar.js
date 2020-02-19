import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>FILTER BY:</h3>
      <ButtonToolbar>
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
      <ToggleButton value={2}>Radio 2</ToggleButton>
      <ToggleButton value={3}>Radio 3</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
</>
    </div>
  );
};

export default Sidebar;
