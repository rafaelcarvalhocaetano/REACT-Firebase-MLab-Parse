import React, { Component } from 'react'

export default class SaudacaoClass extends Component {

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    state = {
        /*
        // atribuição direta
        tipo: 'Fala',
        nome: 'Rafael RCC'
        */
       // recebendo do props = propriedade
       tipo: this.props.tipo,
       nome: this.props.nome
    }

    // setTipo(e) {
    //     console.log(e.target.value);
    //     this.props.tipo = e.target.value;
    // }

    setTipo(e) {
        this.setState({
            tipo: e.target.value
        })
    }

    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }
  
  render() {
    // tentando alterar direto do props, porém não dá
    // const {tipo, nome} = this.props

    // fazendo a alteração através do state
    const {tipo, nome} = this.state

    return(
        <div>
            <h1>{tipo} - {nome}</h1>
            <input type="text" placeholder="Tipo .... " value={tipo} onChange={ this.setTipo}/>
            <input type="text" placeholder="Nome .... " value={nome} onChange={ this.setNome} />
        </div>
    )
  }
}
