 import React, { Component } from 'react'
 import PageHeader from '../template/pageHeader'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

 
 export class TodoForm extends Component {

   render() {
     return (

       <div role='form' className='todoForm'>

            <Grid cols='12 9 10'>
          <input type="text" id='description' placeholder='Adicione uma tarefa' className="form-control"/>
          </Grid>

            <Grid cols='12 3 2'>

                <IconButton style='primary' icon='plus'></IconButton>
            </Grid>   
       </div>
     )
   }
 }
 
 export default TodoForm
 