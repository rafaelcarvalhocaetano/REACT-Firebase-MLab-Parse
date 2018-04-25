import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from './todoList';


const url = 'http://localhost:3003/api/todos'

export class Todo extends Component {


  constructor(props) {
    super(props)

    this.state = { description: '', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.refresh()

  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` :'' 
    axios.get(`${url}?sort=-createAt${search}`)
      .then((resp) => {
        this.setState({ ...this.state, description, list: resp.data })
      })
  }
  handleClear(){
    this.refresh()
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }
  handleAdd() {
    const description = this.state.description
    axios.post(url, { description }).then(resp => this.refresh())
  }
  handleRemove(todo) {
    //setando a url e passando o id  ${url}/${todo._id}
    axios.delete(`${url}/${todo._id}`).then((data) => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${url}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
  }
  handleMarkAsPending(todo) {
    axios.put(`${url}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description))
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas ' small='Cadastro' />

        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}/>

        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending} />
      </div>
    )
  }
}

export default Todo
