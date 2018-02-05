import React from 'react';
import axios from 'axios';


const api = 'http://www.mocky.io/v2/57dfec211000009020598073';

/*

loadDataFromServer=function() {
    axios.get(this.props.api).then(function(response){
      console.log(response)
    }).catch(function(error){
        console.log(error)
    });
}
*/

export default class Cadastro extends React.Component{
   
    //requisição http
    componentWillMount(){
        //axios.get() busca as informações da url 
        axios.get(api)
        //then() funciona como uma promessa, se caso funcionar a url ele executa outra sequência
        .then( (response) => {
            <h1>{response.data}</h1>
            console.log(response.data); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
        }).catch( () => {
            console.log('erro na busca');
        });


    }
    

    render(){
        return(
       <div>
           { }
       </div>
        );
    }
}