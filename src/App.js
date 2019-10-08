import React from 'react';
import { CssBaseline, Container } from '@material-ui/core'

class App extends React.Component {
  state = {
    task: '',
    todo: []
  }
  render() {
    return (
      <Container>
        <CssBaseline />
        <h1> Todo</h1>
      </Container>
    )
  }
}

export default App;
