
import logo from '../../figures/logo2.png'

import { Button, Container } from '@material-ui/core';
import './Header.css'
const Header = () => {
    return (
        <header className="shadow">
            <Container>
            <div className="navbar">
                <div className="logo-area">
                    <img src={logo} className="figure-img img-fluid" alt="logo"/>
                </div>
                <div className="login-area">
                    
                    <Button color="primary" className="login-itme">Login</Button>
                    <Button variant="contained" className="login-itme" color="secondary">Sign Up</Button>
                </div>
            </div>
        </Container>
        </header>
        
    );
};

export default Header;