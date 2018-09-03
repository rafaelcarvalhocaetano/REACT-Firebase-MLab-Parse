import React, { Component } from "react";
import Main from "../template/Main";

import axios from "axios";
import { setServers } from "dns";
import { stat } from "fs";

const header = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastramento de usuários com React e SpringBoot"
};

const baseUrl = "http://localhost:3001/users";
// estado inicial do estado como vazio
const initialState = {
  user: { nome: "", email: "" },
  list: []
};

export default class UserCrud extends Component {
  state = { ...initialState };

  // component será exibido quando
  componentWillMount() {
    axios(baseUrl).then(req => {
      this.setState({ list: res.data });
    });
  }

  // limpa o formulário
  clear() {
    this.setState({ user: initialState.user });
  }

  // salva um usuário
  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then(resp => {
      const list = this.getUpdateList(resp.data);
      // limpando formulario
      this.setState({ user: initialState.user, list });
    });
  }

  // clonando o usuário
  updateField(e) {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  //
  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label name="nome">Nome</label>
              <input
                type="text"
                placeholder="Seu Nome"
                className="form-control"
                name="nome"
                id="nome"
                value={this.state.user.nome}
                onChange={a => this.updateField(a)}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label name="email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Seu@email.com"
                name="email"
                id="email"
                value={this.state.user.email}
                onChange={b => this.updateField(b)}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12d-flex justfy-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>
              Salvar
            </button>
            <button
              className="btn btn-secondery ml-2"
              onClick={e => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  getUpdateList(user) {
    const list = this.state.list.filter(u => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(req => {
      // porcurando o usuário
      const list = this.state.list.filter(u => u !== user);
      this.setState({ list });
    });
  }

  // criando a tabela
  renderTable() {
    return (
      <table className="table-hover mt-4">
        <theader>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </theader>
        <tbody>
         {this.renderRow()}
        </tbody>
      </table>
    );
  }

  renderRow() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning">
            <i className="fa fa-pencil"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return <Main {...header}>{this.renderForm()}</Main>;
  }
}
