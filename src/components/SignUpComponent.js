import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LogInComponent from './loginComponent';
import './signup.css'
import {withRouter} from 'react-router';
 class SignUpComponent extends Component {
   constructor(props){
     super(props);

     this.state={
       firstName:'',
       lastName:'',
       emailId:'',
       password:'',
       
        
     };
    
     this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
     this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
     this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
     this.changePasswordHandler=this.changePasswordHandler.bind(this);
     this.saveUser=this.saveUser.bind(this);
     this.handleRegister=this.handleRegister.bind(this);
   }
   
   
   changeFirstNameHandler=(event)=>{
      this.setState({firstName:event.target.value});
   }
   changeLastNameHandler=(event)=>{
    this.setState({lastName:event.target.value});
 }
 changeEmailIdHandler=(event)=>{
  this.setState({emailId:event.target.value});
  }
  changePasswordHandler=(event)=>{
    this.setState({password:event.target.value});
    
 }
 saveUser=(e)=>{
   e.preventDefault();
   //let user={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId,password:this.state.password};
   
}
  handleRegister()
  {
    this.props.history.push('/login');
    this.setState({
      clicked: true
    });

    
  }
 
   render() {
    return (
      
        
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-">
              <h1 >Sign Up</h1>
            
              <div class="list-group list-group-flush">
               <div class="floatleft"> 
               
                  <div className="form-group">
                    <li>First Name</li>
                    <input placeholder="First Name" name="firstname" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                  </div>
                 
                  <div className="form-group">
                    <li>Last Name</li>
                    <input placeholder="Last Name" name="lastname" className="form-control" value={this.state.lastName}  onChange={this.changeLastNameHandler}/>
                  </div>
                  <div className="form-group">
                    <li>Email Id</li>
                    <input placeholder="Email id" name="emailid" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                  </div>
                  <div className="form-group">
                    <li>Password</li>
                    <input placeholder="Password" name="password" className="form-control" id="para1" value={this.state.password} onChange={this.changePasswordHandler} autocomplete="off"/>
                  </div>
                  <button type="button" className="btn btn-success" onClick={this.handleRegister}>Register</button>
                  {this.state.clicked ? <LogInComponent/> : null}
                 
                  </div>
              </div>
              </div>
            </div>
          </div>
      
    );
  }
   }
export default withRouter(SignUpComponent);