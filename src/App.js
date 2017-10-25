import React, { Component } from 'react';

import appstyles from './app_style';

import CommentBar from './components/CommentBar';
import CommentList from './components/CommentList';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


class App extends Component {

  state = {
    comments: [
      { 
        user: 'User1234',
        message: 'Nulla efficitur lacus sit amet sem bibendum egestas.'
      },
      { 
        user: 'User567',
        message: 'Fusce tincidunt sed felis vitae ultrices.'
      },
      { 
        user: 'User8910',
        message: 'Aenean non ante quam. Curabitur venenatis pretium nunc sed feugiat.'
      },
    ]
  }


  render() {
    const container = {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw'
    } 

    return (
      <div style={container}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              User1234<br /><span>October 24th, 2017</span>
            </Typography>
          </Toolbar>
        </AppBar>
        <CommentList comments={this.state.comments} />
        <CommentBar />
        <footer style={appstyles.footer}>
          <h5>this is the footer</h5>
        </footer>
      </div>
    );
  }
}

export default App;
