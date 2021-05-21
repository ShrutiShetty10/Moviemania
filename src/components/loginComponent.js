import React, { Component } from 'react';
import './login.css';

export default class LogInComponent extends Component {
    constructor(){
        super();
        this.state = {
          clicked: false
        };
        this.state={ 
          emailId:'',
          password:'',
          
        };
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
     this.changePasswordHandler=this.changePasswordHandler.bind(this);
     this.saveUser=this.saveUser.bind(this);
     this.handleClicklogin = this.handleClicklogin.bind(this);
    }
    
    changeEmailIdHandler=(event)=>{
        this.setState({emailId:event.target.value});
        }
        changePasswordHandler=(event)=>{
          this.setState({password:event.target.value});
        }      
    saveUser=(e)=>{
        e.preventDefault();
       
        
      }
      handleClicklogin()
      {
        this.props.history.push('/');
        this.setState({
          clicked: true
        });
    
      }

  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <h1 style={{color:'black'}}>Log In</h1>
          <div class="list-group list-group-flush">
            <form>
            <div className="form-group">
                 <li>Email Id</li>
                 <input placeholder="Email id" name="emailid" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
              </div>
              
              <div className="form-group">
              <li>Password</li>
                 <input placeholder="Password" name="password" className="form-control" id="para1" value={this.state.password} onChange={this.changePasswordHandler} Style={{textsecurity: 'disc'}} autoComplete="off"/>
              </div>
              <button type="button" className="btn btn-success" onClick={this.handleClicklogin}>Log In</button>
              
            </form>
          </div>
          </div>
        </div>
      </div>
  
    );
  }
}
