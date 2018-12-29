import React, { Component } from 'react';
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'

import Navbar from '../components/Navbar';

class Posts extends Component {
  render() {
    return (
        <div>
            <Navbar />

            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Semantic UI React Thunk Template</Header>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>
                    A text container is used for the main container, which is useful for single column layouts.
                </p>
                <Button primary>Fetch</Button>

            </Container>
        </div>
    );
  }
}

export default Posts;
