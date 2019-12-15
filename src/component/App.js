import React, { Component } from 'react';
import TodosData from '../data/TodoData';
import TodoItem from './TodoItem'

class App extends Component {

  constructor() {
    super()
    this.state = { listData: TodosData }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id) {
    this.setState(previousState => {
      const updateTodoList = previousState.listData.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return updateTodoList
    }

    )
  }

  render() {
    const TodoList = this.state.listData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return <div>{TodoList}</div>
  }
}

export default App;
