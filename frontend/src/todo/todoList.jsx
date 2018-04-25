import React from 'react';

import Icon from '../template/iconButton'
import IconButton from '../template/iconButton';

export default props => {


  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done?'markAsDone':''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}></IconButton>
          <IconButton style='warning' icon='undo' hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}></IconButton>
          <IconButton style='danger' icon='trash-o' hide={!todo.done} onClick={() => props.handleRemove(todo)}></IconButton>
        </td>
      </tr>
    ))
  }

  
    return (
      
      <table className='table table-hover table-bordered'>
        <thead>
          <tr>
            <th>Descrição</th>
            <th className='tableAction'>Opções</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
      
    )
  }
