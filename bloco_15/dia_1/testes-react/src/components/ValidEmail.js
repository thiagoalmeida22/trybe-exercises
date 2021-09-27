  // App.js
  import React, { Component } from 'react';
  import '../App.css';
  
class ValidEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
    this.verifyEmail = this.verifyEmail.bind(this);
  }

  verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };

  ValidEmail = (props) => {
    const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(this.verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
    </div>
  );
  };

}
  
export default ValidEmail;
  