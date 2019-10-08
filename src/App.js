import React from 'react';
import { CssBaseline, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
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
        <TextField label={'task'} name={'task'} variant='outlined' />
      </Container>
    )
  }
}

export default App;
