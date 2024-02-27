import React from "react";
import{Link} from 'react-router-dom';

function Header(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
       
  
    <a className="navbar-brand" href="#" style={{color:"black"}}>Nav bar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse"
     data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-lable="Togle navigation" >
   
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
        <a className="nav-link " href="/"><b>Home</b> <span className="sr-only">(current)</span></a> 
        </li>
        <li className="nav-item">
          <Link to = "/add" className="nav-link" ><b>Create Student</b></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"><b>About</b></a>
        </li>
      </ul>
    </div>
    
</nav>

    )
}
//<link to="/">Home</link>
//<a className="nav-link " href="/">Home <span className="sr-only">(current)</span></a>
//<link to="/" className="="nav-link>Home</link>

export default Header;