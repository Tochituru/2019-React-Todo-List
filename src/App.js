import React from 'react';
import { CssBaseline, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
class App extends React.Component {
  state = {
    task: 'texto precargado',
    todo: []
  }

  fieldHandler(e) {
    this.setState({task: e.target.value})
    console.log(e.target.value);
  }

  render() {
    return (
      <Container>
        <CssBaseline />
        <h1> Todo</h1>
        <TextField 
        value={this.state.task} 
        label={'task'} 
        name={'task'} 
        onChange={e=>this.fieldHandler(e)} 
        variant='outlined' />
      </Container>
    )
  }
}

export default App;
