import React from 'react';
import { CssBaseline, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import nextId from 'react-id-generator';
import TaskList from './components/TaskList'

class App extends React.Component {
  state = {
    task: 'texto precargado',
    todo: []
  };

  fieldHandler = (e) => {
    this.setState({ task: e.target.value });
  };
  enterHandler = (e) => {
    if (e.key === 'Enter') {
      this.saveTask(e.target.name)
    }
  }
  saveTask = (field) => {
    let value = this.state[field]
    let newTodo = [...this.state.todo, { id: nextId('task-'), text: value, status: 'pending' }]
    this.setState({ [field]: '', "todo": newTodo })
  }

  changeStatus = (id) => {
    let newTodo = [...this.state.todo]
    let task = newTodo.find((e) => e.id === id)
    task.status = task.status === 'pending' ? 'completed' : 'pending'
    this.setState({ todo: newTodo });
  }

  deleteTask = (id) => {
    let newTodo = [...this.state.todo];
    let task = newTodo.find((e) => e.id === id);
    newTodo.splice(newTodo.indexOf(task), 1)
    this.setState({ todo: newTodo })
  }

  componentDidMount = () => {
    const persistedState = JSON.parse(window.localStorage.getItem('todo-state'));
    this.setState(persistedState); 
  }
  componentDidUpdate = () => {
    window.localStorage.setItem('todo-state', JSON.stringify(this.state))
  }


  render() {
    const completed = [...this.state.todo.filter((e) => e.status === 'completed')];
    const pending = [...this.state.todo.filter((e) => e.status === 'pending')];

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
        <TaskList 
        title={'Completadas'} 
        data={completed} 
        changeStatus={this.changeStatus} 
        deleteTask={this.deleteTask} />
        <TaskList 
        title={'Pendientes'} 
        data={pending} 
        changeStatus={this.changeStatus} 
        deleteTask={this.deleteTask} />
      </Container>
    )
  }
}

export default App;
