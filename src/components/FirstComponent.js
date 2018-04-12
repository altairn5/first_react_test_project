import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

const FirstComponent = () => (

  <form>
       <FormGroup controlId="formBasicText">
         <FormControl type="search" placeholder="enter something..."/>
       </FormGroup>
       {'  '}
       <Button type="submit">
       search
       </Button>
     </form>
   )
// or use {} instead both work :/

export default FirstComponent
