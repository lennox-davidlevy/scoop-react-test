import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
//const popover = (
//  <Popover id="popover-basic">
//    <Popover.Header as="h3">Popover right</Popover.Header>
//    <Popover.Body>
//      And here's some <strong>amazing</strong> content. It's very engaging.
//      right?
//    </Popover.Body>
//  </Popover>
//);

//const Example = () => (
//  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//    <Button variant="success">Click me to see</Button>
//  </OverlayTrigger>
//);

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
