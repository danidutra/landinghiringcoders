import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react';
import './about.css';


function About() {
  return (
    
    <div    className="AboutPage">
    <header className="AboutHeader">
    <h1>{"Cadastre-se e receba nossas ofertas!"}</h1>
    <body>
    <form id="form">
                        <label for="nome">Nome</label>
                        <input type="text" name="name" placeholder="Digite seu nome" id="name"/>
                        <label for="email">E-mail</label>
                        <input type="text" name="email" placeholder="Digite seu e-mail" id="email"/>
                        <input class="submit" type="submit" value="Cadastrar"/>
    </form>
    </body>
    </header>
           </div>

  );
  }

  function saveName(){
    var nome = document.getElementById('nome').value;
    localStorage.setItem('name', nome) 
  }

  function saveEmail(){
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email) 
  }
  
export default About;