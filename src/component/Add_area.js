import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Add_area = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [buttonState, setButtonState] = useState('inactive');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), task: text, done: false });
    setText('');
  };
  const buttonClick = () => {
    buttonState == 'inactive'
      ? setButtonState('active')
      : setButtonState('inactive');
  };
  return (
    <div>
      <div
        className={`add-button ${buttonState == 'active' ? 'active' : ''}`}
        onClick={buttonClick}
      >
        十
      </div>
      <Form
        className={
          buttonState == 'active' ? 'add-area-show' : 'add-area-noshow'
        }
        onSubmit={handleSubmit}
      >
        <Form.Control
          type='text'
          placeholder='해야 할 일을 적으세요'
          value={text}
          onChange={handleChange}
        ></Form.Control>
        <Button className='form-button-style' variant='secondary' type='submit'>
          추가
        </Button>
      </Form>
    </div>
  );
};

export default Add_area;
