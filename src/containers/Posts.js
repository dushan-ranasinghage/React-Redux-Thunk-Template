import React, { Component } from 'react';
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { postsActions } from '../actions/';
import { withRouter } from 'react-router-dom';


class Posts extends Component {

    state = {
        isActive: false
    }

    constructor(props){
        super(props)
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData = () => {
        debugger
        this.setState({loading: true})
        this.props.getPostsData()
    }
  render() {
      console.log("Props",this.props);
    return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Semantic UI React Thunk Template</Header>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>
                    A text container is used for the main container, which is useful for single column layouts.
                </p>
                
                <Button primary onClick={this.fetchData}>Fetch</Button>

            </Container>
    );
  }
}
function mapStateToProps(state) {
    return {
        ...state.posts
    };
}

export default withRouter(connect(mapStateToProps, postsActions)(Posts))
