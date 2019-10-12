import React from 'react';
import { CssBaseline, Container, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import TaskList from './components/TaskList';
import IdGen from './helpers/idgenerator';

class App extends React.Component {
  state = {
    task: '',
    editField: '',
    currentTask: '',
    todo: [],
    isModalOpen: false,
  };

  fieldHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  enterHandler = (e) => {
    if (e.key === 'Enter' && this.state.task) {
      this.saveTask(e.target.name)
    }
  }

  enterEditHandler = (e) => {
    if (e.key === 'Enter' && this.state.editField) {
      let newTodo = [...this.state.todo]
      let task = newTodo.find((e) => e.id === this.state.currentTask)
      task.text = this.state.editField
      this.setState({ todo: newTodo, isModalOpen: false })
      console.log('funciona')
    }
  }

  saveTask = (field) => {
    let value = this.state[field]
    let newTodo = [...this.state.todo, { id: IdGen(), text: value, status: 'pending' }]
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

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  openEdition = (id) => {
    let newTodo = [...this.state.todo];
    let task = newTodo.find((e) => e.id === id);
    this.setState({ editField: task.text, isModalOpen: true, currentTask: id })
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
          variant='outlined'
        />
        <TaskList
          title={'Completadas'}
          data={completed}
          changeStatus={this.changeStatus}
          deleteTask={this.deleteTask}
          editTask={this.openEdition}
        />
        <TaskList
          title={'Pendientes'}
          data={pending}
          changeStatus={this.changeStatus}
          deleteTask={this.deleteTask}
          editTask={this.openEdition}
        />
        <Modal open={this.state.isModalOpen} onClose={this.toggleModal}>
          <div className={'modal-cotent'}>
            <Container>
              <h3>Editar</h3>
              <TextField
                value={this.state.editField}
                name={'editField'}
                onChange={e => this.fieldHandler(e)}
                onKeyPress={e => this.enterEditHandler(e)}
              />
              <Button>Cancelar</Button>
          </Container>
          </div>
        </Modal>
      </Container>

    )
  }
}

export default App;
