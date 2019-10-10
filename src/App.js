import React from 'react';
import { CssBaseline, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import TaskList from './components/TaskList'
//import TaskList from './TaskList'

class App extends React.Component {
  state = {
    task: 'texto precargado',
    todo: []
  }

  fieldHandler(e) {
    this.setState({ task: e.target.value })
    //console.log(e.target.value);
  }
  enterHandler(e) {
    if (e.key === 'Enter') {
      this.saveTask(e.target.name)
    }
  }
  saveTask(field){
    let value = this.state[field]
    let newTodo = [...this.state.todo, {text: value, status: 'pending'}]
    //si quiero que la lista arranque por el último elemento, cambio el lugar de value
    this.setState({[field]: '', "todo": newTodo })
    //console.log(this.state.todo); esto imprime uno anterior porque no es inmediato como en JS
  }

  render() {
    return (
      <Container>
        <CssBaseline />
        <h1> Todo</h1>
        <TextField
          value={this.state.task}
          label={'la vida'}
          name={'task'}
          onChange={e => this.fieldHandler(e)}
          onKeyPress={e => this.enterHandler(e)}
          variant='outlined' />
          <TaskList data={[...this.state.todo]}/>
      </Container>
    )
  }
}

export default App;
