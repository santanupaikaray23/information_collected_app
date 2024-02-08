import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
   

    
    render(){
        return(
           <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Portfolio</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        
                       
                        </div>
                    </div>
                </nav>
                </div>
          
        )
    }
    
    // pass code to the backend 
    
}

export default withRouter(Header);