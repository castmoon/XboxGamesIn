import Button from "@components/Button";
import Logo  from '@assets/xbox-logo.svg'
import Input from "@components/Input";
import "./register.css";
import { Link } from 'react-router-dom';

function Register () {
  return(
    <div className="display">
      <div className="sideWhite">
        <div className="content">
          <img src={Logo} alt="logo" id="logo"/>
          <h2>Register Now</h2>
          <form className="forms">
            <Input type="text" placeholder="Name"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Repeat password"/>
            <Button name="Submit" className="button"/>
          </form>
          <footer>
            <Link className="link" to="/">Have an account? Log in!</Link>
          </footer>
        </div>  
      </div>
    </div>
  );
}

export default Register;