 import React, { Component } from 'react'
 import PageHeader from '../template/pageHeader';
 import TodoForm from '../todo/todoForm';
import { TodoList } from './todoList';
 
 export class Todo extends Component {
   render() {
     return (
       <div>
        <PageHeader name='Tarefas ' small='Cadastro'/>
        <TodoForm/>
        <TodoList/>
       </div>
     )
   }
 }
 
 export default Todo
 