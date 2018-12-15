import React, { Component } from 'react';
import { Form, Checkbox, Modal, Button, Icon, Image, Header } from 'semantic-ui-react';

export default class CreateResource extends Component {

  newForm() {
    return(
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }

  render() {
    console.log(this.props);
    return (
      <Modal trigger={<Button basic color='black' icon labelPosition='right'>Add {this.props.name} <Icon name='plus' /></Button>}>
          <Modal.Header>Creating new {this.props.name}</Modal.Header>
          <Modal.Content image scrolling>
          <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />
          <Modal.Description>
              <Header>{this.props.name}</Header>
              <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
              {this.newForm()}
          </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button primary>
              Save <Icon name='chevron right' />
          </Button>
          </Modal.Actions>
      </Modal>
    );
  }
}
