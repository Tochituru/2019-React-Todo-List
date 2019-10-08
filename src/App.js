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
  enterHandler(e) {
    if (e.key ==='Enter'){
    let value = this.state[e.target.name]
    let newTodo = [...this.state.todo, value]
    this.setState({todo: newTodo, task: ''})
    console.log(this.state.todo); //esto imprime uno anterior porque no es inmediato como en JS
    
    }
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
        onKeyPress={e => this.enterHandler(e)}
        variant='outlined' />
      </Container>
    )
  }
}

export default App;
