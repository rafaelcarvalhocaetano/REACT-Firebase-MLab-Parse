import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';


export default props => {

    const keyHandle = (e) => {
        if(e.key === 'Enter'){
            e.shiftkey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (

        <div role='form' className='todoForm'>
    
            <Grid cols='12 9 10'>
                <input  type="text"
                        id='description' 
                        placeholder='Adicione uma tarefa'
                        className="form-control"
                        onKeyUp={keyHandle}
                        onChange={props.handleChange}
                        value={props.description} />
            </Grid>
    
            <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
    
            <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
            <IconButton style='defaul' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
    
}