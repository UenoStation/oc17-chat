import React, { Component } from 'react';

import CommentBar from './components/CommentBar';
import CommentList from './components/CommentList';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


class App extends Component {
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
        <CommentList />
        <CommentBar />
        <footer>
          <h5>this is the footer</h5>
        </footer>
      </div>
    );
  }
}

export default App;
