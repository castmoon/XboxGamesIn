import React, { Component } from 'react';
import logo from '../../assets/xbox-logo.svg'
import Input from '../../components/Input'
import xbox from '../../assets/xboxpreto.jpg'
import Button from '../../components/Button';

class Content extends Component {
  render() {
    return (
      <div className="window">
        <div className="whiteSide">
          <div className="container">
            <img src={logo} className = "logo"/>
            <p className="title">Xbox Games In</p>
            <form className="form">
                <Input type='text' placeholder='email'/>
                <Input type='password' placeholder='password'/>
                <Button name='Sign in'/>
            </form>
            <div className="footer">
              <a className="links" href="#">Don't have an account?</a>
              <span> | </span>
              <a className="links" href="#">Forgot your password?</a>
            </div>
          </div>
          </div>
          <div>
            <img src={xbox} className='xbox'/>
        </div>
      </div>
    );
  }
}

export default Content;