import React, { Component } from 'react';
import logo from '@assets/xbox-logo.svg';
import Input from '@components/Input';
import xbox from '@assets/xboxpreto.jpg'
import Button from '@components/Button';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="window">
        <div className="whiteSide">
          <div className="container">
            <img alt='logo' src={logo} className = "logo"/>
            <p className="title">Xbox Games In</p>
            <form className="form">
                <Input type='text' placeholder='email'/>
                <Input type='password' placeholder='password'/>
                <Button name='Sign in'/>
            </form>
            <div className="footer">
              <Link className="links" to ='/register'>Don't have an account?</Link>
              <span> | </span>
              <Link className="links" to ='/'>Forgot your password?</Link>
            </div>
          </div>
          </div>
          <div>
            <img alt='é um xbox padrin' src={xbox} className='xbox'/>
        </div>
      </div>
    );
  }
}

export default Login;